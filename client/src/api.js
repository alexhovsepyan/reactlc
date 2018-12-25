
const BASE_NAME = 'https://reactlc.herokuapp.com/api/v1/'
// const BASE_NAME = 'http://localhost:3011/api/v1/'

export const sendContactMessage = (body) => {
    const url  = `${BASE_NAME}contact`
    return fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body
    })
}