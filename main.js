const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then(
    response => {
       return response.text();
    }
 ).then(
    text => {
       document.getElementById('result').innerHTML = text;
     }
     )

     function login(){
      var login = document.getElementById('login').value;
      var pass = document.getElementById('pass').value;

      fetch('/login_ajax.php?login=' + login + '&pass=' + pass).then(
         response => {
            return response.text();
         }
      ).then(
         text => {
            document.getElementById('result').innerHTML = text;
         }
      );
   }

      
   