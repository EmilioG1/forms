$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const personInput = $("input#person").val();

    $(".person").text(personInput.toUpperCase());

    // $("#yell").show();
  });
});

