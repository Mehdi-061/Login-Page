let form        = document.querySelector(".form")
let username    = document.querySelector("#username")
let password    = document.querySelector("#password")
let danger_u    = document.querySelector("#danger-username")
let danger_p    = document.querySelector("#danger-password")
// icon for show passwrod
let pass_icon = document.querySelector(".fas")


// userPatter => up
let up = /^[a-zA-Z][\w._]{3,20}$/
// evaluatepassword => eu
var eu = false
// evaluatepassword => ep
let ep = 0

// IF Username
username.addEventListener('keyup', e =>{
    if (up.test(e.target.value)) {
        eu = true
        danger_u.innerHTML = ""
    }else{
        danger_u.innerHTML = "** Username is Incorrect. **" + `<br>` 
        + "You should be used more 4 character" 
        eu = false
    }
})

// IF Password
password.addEventListener('keyup',e =>{
    if (e.target.value) {
        ep = 0
        ep += /[a-z]/.test(e.target.value) ? 1 : 0;
        ep += /[A-Z]/.test(e.target.value) ? 1 : 0;
        ep += /[0-9]/.test(e.target.value) ? 1 : 0;
        ep += /[\w]/.test(e.target.value) ? 1 : 0;
        ep += e.target.value.length >=6 ? 1 : 0;
        if (ep === 5) {
            danger_p.innerHTML = ""
            eu = true
        }else{
            danger_p.innerHTML = "** Password is Incorrect. **" + `<br>` 
            + "You should be used (a-z),(A Z),(0-9)"
            eu = false
        }
    }
})

// IF Form
form.addEventListener('submit', e =>{
    if (!(eu && ep === 5)) {
        e.preventDefault()
    }
    if (!eu) {
        danger_u.innerHTML = " Username is Incorrect."
    }
    if (ep !== 5) {
        danger_p.innerHTML = "Password is Incorrect."
    }
})



//show password
pass_icon.addEventListener('click', e=>{
    if (password.type === "password") {
        password.type = "text";
        pass_icon.style.color = "#2691d9"
        pass_icon.classList.add("fa-eye")
        pass_icon.classList.remove("fa-eye-slash")
    }else{
        pass_icon.style.color = "#adadad"
        password.type = "password";
        pass_icon.classList.add("fa-eye-slash")
        pass_icon.classList.remove("fa-eye")
    }
})
