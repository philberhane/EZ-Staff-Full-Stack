 function createEventForm() {
     
    const contentSelector = document.getElementById('content')
    
    contentSelector.innerHTML = ''
     document.getElementById('server-response').innerHTML = ''
 
    const form = document.createElement('div')
   
    form.id = 'myform'

        const divRow1 = document.createElement('div')
        const divCol1 = document.createElement('div')
        divRow1.className = 'row'
        divCol1.className = 'form-group col-md-6 col-sm-12'
        const venue = document.createElement('input')
        venue.type = 'text'
        venue.className = 'form-control'
        venue.id = 'venue'
        venue.placeholder = 'Enter the name of the venue'
        const venueLabel = document.createElement('label')
        venueLabel.innerHTML = 'Venue'
        divCol1.appendChild(venueLabel)
        divCol1.appendChild(venue)

        const divCol2 = document.createElement('div')
        divCol2.className = 'form-group col-md-6 col-sm-12'
        const date = document.createElement('input')
        date.type = 'date'
        date.className = 'form-control'
        date.id = 'date'
        date.placeholder = 'Enter the date of the event'
        const dateLabel = document.createElement('label')
        dateLabel.innerHTML = 'Date'
        divCol2.appendChild(dateLabel)
        divCol2.appendChild(date)

        divRow1.appendChild(divCol1)
        divRow1.appendChild(divCol2)

        form.appendChild(divRow1)

        const divRow2 = document.createElement('div')
        const divCol3 = document.createElement('div')
        divRow2.className = 'row'
        divCol3.className = 'form-group col-md-6 col-sm-12'
        const begins = document.createElement('input')
        begins.type = 'text'
        begins.className = 'form-control'
        begins.id = 'begins'
        begins.placeholder = 'Enter the time the event starts'
        const beginsLabel = document.createElement('label')
        beginsLabel.innerHTML = 'Begins At'
        divCol3.appendChild(beginsLabel)
        divCol3.appendChild(begins)

        const divCol4 = document.createElement('div')
        divCol4.className = 'form-group col-md-6 col-sm-12'
        const ends = document.createElement('input')
        ends.type = 'text'
        ends.className = 'form-control'
        ends.id = 'ends'
        ends.placeholder = 'Enter the time the event ends'
        const endsLabel = document.createElement('label')
        endsLabel.innerHTML = 'Ends at'
        divCol4.appendChild(endsLabel)
        divCol4.appendChild(ends)

         divRow2.appendChild(divCol3)
        divRow2.appendChild(divCol4)

        form.appendChild(divRow2)

        const divRow3 = document.createElement('div')
        const divCol5 = document.createElement('div')
        const divCol6 = document.createElement('div')

         const location = document.createElement('input')
        location.type = 'text'
        location.className = 'form-control'
        location.id = 'location'
        location.placeholder = 'Enter the address of the venue'
        const locationLabel = document.createElement('label')
        locationLabel.innerHTML = 'Location'
        divCol5.appendChild(locationLabel)
        divCol5.appendChild(location)


        const numberOfStaff = document.createElement('input')
        numberOfStaff.type = 'number'
        numberOfStaff.className = 'form-control'
        numberOfStaff.id = 'numberOfStaff'
        numberOfStaff.placeholder = 'Enter the number of staff needed'
        const numberOfStaffLabel = document.createElement('label')
        numberOfStaffLabel.innerHTML = '# of Staff'
        divCol6.appendChild(numberOfStaffLabel)
        divCol6.appendChild(numberOfStaff)



        divCol5.className = 'form-group col-md-6 col-sm-12'
         divCol6.className = 'form-group col-md-6 col-sm-12'
        divRow3.className = 'row'
         divRow3.appendChild(divCol5)
        divRow3.appendChild(divCol6)
        form.appendChild(divRow3)


        const specs = document.createElement('input')
        specs.type = 'text'
        specs.className = 'form-control'
        specs.id = 'specs'
        specs.placeholder = 'Enter the types of staff needed, eg. 2 Chefs, 5 Brand Ambassadors, ect'
        const specsLabel = document.createElement('label')
        specsLabel.innerHTML = 'Specifications'
        form.appendChild(specsLabel)
        form.appendChild(specs)




        const button = document.createElement('button')
        button.type = 'Submit'
        button.className = 'btn btn-primary button2'
        button.innerHTML = 'Create Event'
        button.onclick = createEvent
        button.id = 'createeventbutton'
        form.appendChild(button)
        
        contentSelector.appendChild(form)
     
 }






function createEvent() {
   // const arrayOfStaffed
    var staffedArray = []
    
     for (i=0;i<document.getElementById('numberOfStaff').value;i++) {
        var notStaffed = 'Not Staffed'
        staffedArray.push(notStaffed)
     }
    
    
    const input = {
        venue: document.getElementById('venue').value,
        date: document.getElementById('date').value,
        begins: document.getElementById('begins').value,
        ends: document.getElementById('ends').value,
        location: document.getElementById('location').value,
        numberOfStaff: document.getElementById('numberOfStaff').value,
        specs: document.getElementById('specs').value,
        organization: document.getElementById('orgName').innerText,
        staffed: staffedArray,
        
    }
    

    
    fetch('http://localhost:3000/events/createEvent', {
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
        
     document.getElementById('content').innerHTML = data.message
        }

    })
}





function viewEvents() {
    const contentSelector = document.getElementById('content')
    
    contentSelector.innerHTML = ''
    
    document.getElementById('server-response').innerHTML = ''
    
     const input = {
         organization: document.getElementById('orgName').innerText
     }
    
    
    fetch('http://localhost:3000/events/viewEvents', {
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
            console.log(data.message)
        
     for (i=0; i < data.message.length; i++) {
            
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
                if (data.message[i].staffed[j] !== 'Not Staffed') {
                    var liLoop = document.createElement('li')
                     liLoop.innerText = data.message[i].staffed[j]
                    ul.append(liLoop)
                }
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


function editEvents() {
    const contentSelector = document.getElementById('content')
    
    contentSelector.innerHTML = ''
    
    document.getElementById('server-response').innerHTML = ''
    
     const input = {
         organization: document.getElementById('orgName').innerText
     }
    
    
    fetch('http://localhost:3000/events/viewEvents', {
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
            console.log(data.message)
        
     for (i=0; i < data.message.length; i++) {
            
            var div = document.createElement('div')
            div.className = 'columns'
            div.id = 'divid' + i
            div.setAttribute('data-locations', data.message[i])
         
           /* var input = document.createElement('input')
            input.value = data.message[i]._id
            input.style.display = 'none'
            input.id = 'divid' + i
            div.appendChild(input)*/
         
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
            li5.innerText = data.message[i].numberOfStaff + ' Staff Members Required'
            ul.appendChild(li5)
            
         
            var li6 = document.createElement('li')
            li6.innerText = data.message[i].specs
            ul.appendChild(li6)
            
            for (j=0; j<data.message[i].staffed.length; j++) {
                    var liLoop = document.createElement('li')
                       liLoop.innerText = data.message[i].staffed[j]
                    ul.append(liLoop)
                
            }
         
            var li7 = document.createElement('li')
            var editButton = document.createElement('button')
            editButton.innerText = 'Edit Event'
            editButton.id = 'editbuttonid' + i
            editButton.setAttribute('onclick', 'changeValueToInnerHtml(this.id)')
            var deleteButton = document.createElement('button')
            deleteButton.innerText = 'Delete Event'
            deleteButton.value = data.message[i]._id
            deleteButton.id = 'deletebuttonid' + i
            deleteButton.setAttribute("onclick", "modalDeletePopup(this.id)")
            ul.appendChild(li7)
            li7.appendChild(editButton)
            li7.appendChild(deleteButton)
         
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




function changeValueToInnerHtml(clicked_id) {
    const clickedButton = document.getElementById(clicked_id)
    const objectId = clickedButton.nextElementSibling.value

   const selectedAreaUl = clickedButton.parentElement.parentElement
   const selectedAreaDiv = clickedButton.parentElement.parentElement.parentElement

   //const staffedValue = clickedButton.parentElement.previousElementSibling.innerText

   const beginsValue = clickedButton.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText.split(' ')[0] 

   const endsValue = clickedButton.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText.split(' ')[2]

   const dateValue = clickedButton.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.innerText

   const locationValue = clickedButton.parentElement.parentElement.firstElementChild.nextElementSibling.innerText

   const venueValue = clickedButton.parentElement.parentElement.firstElementChild.innerText

   const numberOfStaffValue = clickedButton.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText.split(' ')[0]

    const specsValue = clickedButton.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText


    




   selectedAreaUl.style.display = 'none'


const selectedArea = document.createElement ('ul')
selectedArea.className = 'noliststyletype'
selectedAreaDiv.appendChild(selectedArea)
    
    const span = document.createElement('span')
        span.innerHTML = '&times;'
        span.className = 'close'
        span.onclick = function() {
            selectedAreaUl.style.display = 'block'
            selectedArea.style.display = 'none'
        }
        
        selectedAreaDiv.appendChild(selectedArea)

        

        const li1 = document.createElement('li')
        const venue = document.createElement('input')
        venue.type = 'text'
        venue.className = 'form-control'
        venue.id = 'venue'
    
        
        venue.placeholder = 'Enter the name of the venue'
        const venueLabel = document.createElement('label')
        venueLabel.innerHTML = 'Venue'
        venue.value = venueValue
        li1.appendChild(venueLabel)
        li1.appendChild(venue)
        selectedArea.appendChild(li1)
        


        const li2 = document.createElement('li')
        const location = document.createElement('input')
        location.type = 'text'
        location.className = 'form-control'
        location.id = 'location'

        location.value = locationValue
        location.placeholder = 'Enter the address of the venue'
        const locationLabel = document.createElement('label')
        locationLabel.innerHTML = 'Location'
        li2.appendChild(locationLabel)
        li2.appendChild(location)
        selectedArea.appendChild(li2)


        const li3 = document.createElement('li')
        const date = document.createElement('input')
        date.type = 'text'
        date.className = 'form-control'
        date.id = 'date'

        date.placeholder = 'Enter the date of the event'
        date.value = dateValue
        const dateLabel = document.createElement('label')
        dateLabel.innerHTML = 'Date'


        li3.appendChild(dateLabel)
    li3.appendChild(date)
    selectedArea.appendChild(li3)



        const li4 = document.createElement('li')
        const divRow2 = document.createElement('div')
        const divCol3 = document.createElement('div')
        divRow2.className = 'row'
        divCol3.className = 'form-group col-md-6 col-sm-12'
        const begins = document.createElement('input')
        begins.type = 'text'
        begins.className = 'form-control'
        begins.id = 'begins'

        begins.value = beginsValue
        begins.placeholder = 'Enter the time the event starts'
        const beginsLabel = document.createElement('label')
        beginsLabel.innerHTML = 'Begins At'
        divCol3.appendChild(beginsLabel)
        divCol3.appendChild(begins)



        const divCol4 = document.createElement('div')
        divCol4.className = 'form-group col-md-6 col-sm-12'
        const ends = document.createElement('input')
        ends.type = 'text'
        ends.className = 'form-control'
        ends.id = 'ends'

        ends.value = endsValue
        ends.placeholder = 'Enter the time the event ends'
        const endsLabel = document.createElement('label')
        endsLabel.innerHTML = 'Ends at'
        divCol4.appendChild(endsLabel)
        divCol4.appendChild(ends)

         divRow2.appendChild(divCol3)
        divRow2.appendChild(divCol4)

        li4.appendChild(divRow2)
        selectedArea.appendChild(li4)




        const li5 = document.createElement('li')
        const numberOfStaff = document.createElement('input')
        numberOfStaff.type = 'number'
        numberOfStaff.className = 'form-control'
        numberOfStaff.id = 'numberOfStaff'

        numberOfStaff.placeholder = 'Enter the number of staff members needed'
        numberOfStaff.value = numberOfStaffValue
        const numberOfStaffLabel = document.createElement('label')
        numberOfStaffLabel.innerHTML = '# of Staff Members'

        li5.appendChild(numberOfStaffLabel)
        li5.appendChild(numberOfStaff)
    selectedArea.appendChild(li5)


        const li6 = document.createElement('li')
        const specs = document.createElement('input')
        specs.type = 'text'
        specs.className = 'form-control'
        specs.id = 'specs'

        specs.placeholder = 'Enter the specifications of the event'
        specs.value = specsValue
        const specsLabel = document.createElement('label')
        specsLabel.innerHTML = 'Specifications'

        li6.appendChild(specsLabel)
        li6.appendChild(specs)
        selectedArea.appendChild(li6)




     for (j = 6; j < selectedAreaUl.children.length-1; j++) {
         const liLoop = document.createElement('li')
        const staffed = document.createElement('input')
        staffed.className = 'form-control'
         staffed.id = 'staffednumber' + j

         const staffedValue = selectedAreaUl.children[j].innerText
         staffed.value = staffedValue

         const staffedLabel = document.createElement('label')
         staffedLabel.innerHTML = 'Staffed Status'

         liLoop.appendChild(staffedLabel)
        liLoop.appendChild(staffed)
         selectedArea.appendChild(liLoop)
     }


        const li7 = document.createElement('li')
        const makeChangesButton = document.createElement('button')
        makeChangesButton.type = 'Submit'
        makeChangesButton.className = 'btn btn-primary button2'
        makeChangesButton.innerHTML = 'Make Changes'
        makeChangesButton.setAttribute('onclick', 'makeChanges(this.id);')
        makeChangesButton.id = 'makechanges'
        makeChangesButton.value = objectId
        var originalStaffNumber = document.createElement('input')
        originalStaffNumber.style.display = 'none'
        originalStaffNumber.value = numberOfStaffValue
        li7.appendChild(originalStaffNumber)
        li7.appendChild(makeChangesButton)
        li7.appendChild(span)

        selectedArea.appendChild(li7)
}




function makeChanges(clicked_id) {
    
    var staffedArray = []
    
    const clickedButton = document.getElementById(clicked_id)
    const id = clickedButton.value
    
    const venue = clickedButton.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.value
    
    const location = clickedButton.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.value
    
    const date = clickedButton.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value
    
    const begins = clickedButton.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.value
    
    const ends = clickedButton.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.value
    
    const numberOfStaff = clickedButton.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value
    
    const specs = clickedButton.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value
    
    var selectedAreaUl = clickedButton.parentElement.parentElement
    
    for (i=6; i< selectedAreaUl.children.length-1; i++) {
        if (selectedAreaUl.children[i].firstElementChild.nextElementSibling.value === '') {
            selectedAreaUl.children[i].firstElementChild.nextElementSibling.value = 'Not Staffed'
            }
        staffedArray.push(selectedAreaUl.children[i].firstElementChild.nextElementSibling.value)
    }
    console.log(staffedArray)
    
    var originalNumberOfStaff = clickedButton.previousElementSibling.value
    
    if (numberOfStaff > originalNumberOfStaff) {
        var remainder = numberOfStaff - originalNumberOfStaff
        for (j=0; j < remainder; j++) {
            var notStaffed = 'Not Staffed'
        staffedArray.push(notStaffed)
        }
    }
    
    
    if (numberOfStaff < originalNumberOfStaff) {
        var remainder = originalNumberOfStaff - numberOfStaff
        for (k=0; k < remainder; k++) {
            if(staffedArray[k] === 'Not Staffed'){
        staffedArray.splice(k, 1);
    }
    }
    }
    
    console.log(staffedArray)
    
    
    
    const input = {
        venue: venue,
        date: date,
        begins: begins,
        ends: ends,
        location: location,
        numberOfStaff: numberOfStaff,
        specs: specs,
        id: id,
        staffed: staffedArray,
        
    }
    
   // console.log(`The input is ${input}`)
    
    
    fetch('http://localhost:3000/events/editEvent', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
       
        

    })
    
    document.getElementById('content').innerHTML = 'The event has been successfully updated!'
    
}







function modalDeletePopup(clicked_id) {
    
    var clickedButton = document.getElementById(clicked_id)
    console.log(clickedButton.value)
    
    document.getElementById('confirmDelete').value = clickedButton.value
    
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


function deleteEvent() {
    const id = document.getElementById('confirmDelete').value
    
    const input = {
        id : id
    }
    
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
    
    
    fetch('http://localhost:3000/events/deleteEvent', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        
         

    })
    
    document.getElementById('content').innerHTML = 'The event has been deleted!'
    
    
}





function inviteStaffForm() {
     const contentSelector = document.getElementById('content')
    
    contentSelector.innerHTML = ''
     document.getElementById('server-response').innerHTML = ''
    
    var div = document.createElement('div')
    div.className = 'form-group col-md-6 col-sm-12'
    var label = document.createElement('label')
    label.innerText = "Please enter the Staff Member's email you'd wish to invite"
    var input = document.createElement('input')
    input.placeholder = 'Email Address'
    input.className = 'form-control'
    input.id= 'emailValue'
    var button = document.createElement('button')
    button.innerText = 'Send Invite'
    button.onclick = inviteStaff

    contentSelector.appendChild(div)
    div.appendChild(label)
    div.appendChild(input)
    div.appendChild(button)

}

function inviteStaff() {
    
    document.getElementById('emailValue').name = 'recipient'
    
    var recipient = document.getElementById('emailValue').value
    
    const input = {
        recipient : recipient,
        organization : document.getElementById('orgName').innerText
    }
    
    fetch('http://localhost:3000/users/inviteStaff', {
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
        
     document.getElementById('content').innerHTML = data.message
        }
         

    })
    
    
}