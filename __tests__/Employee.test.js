const MakeEmployee = require('../lib/employee.js')

describe('MakeEmployee', () => {
    describe('printInfo', () => {
        // positive test
        it("should console log the inputs of the inquired fields. The name, id, email, and Github. ", () => {
            // Arrange
            const name = "bob"
            const id = 1
            const email = "a@aol.com"
            const github = "waustin45"
            const ask = new MakeEmployee(name, id, email, github)
            // Act
            ask.printInfo()
            // Assert
            expect(ask).toEqual({"email": "a@aol.com", "id": 1, "name": "bob", "github": "waustin45"})
        })
    })
    describe('', () => {
        // positive test
        it('should create a template literal that return the html needed to display the inputted information.', () => {
            // Arrange
            const name = "bob"
            const id = 1
            const email = "a@aol.com"
            const github = "waustin45"
            const html = `
            <div class="card">
                <header class="header">
                    <h1 class="name">${name}</h1>
                    <div class="title">
                        <h2 class="title-h2">Engineer</h2>
                    </div>
                </header>
                <div class="info-sec">
                    <div class="id info-div">
                        <span>ID: ${id}</span>
                    </div>
                    <div class="email info-div">
                        <span>Email: <a href="#">${email}</a></span>
                    </div>
                    <div class="github info-div">
                        <span>GitHub: <a href="https://github.com/waustin45">${github}</a></span>
                    </div>
                </div>
            </div>
        `
            const ask = new MakeEmployee(name, id, email, github)
            // Act
            ask.showHTML()
            // Assert
            expect(html).toEqual(ask.showHTML())
        })
    })
})