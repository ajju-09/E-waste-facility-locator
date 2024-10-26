const signIn = document.querySelector(".signup");

signIn.addEventListener("click", () => {
    Redirect();
});

function Redirect() {
    window.location = "http://127.0.0.1:3000/sign_in.html";
}