var addToList = function(grocery, groceryList) {
  if(grocery) {
    groceryList.push(grocery);
    groceryList.sort();
  }
};

var updateList = function(groceryList) {
  var upperGrocery = groceryList.map(function(grocery) {
    return grocery.toUpperCase();
  });
  upperGrocery.forEach(function(grocery) {
    $("#grocery-list").append("<li>" + grocery + "</li>")
  });
};

$(document).ready(function() {
  var groceryList = [];
  $("#input-form").submit(function(event) {
    event.preventDefault();
    addToList($("#input").val().toLowerCase(), groceryList);
    $("#input").val('');
  });
  $("#full-submit").click(function() {
    event.preventDefault();
    addToList($("#input").val().toLowerCase(), groceryList);
    updateList(groceryList);
    $("#hideable-form").hide();
    $("#hidden-things").show();
    $("#editing").hide();
  });
  $("#return").click(function() {
    event.preventDefault();
    $("#add-section").show();
    $("#return").hide();
    $("#complete").hide();
    $("#editing").show();
  });
  $("#add-form").submit(function(event) {
    $("#grocery-list").children().remove();
    addToList($("#add").val().toLowerCase(), groceryList);
    updateList(groceryList);
    event.preventDefault();
    $("#add").val('');
  });
  $("#done-button").click(function() {
    event.preventDefault();
    $("#add-section").hide();
    $("#return").show();
    $("#editing").hide();
    $("#complete").show();
  });
});
