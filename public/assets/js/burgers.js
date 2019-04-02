// Wait for DOM
$(function() {
  $(".eat-button").on("click", function(event) {
    var id = $(this).data("id");

    var newEatState = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("changed devoured", true);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    // Validate
    if ($("#bu").val().trim()){
      var newBurger = {
        name: $("#bu").val().trim(),
        devoured: false
      };

      // POST
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    }
  });
});
