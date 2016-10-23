import { MongoClient, Db } from 'mongodb';
let db: Db;

export async function setup() {
    db = await connect();
    await setupDefaultAdmina();
}

export async function close() {
    if (db) {
        db.close();
    }
}

function connect(): Promise<Db> {
    return new Promise((res, rej) => {
       const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/launch-test`;
        MongoClient.connect(url, (err, dbConnection) => {
            if (err) {
                rej('Unable to connect to Mongo database');
            }
            res(db);
        });
    });
}

function setupDefaultAdmina() {
    return new Promise((res, rej) => {

    });
}
