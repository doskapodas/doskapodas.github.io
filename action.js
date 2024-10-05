function handleSubmit(event) {
    event.preventDefault();
    let Fullname = document.getElementById(Fullname).value
    console.log([Fullname]);
}
const form = document.getElementById("form-contact-us");
form.addEventListener("submit",handleSubmit);