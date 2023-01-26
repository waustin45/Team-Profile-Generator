const MakeIntern = require('../lib/intern.js')

describe('MakeIntern', () => {
    describe('printInfo', () => {
        // positive test
        it("should console log the inputs of the inquired fields. The name, id, email, and school. ", () => {
            // Arrange
            const name = "bob"
            const id = 1
            const email = "a@aol.com"
            const school = "Harvard"
            const ask = new MakeIntern(name, id, email, school)
            // Act
            ask.printInfo()
            // Assert
            expect(ask).toEqual({"email": "a@aol.com", "id": 1, "name": "bob", "school": "Harvard"})
        })
    })
    describe('', () => {
        // positive test
        it('should create a template literal that return the html needed to display the inputted information.', () => {
            // Arrange
            const name = "bob"
            const id = 1
            const email = "a@aol.com"
            const school = "harvard"
            const html = `
            <div class="card">
                <header class="header">
                    <h1 class="name">${name}</h1>
                    <div class="title">
                        <h2 class="title-h2">Intern</h2>
                    </div>
                </header>
                <div class="info-sec">
                    <div class="id info-div">
                        <span>ID: ${id}</span>
                    </div>
                    <div class="email info-div">
                        <span>Email: <a href="#">${email}</a></span>
                    </div>
                    <div class="school info-div">
                        <span>School: ${school}</span>
                    </div>
                </div>
            </div>
        `
            const ask = new MakeIntern(name, id, email, school)
            // Act
            ask.showHTML()
            // Assert
            expect(html).toEqual(ask.showHTML())
        })
    })
})