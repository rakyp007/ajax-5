const textBtn = document.getElementById('text');
const text = document.getElementById('result')
textBtn.addEventListener('click', fetchData);

async function fetchData() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    data.forEach(obj => {
        Object.entries(obj).forEach(([name, username]) => {

        text.innerHTML+=  
           ` <ol>
                <li>${obj.name}</li>
                <li>${obj.username}</li>
                --------------------
            </ol>`
        });
        
    });
}