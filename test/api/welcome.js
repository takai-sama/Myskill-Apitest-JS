const assert = require('chai').assert;
const app = require('../../assert')

//cara assert dengan chai
describe('Welcome Test',function(){
    it('app should return welcome test',function(){
        assert.equal(app(),"welcome to QA course at myskill")
    })
})