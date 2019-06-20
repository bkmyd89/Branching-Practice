$(document).ready(function() {
  $("#calculator").submit(function(event) {
    event.preventDefault();
    console.log("calculator submitted");
    var firstName = $("input.firstName").val();
    var lastName = $("input.lastName").val();
    alert("Please enjoy this quiz " + firstName + " " + lastName + "!");
    $(".front").slideToggle();
    $(".quiz").slideToggle();
  });

  $("#quiz").submit(function(event) {
    debugger;
    event.preventDefault();
    console.log("quiz submitted");
  });
});
