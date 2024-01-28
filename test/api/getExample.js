const request = require('supertest')
const baseUrl = require('../../env')

describe('Get Request example', () => {
    it('Find Pets by Status', async () => {
        const response = await request(baseUrl())
        .get('/store/inventory')
        console.log((response).status)
        console.log((response).body)
    })
})