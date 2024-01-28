const {expect} = require('chai')
const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../Data/userData.js')

describe('Post Request example', () => {
        const response = request(baseUrl())
        .post('/user')
        .send(DATA.CREATE_USER_DATA)   
    it('respon status equal 200', async () => {
        expect((await response).status).to.equal(200)
    })
    it('respon body contain property message', async () => {
        expect((await response).body).to.haveOwnProperty("message")
    })
})