var err =0;

function length(password) {
   if(password.length > 5) {
       document.getElementById('chk1').innerHTML = "Length > 5 &nbsp; <i class='fas fa-check-circle'></i>";
   }
   else
   {
        err = 1;
        document.getElementById('chk1').innerHTML = "Length > 5 &nbsp; <i class='fas fa-times-circle'></i>";
   }
}

function digit(password) {
    var pattern = /\d/;
    if(password.match(pattern)) {
       document.getElementById('chk2').innerHTML = "Has a Digit &nbsp; <i class='fas fa-check-circle'></i>";
    }  
   else
   {
        err = 1;
        document.getElementById('chk2').innerHTML = "Has a Digit &nbsp; <i class='fas fa-times-circle'></i>";
   }
}

function lower(password) {
    var pattern = /[a-z]/;
    if(password.match(pattern)) {
       document.getElementById('chk3').innerHTML = "Has a Lower Case &nbsp; <i class='fas fa-check-circle'></i>";
    }
   else
   {
        err = 1;
        document.getElementById('chk3').innerHTML = "Has a Lower Case &nbsp; <i class='fas fa-times-circle'></i>";
   }
}

function upper(password) {
    var pattern = /[A-Z]/;
    if(password.match(pattern)) {
       document.getElementById('chk4').innerHTML = "Has a Upper Case &nbsp; <i class='fas fa-check-circle'></i>";
    }
   else
   {
        err = 1;
        document.getElementById('chk4').innerHTML = "Has a Upper Case &nbsp; <i class='fas fa-times-circle'></i>";
   }
}

function symbol(password) {
    var pattern = /[$-/:-?{-~!@#%&*()"^_`\[\]]/;
    if(password.match(pattern)) {
       document.getElementById('chk5').innerHTML = "Has a Symbol &nbsp; <i class='fas fa-check-circle'></i>";
    }
   else
   {
        err = 1;
        document.getElementById('chk5').innerHTML = "Has a Symbol &nbsp; <i class='fas fa-times-circle'></i>";
   }
}

  

function check() {
    var password = document.getElementById("pass").value;
    err=0;
    length(password);
    digit(password);
    lower(password);
    upper(password);
    symbol(password);

    if(err==1)
    {
      document.getElementById('res').innerHTML = "Invalid password, pleas fullfill the requirements below:";
    }
    else
    {
      document.getElementById('res').innerHTML = "";
    }
}