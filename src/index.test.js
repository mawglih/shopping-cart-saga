const rewire = require("rewire")
const index = rewire("./index")
const logger = index.__get__("logger")
// @ponicode
describe("logger", () => {
    test("0", () => {
        let callFunction = () => {
            logger(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            logger(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            logger(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
