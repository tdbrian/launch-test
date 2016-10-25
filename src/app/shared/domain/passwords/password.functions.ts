import { getUserPasswordHash, addPasswordHash } from './password.datastore';
import User from '../users/user';
import { getUserFromEmail } from '../users/users-repo';
import { compare, hash, genSalt } from 'bcrypt-nodejs';

export async function setUserPassword(password: string, userId: string): Promise<void> {
    const hash = await generateHash(password);
    return await addPasswordHash(hash, userId);
}

export async function attemptMatchUserPassword(sentUserPassword: string, email: string): Promise<User | boolean> {
    const user = await getUserFromEmail(email);
    if (!user || !user._id) return Promise.reject(`No user with this email found ${email}`);
    const hash = await getUserPasswordHash(user._id);
    if (!user) return Promise.reject(`No hash found for this user ${email}`);
    return new Promise<User | boolean>((res, rej) => {
        compare(sentUserPassword, hash, (error, result) => {
            if (error) rej('Unable to compare hash');
            if (result) return res(user);
            res(false);
        });
    });
}

function generateHash(password: string): Promise<string> {
    return new Promise<string>((res, rej) => {
        genSalt(10, (saltErr, salt) => {
            if (saltErr) return rej(saltErr);
            hash(password, salt, (hashError, result) => {
                if (hashError) return rej(hashError);
                res(result);
            });
        });
    });
}
