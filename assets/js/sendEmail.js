function sendMail(contactForm){
    emailjs.send("service_i1al0av", "Nick-Resume", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("Success", response);
        },
        function(error){
            console.log("Failed", error);
        });

    return false; // To block from loading new page
}