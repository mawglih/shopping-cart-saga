const index = require("./index")
// @ponicode
describe("index.fetchProductsInit", () => {
    test("0", () => {
        let callFunction = () => {
            index.fetchProductsInit()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.fetchProducts", () => {
    test("0", () => {
        let callFunction = () => {
            index.fetchProducts(["Bacon", "Mouse", "Ball", "Hat", "Shoes"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.fetchProducts("Bacon")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.fetchProducts("Shoes")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.fetchProducts("Ball")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.fetchProducts("Hat")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.fetchProducts(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
