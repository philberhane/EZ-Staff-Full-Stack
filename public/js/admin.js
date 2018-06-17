// Create a Stripe client.
var stripe = Stripe('pk_test_mqRGkGjCcgMI7I67C1HRYnvv');

// Create an instance of Elements.
var elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
// (Note that this demo uses a wider set of styles than the guide below.)
var style = {
  base: {
    color: '#32325d',
    lineHeight: '18px',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};

// Create an instance of the card Element.
var card = elements.create('card', {style: style});


// Add an instance of the card Element into the `card-element` <div>.
card.mount('#card-element');

// Handle real-time validation errors from the card Element.
card.addEventListener('change', function(event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});

// Handle form submission.
var form = document.getElementById('payment-form');




var plansLi = document.getElementById('plansLi')
var plansLi2 = document.getElementById('plansLi2')
var plansButton = document.createElement('a')
plansButton.innerText = 'Plans'
plansButton.id = "plansButton"
plansButton.setAttribute("onclick", "displayPlans()")
plansButton.setAttribute("href", "#")
plansLi.appendChild(plansButton)

plansLi2.setAttribute("onclick", "displayPlans(); closeNav()")
plansLi2.innerText = 'Plans'


function displayPlans() {
    document.getElementById('activeNav').id = ''
    document.getElementById('plansButton').id = 'activeNav'
    
    var role = "admin"
    var plan = document.getElementById('hiddenPlan').value
    var email = document.getElementById('hiddenEmail').value
    
    var adminBody = document.getElementById('adminbody')
     adminBody.innerHTML = ''
    
    var h2Plan = document.createElement('h2')
    h2Plan.innerText = 'Current Plan: ' + plan
    adminBody.appendChild(h2Plan)
    
    if (plan === 'Free') {
        
        
    const column1 = document.createElement('div')
    column1.className = 'columns'
    const ul1 = document.createElement('ul')
    ul1.className = 'price'
    const li1 = document.createElement('li')
    li1.className = 'header'
    li1.innerText = 'Small'
    const li2 = document.createElement('li')
    li2.className = 'greyy'
    li2.innerText = '$ 9.99 / month'
    const li3 = document.createElement('li')
    li3.innerText = '5 Staff Members'
    const li4 = document.createElement('li')
    li4.innerText = 'Unlimited Events'
    const li5 = document.createElement('li')
    li5.innerText = 'No Contract/Commitment'
   
    const li7 = document.createElement('li')
    li7.className = 'greyy'
    const button1 = document.createElement('button')
    button1.innerText = 'Upgrade'
    button1.className = 'btn btnBlue'
    button1.setAttribute('onclick', 'smallPlan();')
    button1.id = 'smallPlanButton'
    column1.appendChild(ul1)
    ul1.appendChild(li1)
    ul1.appendChild(li2)
    ul1.appendChild(li3)
    ul1.appendChild(li4)
    ul1.appendChild(li5)
    ul1.appendChild(li7)
    li7.appendChild(button1)
    document.getElementById('adminbody').appendChild(column1)
    
    const column2 = document.createElement('div')
    column2.className = 'columns'
    const ul2 = document.createElement('ul')
    ul2.className = 'price'
    const li8 = document.createElement('li')
    li8.className = 'header'
    li8.innerText = 'Medium'
    const li9 = document.createElement('li')
    li9.className = 'greyy'
    li9.innerText = '$ 19.99 / month'
    const li10 = document.createElement('li')
    li10.innerText = '20 Staff Members'
    const li11 = document.createElement('li')
    li11.innerText = 'Unlimited Events'
    const li12 = document.createElement('li')
    li12.innerText = 'No Contract/Commitment'
    
    const li14 = document.createElement('li')
    li14.className = 'greyy'
    const button2 = document.createElement('button')
    button2.innerText = 'Upgrade'
    button2.className = 'btn btnBlue'
      button2.setAttribute('onclick', 'mediumPlan();')
        button2.id = 'mediumPlanButton'
    column2.appendChild(ul2)
    ul2.appendChild(li8)
    ul2.appendChild(li9)
    ul2.appendChild(li10)
    ul2.appendChild(li11)
    ul2.appendChild(li12)
    ul2.appendChild(li14)
    li14.appendChild(button2)
    document.getElementById('adminbody').appendChild(column2)
    
    const column3 = document.createElement('div')
    column3.className = 'columns'
    const ul3 = document.createElement('ul')
    ul3.className = 'price'
    const li15 = document.createElement('li')
    li15.className = 'header'
    li15.innerText = 'Enterprise'
    const li16 = document.createElement('li')
    li16.className = 'greyy'
    li16.innerText = '$ 49.99 / month'
    const li17 = document.createElement('li')
    li17.innerText = 'Unlimited Staff Members'
    const li18 = document.createElement('li')
    li18.innerText = 'Unlimited Events'
    const li19 = document.createElement('li')
    li19.innerText = 'No Contract/Commitment'
    
    const li21 = document.createElement('li')
    li21.className = 'greyy'
    const button3 = document.createElement('button')
    button3.innerText = 'Upgrade'
    button3.className = 'btn btnBlue'
 button3.setAttribute('onclick', 'enterprisePlan();')
        button3.id = 'enterprisePlanButton'
    column3.appendChild(ul3)
    ul3.appendChild(li15)
    ul3.appendChild(li16)
    ul3.appendChild(li17)
    ul3.appendChild(li18)
    ul3.appendChild(li19)
    ul3.appendChild(li21)
    li21.appendChild(button3)
    document.getElementById('adminbody').appendChild(column3)
    
   /*var cancelP = document.createElement('p')
   cancelP.id = 'cancelP'
   cancelP.innerHTML = 'Or click below to cancel your current membership'
        document.getElementById('adminbody').appendChild(cancelP)
    
    var cancelButton = document.createElement('a')
    cancelButton.innerText = 'Cancel Membership'
    cancelButton.setAttribute('href', 'https://www.payolee.com/user_plan_cancellation.php')
    cancelButton.setAttribute('target', '_blank')
    document.getElementById('adminbody').appendChild(cancelButton)*/
        
        
        
        
        
        
        
        
        
        
        
    } else {
        
        var p = document.createElement('p')
        p.innerHTML = 'If you would like to update your card information, click <a href="#" onclick="updateCardPopup()" style="color:#4EBBDB">here</a>'
        
        var p2 = document.createElement('p')
        p2.innerHTML = 'Choose one of the following to <strong>change your Plan:</strong>'
        
        adminBody.appendChild(p)
        adminBody.appendChild(p2)
        
        const column1 = document.createElement('div')
    column1.className = 'columns'
    const ul1 = document.createElement('ul')
    ul1.className = 'price'
    const li1 = document.createElement('li')
    li1.className = 'header'
    li1.innerText = 'Small'
    const li2 = document.createElement('li')
    li2.className = 'greyy'
    li2.innerText = '$ 9.99 / month'
    const li3 = document.createElement('li')
    li3.innerText = '5 Staff Members'
    const li4 = document.createElement('li')
    li4.innerText = 'Unlimited Events'
    const li5 = document.createElement('li')
    li5.innerText = 'No Contract/Commitment'
   
    const li7 = document.createElement('li')
    li7.className = 'greyy'
    const button1 = document.createElement('button')
    button1.innerText = 'Change'
    button1.className = 'btn btn-info navbar-btn button2'
    button1.setAttribute('onclick', 'changePlanPopup(this.id);')
    button1.id = 'smallPlanButton'
    column1.appendChild(ul1)
    ul1.appendChild(li1)
    ul1.appendChild(li2)
    ul1.appendChild(li3)
    ul1.appendChild(li4)
    ul1.appendChild(li5)
    ul1.appendChild(li7)
    li7.appendChild(button1)
    document.getElementById('adminbody').appendChild(column1)
    
    const column2 = document.createElement('div')
    column2.className = 'columns'
    const ul2 = document.createElement('ul')
    ul2.className = 'price'
    const li8 = document.createElement('li')
    li8.className = 'header'
    li8.innerText = 'Medium'
    const li9 = document.createElement('li')
    li9.className = 'greyy'
    li9.innerText = '$ 19.99 / month'
    const li10 = document.createElement('li')
    li10.innerText = '20 Staff Members'
    const li11 = document.createElement('li')
    li11.innerText = 'Unlimited Events'
    const li12 = document.createElement('li')
    li12.innerText = 'No Contract/Commitment'
    
    const li14 = document.createElement('li')
    li14.className = 'greyy'
    const button2 = document.createElement('button')
    button2.innerText = 'Change'
    button2.className = 'btn btn-info navbar-btn button2'
      button2.setAttribute('onclick', 'changePlanPopup(this.id);')
        button2.id = 'mediumPlanButton'
    column2.appendChild(ul2)
    ul2.appendChild(li8)
    ul2.appendChild(li9)
    ul2.appendChild(li10)
    ul2.appendChild(li11)
    ul2.appendChild(li12)
    ul2.appendChild(li14)
    li14.appendChild(button2)
    document.getElementById('adminbody').appendChild(column2)
    
    const column3 = document.createElement('div')
    column3.className = 'columns'
    const ul3 = document.createElement('ul')
    ul3.className = 'price'
    const li15 = document.createElement('li')
    li15.className = 'header'
    li15.innerText = 'Enterprise'
    const li16 = document.createElement('li')
    li16.className = 'greyy'
    li16.innerText = '$ 49.99 / month'
    const li17 = document.createElement('li')
    li17.innerText = 'Unlimited Staff Members'
    const li18 = document.createElement('li')
    li18.innerText = 'Unlimited Events'
    const li19 = document.createElement('li')
    li19.innerText = 'No Contract/Commitment'
    
    const li21 = document.createElement('li')
    li21.className = 'greyy'
    const button3 = document.createElement('button')
    button3.innerText = 'Change'
    button3.className = 'btn btn-info navbar-btn button2'
 button3.setAttribute('onclick', 'changePlanPopup(this.id);')
        button3.id = 'enterprisePlanButton'
    column3.appendChild(ul3)
    ul3.appendChild(li15)
    ul3.appendChild(li16)
    ul3.appendChild(li17)
    ul3.appendChild(li18)
    ul3.appendChild(li19)
    ul3.appendChild(li21)
    li21.appendChild(button3)
    document.getElementById('adminbody').appendChild(column3)
    
   var cancelP = document.createElement('p')
   cancelP.innerHTML = 'If you would like to cancel your plan with us, click <a href="#" onclick="cancelPlanPopup()" style="color:#4EBBDB">here</a>'
    document.getElementById('adminbody').appendChild(cancelP)
    
   
        
    }

}



function createEventForm() {
     
    const contentSelector = document.getElementById('content')
    
    contentSelector.innerHTML = ''
    
     document.getElementById('server-response').innerHTML = ''
    
    if (document.querySelector('.active')) {
    document.querySelector('.active').className = ''
}
    document.getElementById('createEventLi').className = 'active'
 
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
        date.type = 'text'
        date.className = 'form-control'
        date.id = 'date'
        date.placeholder = 'mm/dd/yyyy'
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
        button.className = 'btn btnBlue'
        button.innerHTML = 'Create Event'
        button.onclick = createEvent
        button.id = 'createeventbutton'
        form.appendChild(button)
        
        contentSelector.appendChild(form)
     
 }






function createEvent() {
   // const arrayOfStaffed
    var staffedArray = []
    
    
    
    
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
    

    
    fetch('https://ezstaff.herokuapp.com/events/createEvent', {
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
    
    if (document.querySelector('.active')) {
    document.querySelector('.active').className = ''
}
    document.getElementById('viewEventsLi').className = 'active'
    
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
        
        var divArray = document.querySelectorAll('.columns')

            if (divArray.length === 0) {
                document.getElementById('server-response').innerHTML = 'Error: There are currently no upcoming events!'
                document.getElementById('server-response').style.color = '#fa755a'
            }
        

    })
    
    
    
}


function editEvents() {
    const contentSelector = document.getElementById('content')
    
    contentSelector.innerHTML = ''
    
    document.getElementById('server-response').innerHTML = ''
    
    if (document.querySelector('.active')) {
    document.querySelector('.active').className = ''
}
    document.getElementById('editEventsLi').className = 'active'
    
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
                    var removeStaffSpan = document.createElement('button')
                    removeStaffSpan.id = removeStaffSpan + j
                    removeStaffSpan.value = data.message[i]._id
                    removeStaffSpan.className = 'removeStaffSpan btn btnRed'
                    removeStaffSpan.innerHTML = 'x'
                     removeStaffSpan.setAttribute("onclick", "removeStaffPopup(this.id)")
                       liLoop.innerText = data.message[i].staffed[j]
                        liLoop.appendChild(removeStaffSpan)
                    ul.append(liLoop)
                
            }
         
            var li7 = document.createElement('li')
            var editButton = document.createElement('button')
            editButton.innerText = 'Edit Event'
            editButton.className = 'btn btnOrange editButton'
            editButton.id = 'editbuttonid' + i
            editButton.setAttribute('onclick', 'changeValueToInnerHtml(this.id)')
            var deleteButton = document.createElement('button')
            deleteButton.innerText = 'Delete Event'
            deleteButton.value = data.message[i]._id
            deleteButton.id = 'deletebuttonid' + i
            deleteButton.className = 'btn btnRed deleteButton'
            deleteButton.setAttribute("onclick", "modalDeletePopup(this.id)")
            var addStaffButton = document.createElement('button')
            addStaffButton.innerText = 'Add Staff'
            addStaffButton.className = 'btn btnBlue addStaffButton'
            addStaffButton.id = 'addStaffButtonid' + i
            addStaffButton.setAttribute("onclick", "addStaffButtonPopup(this.id)")
            addStaffButton.value = data.message[i]._id
            
            ul.appendChild(li7)
            li7.appendChild(editButton)
            li7.appendChild(deleteButton)
            li7.appendChild(addStaffButton)
         
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
        var divArray = document.querySelectorAll('.columns')

            if (divArray.length === 0) {
                document.getElementById('server-response').innerHTML = 'Error: There are currently no upcoming events!'
                document.getElementById('server-response').style.color = '#fa755a'
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

        date.placeholder = 'mm/dd/yyyy'
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
         staffed.value = staffedValue.replace('x', '')

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
        makeChangesButton.className = 'btn btnBlue makeChangesButton'
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
      staffedArray.push(selectedAreaUl.children[i].firstElementChild.nextElementSibling.value)
    }
    
    var originalNumberOfStaff = clickedButton.previousElementSibling.value
    
    for (i=0; i<staffedArray.length; i++) {
        if (staffedArray[i] === '') {
        	staffedArray.splice(i, 1);
        }
    }
    
    
    
    
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
    
    
    fetch('https://ezstaff.herokuapp.com/events/editEvent', {
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
    
    document.getElementById('confirmDelete').value = clickedButton.value
    
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close1")[0];
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
    
    document.getElementById('server-response').innerHTML = ''
    const id = document.getElementById('confirmDelete').value
    
    const input = {
        id : id
    }
    
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
    
    
    fetch('https://ezstaff.herokuapp.com/events/deleteEvent', {
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
    
    if (document.querySelector('.active')) {
    document.querySelector('.active').className = ''
}
    document.getElementById('inviteStaffLi').className = 'active'
    
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
    button.className = 'inviteButton btn btnBlue'
    button.id = 'inviteButton'
    button.onclick = inviteStaff

    contentSelector.appendChild(div)
    div.appendChild(label)
    div.appendChild(input)
    div.appendChild(button)

}

function inviteStaff() {

    
    document.getElementById('server-response').innerHTML = ''
    
    
    
    document.getElementById('emailValue').name = 'recipient'
    
    var recipient = document.getElementById('emailValue').value
    var email = document.getElementById('hiddenEmail').value
    
    const input = {
        recipient : recipient,
        organization : document.getElementById('orgName').innerText,
        email : email
    }
    
    fetch('https://ezstaff.herokuapp.com/users/inviteStaff', {
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



function removeStaffPopup(clicked_id) {
   
        var clickedButton = document.getElementById(clicked_id)
    document.getElementById('removeStaff').value = clickedButton.value
    var hiddenElement = document.getElementById('misc')
    var user = document.getElementById(clicked_id).parentElement.innerText.replace('x','')
    hiddenElement.innerHTML = ''
    document.getElementById('staffRemove').innerText = user
    
    var selectedAreaUl = clickedButton.parentElement.parentElement
    
    
         for (j = 6; j < selectedAreaUl.children.length-1; j++) {
            var liLoop = document.createElement('li')
            liLoop.innerText = selectedAreaUl.children[j].innerText.replace('Remove','')
             hiddenElement.appendChild(liLoop)
         }
    
    var modal = document.getElementById('myModal3');
    var span = document.getElementsByClassName("close3")[0];
    var closeButton = document.getElementById('closeRemoveStaff')
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


function removeStaff() {
    
    var role = document.getElementById('role').value
    
        var staffMember = document.getElementById('staffRemove').innerText
        var id = document.getElementById('removeStaff').value
    
    var staffedArray = []
    var hiddenElement = document.getElementById('misc')
    
    for (i=0; i<hiddenElement.children.length; i++) {
        staffedArray.push(hiddenElement.children[i].innerText)
    }
    
    for (k = 0; k < staffedArray.length; i++) {
        if (staffedArray[k] === staffMember) {
        	staffedArray.splice(k, 1);
            break;
        }
      }
    
    
    
    
    const input = {
        id: id,
        staffed : staffedArray,
        role: role
        
    }
    //This goes right before API call
    var modal = document.getElementById('myModal3');
    modal.style.display = "none";
    
    fetch('https://ezstaff.herokuapp.com/events/eventStaffChanges', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
       
        

    })
    
    document.getElementById('content').innerHTML = 'You have removed the staff member from the event' 
    
}



function addStaffButtonPopup(clicked_id) {
    
    var clickedButton = document.getElementById(clicked_id)
    var hiddenElement = document.getElementById('misc')
    
    
    hiddenElement.innerHTML = ''
    
    var closeButton = document.getElementById('close2')
    closeButton.value = clickedButton.value
    
    var selectedAreaUl = clickedButton.parentElement.parentElement
    
    
         for (j = 6; j < selectedAreaUl.children.length-1; j++) {
            var liLoop = document.createElement('li')
            liLoop.innerText = selectedAreaUl.children[j].innerText.replace('x', '')
             hiddenElement.appendChild(liLoop)
         }
    
    var numberOfStaff = clickedButton.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText.replace(' Staff Members Required','')
    
    if (parseInt(numberOfStaff) !== hiddenElement.children.length) {
    
    var modal = document.getElementById('myModal2');
    var span = document.getElementsByClassName("close2")[0];
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

var organization = document.getElementById('orgName').innerText
    
    const input = {
        organization : organization
    }
    
    
    fetch('https://ezstaff.herokuapp.com/users/findUsers', {
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
            
            var ul = document.getElementById('search-results')
             
             ul.innerHTML = ''
            
            
            Array.prototype.contains = function(obj) {
            var k = this.length;
            while (k--) {
            if (this[k] === obj) {
            return true;
            }
            }
                return false;
            }
        
    var staffedArray = []
    
        for (i=0; i<hiddenElement.children.length; i++) {
        staffedArray.push(hiddenElement.children[i].innerText)
        }        
            
     for (i=0; i < data.message.length; i++) {
         
          
         
         if (data.message[i].password && !staffedArray.contains(data.message[i].name)) {
             
                          
             var li = document.createElement('li')
             li.innerText = data.message[i].name
             li.className = 'liAdd'
             
             var button = document.createElement('button')
             button.innerText = 'Add'
             button.className = 'addButton btn btnBlue'
             button.value = clickedButton.value
             button.id = 'button' + i
             button.setAttribute("onclick", "addStaff(this.id)")
             li.appendChild(button)
             
             
             ul.appendChild(li)
         }
         
     }
            
            
        }
        

    })
    }
    else {
       document.getElementById('content').innerHTML = 'The number of staff members to be added has been reached. If you wish to add more, click Edit Event and change the # of Staff Members'  
    }
    
    
}


function addStaff(clicked_id) {
    
    var role = document.getElementById('role').value
    
    var clickedButton = document.getElementById(clicked_id)
    
    var staffMember = clickedButton.parentElement.innerText.replace('Add','')
        var id = clickedButton.value
    
    var staffedArray = []
    var hiddenElement = document.getElementById('misc')
    
    for (i=0; i<hiddenElement.children.length; i++) {
        staffedArray.push(hiddenElement.children[i].innerText)
    }
    
    staffedArray.push(staffMember)
    
    
    
    
    const input = {
        id: id,
        staffed : staffedArray,
        role: role
        
    }
    //This goes right before API call
    var modal = document.getElementById('myModal2');
    modal.style.display = "none";
    
    fetch('https://ezstaff.herokuapp.com/events/eventStaffChanges', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
       
        

    })
    
    document.getElementById('content').innerHTML = 'You have added the staff member to the event' 
    
    
}


function smallPlan() {
    var modal = document.getElementById('stripeModal');
    var span = document.getElementsByClassName("stripeClose")[0];
    modal.style.display = "block";
    
    span.onclick = function() {
    modal.style.display = "none";
        card.clear()
}
   

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        card.clear()
    }
}

document.getElementById('stripeButton').innerText = 'Upgrade Plan'
document.getElementById('stripeButton').setAttribute("onclick", "beginMembership()")
document.getElementById('stripePurchase').innerText = 'EZ Staff - Small Plan - $9.99/month'
document.getElementById('upgradePlanValue').value = 'Small'


    
    
    
}



function mediumPlan() {
    var modal = document.getElementById('stripeModal');
    var span = document.getElementsByClassName("stripeClose")[0];
    modal.style.display = "block";
    
    span.onclick = function() {
    modal.style.display = "none";
}
   

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        card.clear()
    }
}

document.getElementById('stripeButton').innerText = 'Upgrade Plan'
    document.getElementById('stripeButton').setAttribute("onclick", "beginMembership()")

    
document.getElementById('stripePurchase').innerText = 'EZ Staff - Medium Plan - $19.99/month'
document.getElementById('upgradePlanValue').value = 'Medium'

}



function enterprisePlan() {
    var modal = document.getElementById('stripeModal');
    var span = document.getElementsByClassName("stripeClose")[0];
    modal.style.display = "block";
    
    span.onclick = function() {
    modal.style.display = "none";
        card.clear()
}
   

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        card.clear()
    }
}

document.getElementById('stripeButton').innerText = 'Upgrade Plan'
    document.getElementById('stripeButton').setAttribute("onclick", "beginMembership()")

document.getElementById('stripePurchase').innerText = 'EZ Staff - Enterprise Plan - $49.99/month'
document.getElementById('upgradePlanValue').value = 'Enterprise'
}


function beginMembership() {
    var plan = document.getElementById('upgradePlanValue').value
    var previousPlan = document.getElementById('hiddenPlan').value
    var email = document.getElementById('hiddenEmail').value
    
    var name = document.getElementById('stripeName').value
    
    
    stripe.createToken(card, { name: name}).then(function(result) {
    if (result.error) {
      // Inform the user if there was an error.
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      
        // Send the token to your server.

        
        //Creates an object to send to the server
        const input = {
        token : result.token.id,
        email : email,
        name : name,
        plan : plan,
        previousPlan : previousPlan
        }
            
        console.log(input)
        
        
        fetch("https://ezstaff.herokuapp.com/users/changeMembership", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(input)
        })
            .then(response => {
                return response.json();
            })
        
            .then(output => {
            // Clears the form and renders a server response
           /* document.getElementById('payment-form').reset()
            card.clear()
            document.getElementById('server-response').innerHTML = output.message
            
            
            // Styles the response, success=blue, error=red
            if (output.message.indexOf('Success') === 0) {
                document.getElementById('server-response').style.color = '#238bb9'
            } else {
                document.getElementById('server-response').style.color = '#fa755a'
            } */
            
            
            })
        
        
     var adminBody = document.getElementById('adminbody')
     adminBody.innerHTML = ''
        
        var modal = document.getElementById('stripeModal');
        modal.style.display = "none";
        card.clear()
    
    var h2Plan = document.createElement('h2')
    h2Plan.innerText = 'Current Plan: ' + plan
    adminBody.appendChild(h2Plan)  
        document.getElementById('hiddenPlan').value = plan
        
    var paragraph = document.createElement('p')
    paragraph.innerText = "You've successfully upgraded your plan! Thank you for using EZ Staff!"
        adminBody.appendChild(paragraph)

            
        
        
        
        }   
   
    })
    
}


function updateCardPopup() {
    var modal = document.getElementById('stripeModal');
    var span = document.getElementsByClassName("stripeClose")[0];
    modal.style.display = "block";
    
    span.onclick = function() {
    modal.style.display = "none";
        card.clear()
}
   

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        card.clear()
    }
}

document.getElementById('stripeButton').innerText = 'Update Card'
document.getElementById('stripeButton').setAttribute("onclick", "updateCard()")

    
}


function updateCard() {
   
    var email = document.getElementById('hiddenEmail').value
    
    var name = document.getElementById('stripeName').value
    
    
    stripe.createToken(card, { name: name}).then(function(result) {
    if (result.error) {
      // Inform the user if there was an error.
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      
        // Send the token to your server.

        
        //Creates an object to send to the server
        const input = {
        token : result.token.id,
        email : email,
        name : name
        }
            
        console.log(input)
        
        
        fetch("https://ezstaff.herokuapp.com/users/updateCard", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(input)
        })
            .then(response => {
                return response.json();
            })
        
            .then(output => {
            
            
            
            })
        
        var modal = document.getElementById('stripeModal');
        modal.style.display = "none";
        card.clear()
        
        
        
        
     var adminBody = document.getElementById('adminbody')
     adminBody.innerHTML = ''
    
    var h2Plan = document.createElement('h2')
    h2Plan.innerText = 'Current Plan: ' + document.getElementById('hiddenPlan').value
    adminBody.appendChild(h2Plan)  
        
    var paragraph = document.createElement('p')
    paragraph.innerText = "You've successfully updated your card information! Thank you for using EZ Staff!"
    adminBody.appendChild(paragraph)

            
        
        
        
        }   
   
    })
}


function changePlanPopup(clicked_id) {
    
    var clickedButton = document.getElementById(clicked_id)
     var modal = document.getElementById('changePlanModal');
    var span = document.getElementsByClassName("changePlanClose")[0];
    var button = document.getElementById('changePlanCloseButton')
    modal.style.display = "block";
    
    span.onclick = function() {
    modal.style.display = "none";
}
    button.onclick = function() {
    modal.style.display = "none";
}
   

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

    var newPlan = document.getElementById('newPlan')
    newPlan.innerText = clickedButton.parentElement.parentElement.firstElementChild.innerText
    
    
}


function changePlan() {
    var plan = document.getElementById('newPlan').innerText
    var previousPlan = document.getElementById('hiddenPlan').value
    var email = document.getElementById('hiddenEmail').value
    
    const input = {
        plan : plan,
        email : email,
        previousPlan : previousPlan
        }
            
        console.log(input)
        
        
        fetch("https://ezstaff.herokuapp.com/users/changeMembership", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(input)
        })
            .then(response => {
                return response.json();
            })
        
            .then(output => {
            
            
            
            })
    
    
    var modal = document.getElementById('changePlanModal');
        modal.style.display = "none";
  
        
     var adminBody = document.getElementById('adminbody')
     adminBody.innerHTML = ''
    
    var h2Plan = document.createElement('h2')
    h2Plan.innerText = 'Current Plan: ' + plan
    adminBody.appendChild(h2Plan)  
    document.getElementById('hiddenPlan').value = plan

        
    var paragraph = document.createElement('p')
    paragraph.innerText = "You've successfully changed your plan! Thank you for using EZ Staff!"
    adminBody.appendChild(paragraph)
    
}



function cancelPlanPopup() {
    var modal = document.getElementById('cancelPlanModal');
    var span = document.getElementsByClassName("cancelPlanClose")[0];
    var button = document.getElementById('cancelPlanCloseButton')
    
    modal.style.display = "block";
    
    span.onclick = function() {
    modal.style.display = "none";
}
    button.onclick = function() {
    modal.style.display = "none";
}
   

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}

function confirmCancelPlanPopup() {


var modal = document.getElementById('confirmCancelPlanModal');
    var span = document.getElementsByClassName("confirmCancelPlanClose")[0];
    var button = document.getElementById('confirmCancelPlanCloseButton')
    var modalClose = document.getElementById('cancelPlanModal');
        modalClose.style.display = "none";
    
    modal.style.display = "block";
    
    span.onclick = function() {
    modal.style.display = "none";
}
    button.onclick = function() {
    modal.style.display = "none";
}
   

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

}


function cancelPlan() {
    var email = document.getElementById('hiddenEmail').value
    var reasonForLeaving = document.getElementById('cancelReason').value
    
    const input = {
        email: email,
        reasonForLeaving: reasonForLeaving
    }
    
    console.log(input)
    
    
    fetch("https://ezstaff.herokuapp.com/users/cancelMembership", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(input)
        })
            .then(response => {
                return response.json();
            })
        
            .then(output => {
            
            
            
            })
    
    var modal = document.getElementById('confirmCancelPlanModal');
        modal.style.display = "none";
  
        
     var adminBody = document.getElementById('adminbody')
     adminBody.innerHTML = ''
    
    var h2Plan = document.createElement('h2')
    h2Plan.innerText = 'Current Plan: Free'
    adminBody.appendChild(h2Plan)  
        
    var paragraph = document.createElement('p')
    paragraph.innerText = "You've cancelled your plan with us :/ If there's any improvements we can make to win you back please let us know. Thank you for have using EZ Staff."
    adminBody.appendChild(paragraph)
    
    
}