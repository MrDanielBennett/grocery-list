$(document).ready(function() {
  var groceryList = [];
  $("#input-form").submit(function(event) {
    event.preventDefault();
    groceryList.push($("#input").val().toLowerCase());
    groceryList.sort();
    $("#input").val('');
  });
  $("#full-submit").click(function() {
    event.preventDefault();
    var upperGrocery = groceryList.map(function(grocery) {
      return grocery.toUpperCase();
    });
    upperGrocery.forEach(function(grocery) {
      $("ul").append("<li>" + grocery + "</li>")
    });
    $("#hideable-form").hide();
    $("#hidden-things").show();
  });
});
