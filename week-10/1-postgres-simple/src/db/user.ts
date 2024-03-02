import { client } from "../index";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const query=await client.query('INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *', [username, password, name]);
    return query.rows[0];
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
      const query=await client.query('SELECT * FROM users WHERE id = $1', [userId]);
      if (query.rows.length === 0) {
        return null;
      }else{
        return query.rows[0];
      }
}
