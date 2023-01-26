class MakeIntern{
    constructor(name, id, email, school) {
        this.name = name
        this.id = id
        this.email = email
        this.school = school
    }

    printInfo() {
        console.log(this.name, this.id, this.email, this.school)
    }

    showHTML(){
        const html = `
            <div class="card">
                <header class="header">
                    <h1 class="name">${this.name}</h1>
                    <div class="title">
                        <h2 class="title-h2">Intern</h2>
                    </div>
                </header>
                <div class="info-sec">
                    <div class="id info-div">
                        <span>ID: ${this.id}</span>
                    </div>
                    <div class="email info-div">
                        <span>Email: <a href="#">${this.email}</a></span>
                    </div>
                    <div class="school info-div">
                        <span>School: ${this.school}</span>
                    </div>
                </div>
            </div>
        `
        return html
    }
} 
module.exports = MakeIntern