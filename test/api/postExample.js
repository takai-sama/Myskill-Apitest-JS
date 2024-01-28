const request = require('supertest')
const baseUrl = require('../../env')

describe('Post Request example', () => {
    it('Create new user', async () => {
        const response = await request(baseUrl())
        .post('/user')
        .send({
            "id": 100,
            "username": "panji",
            "firstName": "panji",
            "lastName": "maul",
            "email": "panji@gmail.com",
            "password": "panji",
            "phone": "0812333",
            "userStatus": 1
        })
        console.log((response).status)
        console.log((response).body)
    })
})