/*const login = () => {
    
    const input = {
        username : document.getElementById('username').value,
        password : document.getElementById('password').value   
    }
    
    
    fetch('http://localhost:3000/users/login', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
       // console.log(data)
     /*   document.getElementById('server-response').innerHTML = data.message
        
        if (data.message.indexOf('Error') === 0) {
            document.getElementById('server-response').style.color = '#fa755a'
        } */
/*
    })
}

document.getElementById('loginbutton').onclick = login*/