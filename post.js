const urlTwo= 'https://jsonplaceholder.typicode.com/users'

const formId = document.getElementById('main')
const submitBtnId = document.getElementById('submit')

let user = {
    name: 'Rakyp',
    lastName: 'tashbaev'
}

fetch ( urlTwo , {
    method:'POST',
    body: JSON.stringify(user)
})
.then(response => console.log(response))

 
