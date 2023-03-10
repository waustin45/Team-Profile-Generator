class MakeEmployee{
    constructor(name, id, email, github) {
        this.name = name
        this.id = id
        this.email = email
        this.github = github
    }

    printInfo() {
        console.log(this.name, this.id, this.email, this.github)
    }

    showHTML(){
        const html = `
            <div class="card">
                <header class="header">
                    <h1 class="name">${this.name}</h1>
                    <div class="title">
                        <h2 class="title-h2">Engineer</h2>
                    </div>
                </header>
                <div class="info-sec">
                    <div class="id info-div">
                        <span>ID: ${this.id}</span>
                    </div>
                    <div class="email info-div">
                        <span>Email: <a href="#">${this.email}</a></span>
                    </div>
                    <div class="github info-div">
                        <span>GitHub: <a href="https://github.com/waustin45">${this.github}</a></span>
                    </div>
                </div>
            </div>
        `
        return html
    }
} 
module.exports = MakeEmployee