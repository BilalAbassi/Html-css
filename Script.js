document.addEventListener("DOMContentLoaded", function () {
  var myform = document.getElementById("myform");
  var companyName = document.getElementById("companyName");
  var website = document.getElementById("website");
  var showIcon = document.getElementById("showIcon");
  var address = document.getElementById("address");
  var vatNumber = document.getElementById("vatNumber");
  var vatRate = document.getElementById("vatRate");

  var creditLimit = document.getElementById("creditLimit");
  var creditDays = document.getElementById("creditDays");
  var Currency = document.getElementById("Currency");
  var service = document.getElementById("service");

  myform.addEventListener("input", function () {
    // Check if the checkbox is checked
    if (
      companyName.value.trim() !== "" &&
      website.value.trim() !== "" &&
      vatRate.value === "15%" &&
      Currency.value === "USD" &&
      service.value === "ab" &&
      address.value.trim() !== "" &&
      vatNumber.value.trim() !== "" &&
      creditDays.value.trim() !== "" &&
      creditLimit.value.trim() !== ""
    ) {
      // If not empty, show the content
      showIcon.style.display = "block";
    } else {
      // If empty, hide the content
      showIcon.style.display = "none";
    }
  });

  // function logValue() {
  //   var inputElement = document.getElementById("companyName");
  //   var inputValue = inputElement.value;

  //   alert(inputValue);
  //   console.log("Input value:", inputValue);
  // }
});
