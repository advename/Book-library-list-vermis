// ###########################
// LOGIN
// ###########################

const loginButton = document.querySelector("form.login input[name='login']");

loginButton.addEventListener("click", login);

function login() {
    const email = document.querySelector("form.login input[name='email']").value;
    const password = document.querySelector("form.login input[name='password']").value;

}






// ###########################
// REGISTER
// ###########################

const registerButton = document.querySelector("form.register input[name='register']");

registerButton.addEventListener("click", register);

function register() {
    const email = document.querySelector("form.register input[name='email']").value;
    const password = document.querySelector("form.register input[name='password']").value;
    const passwordConf = document.querySelector("form.register input[name='passwordConf']").value;

    if (password === passwordConf) {
        let newUser = {
            email: email,
            password: password
        };
        
        fetch("/register", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(result => result.json()).then(result => checkRegisterStatus(result));
    } else {
        console.log("not matching");
    }
}

function checkRegisterStatus(result){
    console.log(result);
}
