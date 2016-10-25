import { getDb } from '../../utils/database.functions';
import Password from './password';
import { Collection } from 'mongodb';

const PASSWORDS_COLLECTION = 'passwords';
function getCollection(): Collection {
    return getDb().collection(PASSWORDS_COLLECTION);
}

export async function addPasswordHash(passwordHash: string, userId: string): Promise<any> {
    const passwordsCollection = getCollection();
    return await passwordsCollection.insertOne(<Password>{ userId: userId, hash: passwordHash });
}

export async function getUserPasswordHash(userId: string): Promise<any> {
    const passwordsCollection = getCollection();
    return await passwordsCollection.find(<Password>{ userId: userId }).limit(1).next();
}