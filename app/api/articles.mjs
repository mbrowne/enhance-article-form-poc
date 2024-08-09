// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
 * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
 */

/**
 * @type {EnhanceApiFn}
 */
export async function post(req) {
    console.log('Data submitted:', req.body)

    return {
        location: '/',
    }
}
