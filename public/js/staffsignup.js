const staffRegister = () => {

    const input = {
        name : document.getElementById('name').value,
        username : document.getElementById('username').value,
        email : document.getElementById('email').value,
        password : document.getElementById('password').value,
        password2 : document.getElementById('password2').value,
    }
    
    

    fetch('https://ezstaff.herokuapp.com/users/staffRegister', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
       // console.log(data)
        document.getElementById('server-response').innerHTML = data.message
        
        if (data.message.indexOf('Error') === 0) {
            document.getElementById('server-response').style.color = '#fa755a'
        } else {
       
        document.getElementById('server-response').style.color = 'black'
        document.getElementById('name').value = ''
        document.getElementById('username').value = ''
        document.getElementById('email').value = ''
        document.getElementById('password').value = ''
        document.getElementById('password2').value = ''
        
        }

    })
}

document.getElementById('signupbutton').onclick = staffRegister