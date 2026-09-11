const form = document.getElementById("contact-form");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const formData = new FormData(form);

    try {

        const response = await fetch("https://formspree.io/f/xeebrrjl", {

            method: "POST",

            body: formData,

            headers: {
                Accept: "application/json"
            }

        });

        if (response.ok) {

            window.location.href = "thankyou.html";

        } else {

            alert("Something went wrong. Please try again.");

        }

    } catch (error) {

        alert("Something went wrong. Please check your connection and try again.");

    }

});