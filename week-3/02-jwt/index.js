const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const z = require("zod");

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
const schemaUsername=z.string().email();
const schemaPassword=z.string().min(6)
function signJwt(username, password) {
    const passwordResult=schemaPassword.safeParse(password);
    if(!(schemaUsername.safeParse(username).success) || !(schemaPassword.safeParse(password).success)){
        return null;
    }

    // Your code here
    const token = jwt.sign({username: username, password: password},jwtPassword);
    return token;
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {

    const result=jwt.verify(token,jwtPassword,function(err,decoded){
        if(err){
            return false;
        }
        if(decoded){
            return true;
        }

    });

    return result;
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here
    try {
        const decoded = jwt.decode(token, { complete: true });

        if (!decoded) {
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error decoding JWT:', error.message);
        return false;
    }
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
