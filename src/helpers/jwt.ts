import jwt from 'jsonwebtoken'

export const generarJWT = (usuario: string) => {
    const payload = {usuario};

    return new Promise((resolve,reject) => {
        const SECRET_JWT_SEED = 'C4rl0s123!';
        jwt.sign(payload, SECRET_JWT_SEED, {
            expiresIn: '24h'
        }, (err, token) => {
            if(err){
                console.log(err);
                reject(err)
            } else {
                resolve(token)
            }
        })
    })

}

