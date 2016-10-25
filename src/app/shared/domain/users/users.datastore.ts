import { Collection } from 'mongodb';
import { getDb } from '../../utils/database.functions';
import User from './user';

const USERS_COLLECTION = 'users';

function getCollection(): Collection {
    return getDb().collection(USERS_COLLECTION);
}

export async function getUserFromId(id: string): Promise<User> {
    let usersCollection = getCollection();
    return await usersCollection.find({ _id: id }).limit(1).next();
}

export async function getUserFromEmail(email: string): Promise<User> {
    let usersCollection = getCollection();
    return await usersCollection.find({ email: email }).limit(1).next();
}

export async function insertUser(user: User): Promise<string> {
    let usersCollection = getCollection();
    return await usersCollection.insertOne(user).then(u => u.insertedId.toHexString());
}

export async function getAdminUserCount(user: User): Promise<number> {
    let usersCollection = getCollection();
    return await usersCollection.find({ 'firstName': user.firstName, 'isAdmin': user.isAdmin }).count(false);
}
