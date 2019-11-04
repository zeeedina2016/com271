function validate(){
    var n = document.forms["contactme"]["name"];
    var s = document.forms["contactme"]["social"];
    var e = document.forms["contactme"]["email"];
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (n.value == "")                                  
    { 
        alert("Please enter your name."); 
        n.focus(); 
        return false; 
    } 

    if (s.value == "")                                  
    { 
        alert("Please enter your social media account! im tryna follow you!."); 
        s.focus(); 
        return false; 
    } 

    if (e.value.match(mailformat))                                  
    { 
        return true; 
    } else{
        alert("you KNOW thats not ya email."); 
        e.focus(); 
        return false;
    }
return true;
}


/*function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
*/

//if theu decide to disable javascript
/*function validateemail(){
    if(validEmail(email)){
        return;
    }
    else{
        alert("you know that aint ya email!");
    }
    return false;
}

//$("#validate").on("submit",validate); */

