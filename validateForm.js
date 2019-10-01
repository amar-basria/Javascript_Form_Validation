function validateForm() {
    var x= document.forms["myForm"]["firstname"].value;
    if (x== "")
    {
        alert("Please enter the first name");
        return false;
    }
    var y=document.forms["myForm"]["lastname"].value;
    if  (y=="")
    {
        alert("Please enter the last name");
        return false;
    }
    var z=document.forms["myForm"]["email"].value;
    if  (z=="")
    {
        alert("Please enter the email");
        return false;
    }
}

