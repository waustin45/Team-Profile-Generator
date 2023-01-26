class AskManager {
    constructor(mngName, mngId, mngEmail, mngOffice) {
        this.name = mngName
        this.id = mngId
        this.email = mngEmail
        this.office = mngOffice
    }

    printInfo() {
        console.log(this.name, this.id, this.email, this.office)
    }
    showHTML(){
        const html = `
            <div class="card">
                <header class="header">
                    <h1 class="name">${this.name}</h1>
                    <div class="title">
                        <h2 class="title-h2">Manager</h2>
                    </div>
                </header>
                <div class="info-sec">
                    <div class="id info-div">
                        <span>ID: ${this.id}</span>
                    </div>
                    <div class="email info-div">
                        <span>Email: <a href="#">${this.email}</a></span>
                    </div>
                    <div class="office info-div">
                        <span>Office#: ${this.office}</span>
                    </div>
                </div>
            </div>
        `
        return html
    }
}
module.exports = AskManager;