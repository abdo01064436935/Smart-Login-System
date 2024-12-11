var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var nameInput =document.getElementById("nameInput");
var nameInputForSignIn = document.getElementById("nameInputForSignIn");
var emailInputForSignIn =document.getElementById("emailInputForSignIn");
var passwordInputForSignIn =document.getElementById("passwordInputForSignIn");
var nameUser =document.getElementById("nameUser")
var parError =document.getElementById("parError");
var btnLogOut =document.getElementById("btnLogOut");
var succes =document.getElementById("succes");
var parError2 =document.getElementById("parError2");
// var signUpAncor =document.getElementById("signUpAncor");
var con =document.querySelector(".con")
var con2 = document.querySelector(".con2")
var btnLogin =document.querySelector(".btnLogin")
var btnLogin2 =document.querySelector(".btnLogin2")
var welcome =document.querySelector(".welcome")



// var list = [];

// var object = {
//     // name : nameInput.value,
//     email : emailInput.value,
//     password : passwordInput.value,

// }

// list.push(object);
// DisplayName(list);

// var list2 = [];

// var object = {
//     nameinput : nameInputForSignIn.value,
//     emailinput : emailInputForSignIn.value,
//     passwordinput : passwordInputForSignIn.value,

// }
// list.push(object);
// DisplayName(list2),


function parErrore(){
    if( emailInput.value === "" || passwordInput.value === "" || nameInput === ""){
        parError.classList.replace("d-none" , "d-block")
        }else{
            parError.classList.add("d-none")
            displayWeleomeName()
            DisplayName()
        }
}

function signUp(){
con.classList.add("d-none");
con2.classList.remove("d-none");
}

function signIn(){
    con2.classList.add("d-none");
    con.classList.remove("d-none")
}

function displayWeleomeName(){
    if(emailInputForSignIn.value === emailInput.value && passwordInputForSignIn.value === passwordInput.value){
        con.classList.add("d-none");
    con2.classList.add("d-none");

        nameUser.classList.remove("d-none")
       
    }else{
       console.log("jaja");
       
        
        
    }
}

// btnLogin.addEventListener("click" , function(){
//     displayWeleomeName()
// })


btnLogOut.addEventListener("click" , function () {
    nameUser.classList.add("d-none");
    con2.classList.add("d-none");
    con.classList.remove("d-none")
    con.classList.add("d-block")
    
    
})


function DisplayName(){
    
    // var cartoona = ""
    // for(var i = 0 ; i < 4; i++){
    //     cartoona === ` <h1>Welcome ${nameInputForSignIn.value}</h1> `
    // }

    // plist.push(cartoona)
    welcome.innerHTML = `<h1>Welcome ${nameInputForSignIn.value}</h1>` ;
}


// btnLogin.addEventListener("click" , function () {

//     nameUser.classList.add("d-none");
//     con2.classList.add("d-none");
//     con.classList.remove("d-none")
//     con.classList.add("d-block")
//     displayWeleomeName()
    
// })

btnLogin2.addEventListener("click" , function(){
    displaySucces()
    parErroreLogin()
})





function parErroreLogin(){
    if( nameInputForSignIn.value === "" || emailInputForSignIn.value === "" || passwordInputForSignIn === ""){
        parError2.classList.replace("d-none" , "d-block")
        }else{
            parError2.classList.add("d-none")
           
           
        }
}


 function displaySucces(){
    if(nameInputForSignIn.value == "" || emailInputForSignIn.value == "" || passwordInputForSignIn.value == ""){
        succes.classList.add("d-none")
        parErroreLogin()
    }else{
        succes.classList.remove("d-none")
    }
    
}







       