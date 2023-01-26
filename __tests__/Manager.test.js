const AskManager = require('../lib/Manager.js')

describe('AskManager', () => {
    describe('printInfo', () => {
        // positive test
        it("should console log the inputs of the inquired fields. The name, id, email, and office. ", () => {
            // Arrange
            const name = "bob"
            const id = 1
            const email = "a@aol.com"
            const office = 1
            const ask = new AskManager(name, id, email, office)
            // Act
            ask.printInfo()
            // Assert
            expect(ask).toEqual({"email": "a@aol.com", "id": 1, "name": "bob", "office": 1})
        })
    })
    describe('', () => {
        // positive test
        it('should create a template literal that return the html needed to display the inputted information.', () => {
            // Arrange
            const name = "bob"
            const id = 1
            const email = "a@aol.com"
            const office = 1
            const html = `
            <div class="card">
                <header class="header">
                    <h1 class="name">${name}</h1>
                    <div class="title">
                        <h2 class="title-h2">Manager</h2>
                    </div>
                </header>
                <div class="info-sec">
                    <div class="id info-div">
                        <span>ID: ${id}</span>
                    </div>
                    <div class="email info-div">
                        <span>Email: <a href="#">${email}</a></span>
                    </div>
                    <div class="office info-div">
                        <span>Office#: ${office}</span>
                    </div>
                </div>
            </div>
        `
            const ask = new AskManager(name, id, email, office)
            // Act
            ask.showHTML()
            // Assert
            expect(html).toEqual(ask.showHTML())
        })
    })
})