document.getElementById("submit-button").addEventListener("click", function () {
  const userName = document.getElementById("userName").value;
  const jobInterestArea = document.getElementById("jobInterestArea").value;
  const age = parseInt(document.getElementById("age").value);
  const email = document.getElementById("email").value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  //the code is checking the conditions that all fields are filled
  if (
    userName &&
    jobInterestArea &&
    !isNaN(age) &&
    age >= 18 &&
    emailPattern.test(email)
  ) {
    document.getElementById(
      "message-success"
    ).innerHTML = `Thank you ${userName}! <br>Your application for the position ${jobInterestArea} has been successful! <br> We will be in touch soon!`;

    document.getElementById("message-success").style.color = "#27296d";
    document.getElementById("message-success").style.fontSize = "large";

    //together with the success message we have all fields cleared and ready for a next application
    document.getElementById("userName").value = "";
    document.getElementById("jobInterestArea").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("myFile").value = "";

    //the below is running only if one or more fields are being left empty
  } else if (!userName || !jobInterestArea || isNaN(age) || !email) {
    document.getElementById("empty-field-message").innerHTML =
      "Fields Name, Job Interest Area, Email and Age are mandatory!";
    document.getElementById("empty-field-message").style.color = "red";
    //the below runs only when the age is below 18
  } else if (age < 18) {
    document.getElementById(
      "age-message"
    ).innerHTML = `We are sorry ${userName}, but you must be over 18 to apply for a job with us!`;
    document.getElementById("age-message").style.color = "red";
    //the below checks that the entered email address is in a correct format based on the given pattern
  } else if (!emailPattern.test(email)) {
    document.getElementById("email-message").innerHTML =
      "Please enter a valid email address!";
    document.getElementById("email-message").style.color = "red";
  }
});

document.getElementById("clear-button").addEventListener("click", function () {
  document.getElementById("userName").value = "";
  document.getElementById("jobInterestArea").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
  document.getElementById("myFile").value = "";

  //the below is to clear any error/success messages after clicking Clear

  document.getElementById("empty-field-message").innerHTML = "";
  document.getElementById("myFile-message").innerHTML = "";
  document.getElementById("age-message").innerHTML = "";
  document.getElementById("email-message").innerHTML = "";
  document.getElementById("message-success").innerHTML = "";
});