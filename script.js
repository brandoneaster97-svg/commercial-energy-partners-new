const form = document.getElementById("contact-form");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xeebrrjl", {

        method: "POST",

        body: formData,

        headers: {

            Accept: "application/json"

        }

    });

    if(response.ok){

        document.getElementById("success-message").style.display = "block";

        form.reset();

    }else{

        alert("❌ Something went wrong. Please try again.");

    }

});