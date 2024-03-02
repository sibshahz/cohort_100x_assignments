import { Client } from 'pg'
import { DB_URL } from './config';

export const client = new Client({
    connectionString: DB_URL
});



async function main() {
    try {
        await client.query(`CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL
        );
        CREATE TABLE IF NOT EXISTS todos (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL REFERENCES users(id),
            title VARCHAR(255) NOT NULL,
            description TEXT,
            done BOOLEAN DEFAULT false
        );`)
    } catch (error) {
        console.log("ERROR: ", error)
    }
}
main();
// (async () => {

// })
