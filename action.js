function handleSubmit(event) {
    event.preventDefault();
    let Fullname = document.getElementById("Fullname")
    console.log([Fullname]);
}
const form = document.getElementById("form-contact-us");
form.addEventListener("submit",handleSubmit);