import { MongoClient, Db } from 'mongodb';
import { setupDefaultAdmin } from '../domain/users/user.functions';

let db: Db;

export async function setupDb() {
    db = await connect();
    setupDefaultAdmin();
}

export async function close() {
    if (db) await db.close();
}

export function getDb() {
    if (!db) throw 'Db not connected';
    return db;
}

async function connect(): Promise<Db> {
    const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/launch-test`;
    return await MongoClient.connect(url);
}
