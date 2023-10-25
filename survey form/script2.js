document.addEventListener("DOMContentLoaded", function () {
    const surveyForm = document.getElementById("surveyForm");
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");
    const popup = document.getElementById("popup");
    const surveyData = document.getElementById("surveyData");
    const close = document.getElementById("close");

    // Event listener for the "Submit" button
    submitBtn.addEventListener("click", function () {
        if (surveyForm.checkValidity()) {
            // Gather form data
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const dob = document.getElementById("dob").value;
            const country = document.getElementById("country").value;
            const genderElements = document.querySelectorAll("input[name='gender']:checked");
            const gender = Array.from(genderElements).map((el) => el.value).join(", ");
            const profession = document.getElementById("profession").value;
            const email = document.getElementById("email").value;
            const mobile = document.getElementById("mobile").value;

            // Display form data in the popup
            surveyData.innerHTML = `
                <li><strong>First Name:</strong> ${firstName}</li>
                <li><strong>Last Name:</strong> ${lastName}</li>
                <li><strong>Date of Birth:</strong> ${dob}</li>
                <li><strong>Country:</strong> ${country}</li>
                <li><strong>Gender:</strong> ${gender}</li>
                <li><strong>Profession:</strong> ${profession}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Mobile Number:</strong> ${mobile}</li>
            `;

            // Show the popup
            popup.style.display = "block";
        }
    });

    // Event listener for the "Close" button in the popup
    close.addEventListener("click", function () {
        // Hide the popup
        popup.style.display = "none";
        // Reset the form
        surveyForm.reset();
    });

    // Event listener for the "Reset" button
    resetBtn.addEventListener("click", function () {
        // Reset the form
        surveyForm.reset();
    });
});

