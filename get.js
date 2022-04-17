const logBtn = document.getElementById('text');
const result = document.getElementById('result')
logBtn.addEventListener('click', fetchData);

async function fetchData() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    data.forEach(obj => {
        Object.entries(obj).forEach(([name, username]) => {

        result.innerHTML+=  
           ` <ol>
                <li>${obj.name}</li>
                <li>${obj.username}</li>
                --------------------
            </ol>`
        });
        
    });
}