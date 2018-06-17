var plan = document.getElementById('hiddenPlan').value

if (plan === 'Free') {
    
    var expiration = document.getElementById('expirationDate').value
    
    
    
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
                    

var expirationDate = new Date(expiration)
var expirationDatedd = expirationDate.getDate();
var expirationDatemm = expirationDate.getMonth()+1; //January is 0!
var expirationDateyyyy = expirationDate.getFullYear();

if(expirationDatedd<10) {
    expirationDatedd = '0'+expirationDatedd
} 

if(expirationDatemm<10) {
    expirationDatemm = '0'+expirationDatemm
} 

expirationDate = expirationDatemm + '/' + expirationDatedd + '/' + expirationDateyyyy;

 
    
    if (today > expirationDate) {
        
        document.getElementById('adminbody').innerHTML = ''
        
        var header = document.createElement('h2')
        header.innerText = 'Trial Expired'
        
        
        var paragraph = document.createElement('p')
        paragraph.innerText = "Your free trial has expired! Please navigate to 'Plans' and Upgrade in order to continue using EZ Staff. Thank you."
        
        
        
        
    }
    
    
    
    
    
    
    
}