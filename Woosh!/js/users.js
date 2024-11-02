const login = document.getElementById('login')
const passwd = document.getElementById('passwd')
const btn = document.getElementById('reg')

let users = {}

function User(login, passwd){
    this.login = login
    this.passwd = passwd
}
function createId(users){
    return Object.keys(users).length
}

btn.addEventListener('click', () => {
    
})
