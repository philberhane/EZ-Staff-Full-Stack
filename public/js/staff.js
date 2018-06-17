// Initializes the Google Maps API. In order to use it's 'calculate distance' function, I needed to have an actual map on the page. And so, I did that, and just
//made the map hidden.
 function initMap() {
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: -34.397, lng: 150.644}
        })
        const geocoder = new google.maps.Geocoder()

      }

        
      

document.querySelector('.dashboard').setAttribute("href", "/users/staff")
document.getElementById('dashboard2').setAttribute("href", "/users/staff")
document.getElementById('logo').setAttribute("href", "/users/staff")


function viewEvents() {
    const contentSelector = document.getElementById('content')
    
    contentSelector.innerHTML = ''
    
    document.getElementById('server-response').innerHTML = ''
    
    if (document.querySelector('.active')) {
    document.querySelector('.active').className = ''
}
    document.getElementById('allEventsLi').className = 'active'
    
     const input = {
         organization: document.getElementById('orgName').innerText
     }
    
    
    fetch('https://ezstaff.herokuapp.com/events/viewEvents', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
         if (data.message.indexOf('Error') === 0) {
             
            document.getElementById('server-response').innerHTML = data.message
            document.getElementById('server-response').style.color = '#fa755a'
             
        } else {
        
     for (i=0; i < data.message.length; i++) {
            
            var div = document.createElement('div')
            div.className = 'columns'
         
            var ul = document.createElement('ul')
            ul.className = 'price'
            div.appendChild(ul)
            
            var li1 = document.createElement('li')
            li1.className = 'blue'
            li1.innerText = data.message[i].venue
            ul.appendChild(li1)
         
            var li2 = document.createElement('li')
            li2.innerText = data.message[i].location
            ul.appendChild(li2)
            
            var parsedDate = new Date(data.message[i].date)
            var dd = parsedDate.getDate();
            var mm = parsedDate.getMonth()+1; //January is 0!
            var yyyy = parsedDate.getFullYear();
            var eventDate = mm + '/' + dd + '/' + yyyy
            var li3 = document.createElement('li')
            li3.innerText = eventDate
            ul.appendChild(li3)
         
            var li4 = document.createElement('li')
            li4.innerText = data.message[i].begins + ' ' + '-' + ' ' + data.message[i].ends
            ul.appendChild(li4)
         
            var li5 = document.createElement('li')
            li5.className = 'grey'
            li5.innerText = data.message[i].numberOfStaff + ' Staff Members Required'
            ul.appendChild(li5)
         
            var li6 = document.createElement('li')
            li6.innerText = data.message[i].specs
            ul.appendChild(li6)
            
            for (j=0; j<data.message[i].staffed.length; j++) {
                    var liLoop = document.createElement('li')
                     liLoop.innerText = data.message[i].staffed[j]
                    liLoop.className = 'grey'
                    ul.append(liLoop)
                
            }
         
            var today = new Date();
            var todaydd = today.getDate();
            var todaymm = today.getMonth()+1; //January is 0!
            var todayyyyy = today.getFullYear();

            if(todaydd<10) {
                todaydd = '0'+todaydd
                } 

            if(todaymm<10) {
            todaymm = '0'+todaymm
                } 

            today = todaymm + '/' + todaydd + '/' + todayyyyy;
                    
                    const todayDate = new Date(today)
                    
         
                    if (todayDate < parsedDate) {
                        contentSelector.appendChild(div)
                    }
            

                }
        
        
        }
        

    })
}



function viewYourEvents() {
    const contentSelector = document.getElementById('content')
    
    contentSelector.innerHTML = ''
    
    document.getElementById('server-response').innerHTML = ''
    
    if (document.querySelector('.active')) {
    document.querySelector('.active').className = ''
}
    document.getElementById('yourEventsLi').className = 'active'
    
    
     const input = {
         organization: document.getElementById('orgName').innerText
     }
    
    
    fetch('https://ezstaff.herokuapp.com/events/viewEvents', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
         if (data.message.indexOf('Error') === 0) {
             
            document.getElementById('server-response').innerHTML = data.message
            document.getElementById('server-response').style.color = '#fa755a'
             
        } else {
            
            
            // A template for efficient checking if array contains something
            Array.prototype.contains = function(obj) {
            var i = this.length;
            while (i--) {
            if (this[i] === obj) {
            return true;
            }
            }
                return false;
            }
            
        const user = document.getElementById('hiddenName').value
        
     for (i=0; i < data.message.length; i++) {
         
    if (data.message[i].staffed.contains(user)) {
            
            var div = document.createElement('div')
            div.className = 'columns'
         
            var ul = document.createElement('ul')
            ul.className = 'price'
            div.appendChild(ul)
            
            var li1 = document.createElement('li')
            li1.className = 'header'
            li1.innerText = data.message[i].venue
            ul.appendChild(li1)
         
            var li2 = document.createElement('li')
            li2.innerText = data.message[i].location
            ul.appendChild(li2)
            
            var parsedDate = new Date(data.message[i].date)
            var dd = parsedDate.getDate();
            var mm = parsedDate.getMonth()+1; //January is 0!
            var yyyy = parsedDate.getFullYear();
            var eventDate = mm + '/' + dd + '/' + yyyy
            var li3 = document.createElement('li')
            li3.innerText = eventDate
            ul.appendChild(li3)
         
            var li4 = document.createElement('li')
            li4.innerText = data.message[i].begins + ' ' + '-' + ' ' + data.message[i].ends
            ul.appendChild(li4)
         
            var li5 = document.createElement('li')
            li5.className = 'grey'
            li5.innerText = data.message[i].numberOfStaff + ' Staff Members Required'
            ul.appendChild(li5)
         
            var li6 = document.createElement('li')
            li6.innerText = data.message[i].specs
            ul.appendChild(li6)
            
            for (j=0; j<data.message[i].staffed.length; j++) {
                    var liLoop = document.createElement('li')
                     liLoop.innerText = data.message[i].staffed[j]
                liLoop.className = 'grey'
                    ul.append(liLoop)
                
            }
        
            
            var li7 = document.createElement('li')
            var checkInButton = document.createElement('button')
            checkInButton.value = data.message[i]._id
            checkInButton.id = 'checkInButtonid' + i
        checkInButton.className = 'btn btnOrange'

            
            // Area for checkin loop
            if (data.message[i].checkIn.contains(user)) {
            checkInButton.innerText = 'Check Out'
            checkInButton.setAttribute("onclick", "checkOut(this.id)")
            } else {
                checkInButton.innerText = 'Check In'
                checkInButton.setAttribute("onclick", "checkIn(this.id)")
            }
                
                
            
            li7.appendChild(checkInButton)
            ul.appendChild(li7)
        
        var checkInList = document.createElement('ul')
        checkInList.className = 'hidden'
        
        li7.appendChild(checkInList)
        
        for (j = 0; j < data.message[i].checkIn.length; j++) {
            var checkedInArray = document.createElement('li')
            checkedInArray.innerText = data.message[i].checkIn[j]
             checkInList.appendChild(checkedInArray)
         }
        
            
        
         
            var today = new Date();
            var todaydd = today.getDate();
            var todaymm = today.getMonth()+1; //January is 0!
            var todayyyyy = today.getFullYear();

            if(todaydd<10) {
                todaydd = '0'+todaydd
                } 

            if(todaymm<10) {
            todaymm = '0'+todaymm
                } 

            today = todaymm + '/' + todaydd + '/' + todayyyyy;
                    
                    const todayDate = new Date(today)
                    
         
                    if (todayDate < parsedDate) {
                        contentSelector.appendChild(div)
                    }
            
                } else {
                    
                }
                }
           
            var divArray = document.querySelectorAll('.columns')

            if (divArray.length === 0) {
                document.getElementById('server-response').innerHTML = 'Error: You are currently not staffed for any upcoming events'
                document.getElementById('server-response').style.color = '#fa755a'
            }
        
        
        }
        

    })
}


function checkIn(clicked_id) {
    
    
    const clickedButton = document.getElementById(clicked_id)
    const user = document.getElementById('hiddenName').value
    var id = clickedButton.value
    
    if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        
        function showPosition(position) {
  
    var latitude1 = position.coords.latitude
    var longitude1 = position.coords.longitude
    
    
    //Then decode the address into coordinates
    
    const geocoder = new google.maps.Geocoder()
    



    const address = clickedButton.parentElement.parentElement.firstElementChild.nextElementSibling.innerText

geocoder.geocode( { 'address': address}, function(results, status) {

if (status == google.maps.GeocoderStatus.OK) {
    const latitude2 = results[0].geometry.location.lat()
    const longitude2 = results[0].geometry.location.lng()

    
    //Take both and compare
    const distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(latitude1, longitude1), new google.maps.LatLng(latitude2, longitude2))

    if (distance < 100) {
        
        
        var checkInArray = []
        var checkInList = clickedButton.nextElementSibling
    
    for (i=0; i<checkInList.children.length; i++) {
        checkInArray.push(checkInList.children[i].innerText)
    }
        
    //For Check In
       checkInArray.push(user) 
    
        
    //For Logout
    /*
    for (j = 0; j < checkInArray.length; j++) {
        if (checkInArray[j] === user) {
        	checkInArray.splice(j, 1);
            break;
        }
      }
 */
        var checkInStatus = 'Checking in'
        
    const input = {
        id : id,
        checkIn : checkInArray,
        organization: document.getElementById('orgName').innerText,
        user: document.getElementById('fullName').innerText,
        checkInStatus : checkInStatus
    }

    //If difference is less than 50 km, modify the array and make the api call
    fetch('https://ezstaff.herokuapp.com/events/checkInChanges', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
       
        

    })
    
    document.getElementById('content').innerHTML = 'You have successfully checked in!' 
  
        
    } else {
        document.getElementById('content').innerHTML = 'You are not at the event location!' 
        
    }
    

}
    }
 )
    
   
}
        
        
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    
    
    
    
    
}




function checkOut(clicked_id) {
    
    const clickedButton = document.getElementById(clicked_id)
    const user = document.getElementById('hiddenName').value
    var id = clickedButton.value
    
    if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        
        function showPosition(position) {
  
    var latitude1 = position.coords.latitude
    var longitude1 = position.coords.longitude
    
    
    //Then decode the address into coordinates
    
    const geocoder = new google.maps.Geocoder()
    



    const address = clickedButton.parentElement.parentElement.firstElementChild.nextElementSibling.innerText

geocoder.geocode( { 'address': address}, function(results, status) {

if (status == google.maps.GeocoderStatus.OK) {
    const latitude2 = results[0].geometry.location.lat()
    const longitude2 = results[0].geometry.location.lng()

    
    //Take both and compare
    const distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(latitude1, longitude1), new google.maps.LatLng(latitude2, longitude2))

    if (distance < 100) {
        
        
        var checkInArray = []
        var checkInList = clickedButton.nextElementSibling
    
    for (i=0; i<checkInList.children.length; i++) {
        checkInArray.push(checkInList.children[i].innerText)
    }
        
    //For Check In
      /* checkInArray.push(user) */
    
        
    //For Logout
    
    for (j = 0; j < checkInArray.length; j++) {
        if (checkInArray[j] === user) {
        	checkInArray.splice(j, 1);
            break;
        }
      }
    
        var checkInStatus = 'Checking Out'
        
    const input = {
        id : id,
        checkIn : checkInArray,
        user : user,
        checkInStatus : checkInStatus,
        organization: document.getElementById('orgName').innerText
    }

    //If difference is less than 50 km, modify the array and make the api call
    fetch('https://ezstaff.herokuapp.com/events/checkInChanges', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
       
        

    })
    
    document.getElementById('content').innerHTML = 'You have successfully checked out!' 
  
        
    } else {
        document.getElementById('content').innerHTML = 'You are not at the event location!' 
        
    }
    

}
    }
 )
    
   
}
        
        
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    
}





function viewAvailableEvents() {
    const contentSelector = document.getElementById('content')
    
    contentSelector.innerHTML = ''
    
    if (document.querySelector('.active')) {
    document.querySelector('.active').className = ''
}
    document.getElementById('availableEventsLi').className = 'active'
    
    document.getElementById('server-response').innerHTML = ''
    
     const input = {
         organization: document.getElementById('orgName').innerText
     }
    
    
    fetch('https://ezstaff.herokuapp.com/events/viewEvents', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
         if (data.message.indexOf('Error') === 0) {
             
            document.getElementById('server-response').innerHTML = data.message
            document.getElementById('server-response').style.color = '#fa755a'
             
        } else {
            
            
            // A template for efficient checking if array contains something
            Array.prototype.contains = function(obj) {
            var i = this.length;
            while (i--) {
            if (this[i] === obj) {
            return true;
            }
            }
                return false;
            }
            const user = document.getElementById('hiddenName').value
        
     for (i=0; i < data.message.length; i++) {
         
    if (data.message[i].staffed.length !== data.message[i].numberOfStaff && !data.message[i].staffed.contains(user)) {
            
            var div = document.createElement('div')
            div.className = 'columns'
         
            var ul = document.createElement('ul')
            ul.className = 'price'
            div.appendChild(ul)
            
            var li1 = document.createElement('li')
            li1.className = 'blue'
            li1.innerText = data.message[i].venue
            ul.appendChild(li1)
         
            var li2 = document.createElement('li')
            li2.innerText = data.message[i].location
            ul.appendChild(li2)
            
            var parsedDate = new Date(data.message[i].date)
            var dd = parsedDate.getDate();
            var mm = parsedDate.getMonth()+1; //January is 0!
            var yyyy = parsedDate.getFullYear();
            var eventDate = mm + '/' + dd + '/' + yyyy
            var li3 = document.createElement('li')
            li3.innerText = eventDate
            ul.appendChild(li3)
         
            var li4 = document.createElement('li')
            li4.innerText = data.message[i].begins + ' ' + '-' + ' ' + data.message[i].ends
            ul.appendChild(li4)
         
            var li5 = document.createElement('li')
            li5.className = 'grey'
            li5.innerText = data.message[i].numberOfStaff + ' Staff Members Required'
            ul.appendChild(li5)
         
            var li6 = document.createElement('li')
            li6.innerText = data.message[i].specs
            ul.appendChild(li6)
            
            for (j=0; j<data.message[i].staffed.length; j++) {
                    var liLoop = document.createElement('li')
                     liLoop.innerText = data.message[i].staffed[j]
                liLoop.className = 'grey'
                    ul.append(liLoop)
                
            }
        
            var li7 = document.createElement('li')
            var acceptButton = document.createElement('button')
            acceptButton.value = data.message[i]._id
            acceptButton.id = 'acceptbuttonid' + i
            acceptButton.setAttribute("onclick", "acceptEvent(this.id)")
            acceptButton.innerText = 'Accept Event'
        acceptButton.className = 'btn btnBlue'
            ul.appendChild(li7)
            li7.appendChild(acceptButton)
        
         
            var today = new Date();
            var todaydd = today.getDate();
            var todaymm = today.getMonth()+1; //January is 0!
            var todayyyyy = today.getFullYear();

            if(todaydd<10) {
                todaydd = '0'+todaydd
                } 

            if(todaymm<10) {
            todaymm = '0'+todaymm
                } 

            today = todaymm + '/' + todaydd + '/' + todayyyyy;
                    
                    const todayDate = new Date(today)
                    
         
                    if (todayDate < parsedDate) {
                        contentSelector.appendChild(div)
                    }
            
                } else {
                    
                }
                }
           
            var divArray = document.querySelectorAll('.columns')

            if (divArray.length === 0) {
                document.getElementById('server-response').innerHTML = 'Error: There are no available events'
                document.getElementById('server-response').style.color = '#fa755a'
            }
        
        
        }
        

    })
}



function acceptEvent(clicked_id) {
        var staffedArray = []
        var originalArray = []
        var user = document.getElementById('hiddenName').value
            var role = document.getElementById('role').value
            var organization = document.getElementById('orgName').innerText

    
        const clickedButton = document.getElementById(clicked_id)
        const id = clickedButton.value
        
        var selectedAreaUl = clickedButton.parentElement.parentElement
    
    
         for (j = 6; j < selectedAreaUl.children.length-1; j++) {
            staffedArray.push(selectedAreaUl.children[j].innerText)
         }
    
        staffedArray.push(user)
    
    
   
    
    
    const input = {
        id : id,
        staffed: staffedArray,
        role: role,
        organization: organization,
        original: originalArray,
        user: user
    }
    
    
    
    fetch('https://ezstaff.herokuapp.com/events/eventStaffChanges', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
       
        

    })
    
    document.getElementById('content').innerHTML = 'You are now staffed for the event!' 
    
    
    
}


function viewCancellableEvents() {
    const contentSelector = document.getElementById('content')
    
    contentSelector.innerHTML = ''
    
    document.getElementById('server-response').innerHTML = ''
    
    if (document.querySelector('.active')) {
    document.querySelector('.active').className = ''
}
    document.getElementById('cancelEventLi').className = 'active'
    
     const input = {
         organization: document.getElementById('orgName').innerText
     }
    
    
    fetch('https://ezstaff.herokuapp.com/events/viewEvents', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
         if (data.message.indexOf('Error') === 0) {
             
            document.getElementById('server-response').innerHTML = data.message
            document.getElementById('server-response').style.color = '#fa755a'
             
        } else {
            
            
            // A template for efficient checking if array contains something
            Array.prototype.contains = function(obj) {
            var i = this.length;
            while (i--) {
            if (this[i] === obj) {
            return true;
            }
            }
                return false;
            }
            const user = document.getElementById('hiddenName').value
        
     for (i=0; i < data.message.length; i++) {
         
    if (data.message[i].staffed.contains(user)) {
            
            var div = document.createElement('div')
            div.className = 'columns'
         
            var ul = document.createElement('ul')
            ul.className = 'price'
            div.appendChild(ul)
            
            var li1 = document.createElement('li')
            li1.className = 'header'
            li1.innerText = data.message[i].venue
            ul.appendChild(li1)
         
            var li2 = document.createElement('li')
            li2.innerText = data.message[i].location
            ul.appendChild(li2)
            
            var parsedDate = new Date(data.message[i].date)
            var dd = parsedDate.getDate();
            var mm = parsedDate.getMonth()+1; //January is 0!
            var yyyy = parsedDate.getFullYear();
            var eventDate = mm + '/' + dd + '/' + yyyy
            var li3 = document.createElement('li')
            li3.innerText = eventDate
            ul.appendChild(li3)
         
            var li4 = document.createElement('li')
            li4.innerText = data.message[i].begins + ' ' + '-' + ' ' + data.message[i].ends
            ul.appendChild(li4)
         
            var li5 = document.createElement('li')
            li5.className = 'grey'
            li5.innerText = data.message[i].numberOfStaff + ' Staff Members Required'
            ul.appendChild(li5)
         
            var li6 = document.createElement('li')
            li6.innerText = data.message[i].specs
            ul.appendChild(li6)
            
            for (j=0; j<data.message[i].staffed.length; j++) {
                    var liLoop = document.createElement('li')
                     liLoop.innerText = data.message[i].staffed[j]
                liLoop.className='grey'
                    ul.append(liLoop)
                
            }
        
            var li7 = document.createElement('li')
            var cancelButton = document.createElement('button')
            cancelButton.value = data.message[i]._id
            cancelButton.id = 'cancelbuttonid' + i
            cancelButton.className = 'btn btnRed'
            cancelButton.setAttribute("onclick", "cancelEventPopup(this.id)")
            cancelButton.innerText = 'Cancel Event'
            ul.appendChild(li7)
            li7.appendChild(cancelButton)
        
         
            var today = new Date();
            var todaydd = today.getDate();
            var todaymm = today.getMonth()+1; //January is 0!
            var todayyyyy = today.getFullYear();

            if(todaydd<10) {
                todaydd = '0'+todaydd
                } 

            if(todaymm<10) {
            todaymm = '0'+todaymm
                } 

            today = todaymm + '/' + todaydd + '/' + todayyyyy;
                    
                    const todayDate = new Date(today)
                    
         
                    if (todayDate < parsedDate) {
                        contentSelector.appendChild(div)
                    }
            
                } else {
                    
                }
                }
           
            var divArray = document.querySelectorAll('.columns')

            if (divArray.length === 0) {
                document.getElementById('server-response').innerHTML = 'Error: You are currently not staffed for any upcoming events'
                document.getElementById('server-response').style.color = '#fa755a'
            }
        
        
        }
        

    })
}


function cancelEventPopup(clicked_id) {
    var clickedButton = document.getElementById(clicked_id)
    
    document.getElementById('confirmCancel').value = clickedButton.value
    var hiddenElement = document.getElementById('misc')
    hiddenElement.innerHTML = ''
    
    var selectedAreaUl = clickedButton.parentElement.parentElement
    
    
         for (j = 6; j < selectedAreaUl.children.length-1; j++) {
            var liLoop = document.createElement('li')
            liLoop.innerText = selectedAreaUl.children[j].innerText
             liLoop.className = 'grey'
             hiddenElement.appendChild(liLoop)
         }
    
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    var closeButton = document.getElementById('closeButton')
    modal.style.display = "block";
    
    span.onclick = function() {
    modal.style.display = "none";
}
    closeButton.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    
}




function cancelEvent() {
    var user = document.getElementById('hiddenName').value
    const id = document.getElementById('confirmCancel').value
    var organization = document.getElementById('orgName').innerText
    var role = document.getElementById('role').value
    
    var staffedArray = []
    var originalArray = []
    var hiddenElement = document.getElementById('misc')
    
    for (i=0; i<hiddenElement.children.length; i++) {
        staffedArray.push(hiddenElement.children[i].innerText)
        originalArray.push(hiddenElement.children[i].innerText)
    }
    
    for (i = 0; i < staffedArray.length; i++) {
        if (staffedArray[i] === user) {
        	staffedArray.splice(i, 1);
            break;
        }
      }
    
    console.log(originalArray)
    console.log(staffedArray)
    
    const input = {
        id : id,
        staffed : staffedArray,
        original : originalArray,
        user : user,
        organization : organization,
        role: role
    }
    
    
    //This goes right before API call
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
    
    fetch('https://ezstaff.herokuapp.com/events/eventStaffChanges', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
       
        

    })
    
    document.getElementById('content').innerHTML = 'You have cancelled the event' 
    
    
}