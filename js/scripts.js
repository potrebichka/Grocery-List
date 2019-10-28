$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    $("#form1").hide();
    var arr =[];
    [1,2,3,4,5].forEach(function(num) {
      arr.push($("#item" + num).val().toUpperCase())
    });
    arr.sort();
    arr.forEach(function(item) {
      $("#list").append("<li>" + item + "</li>");
    })
  })
});
