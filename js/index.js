$(document).ready(function() {
  $("#search").click(function() {
    var text = $("#searchText").val();
    if(text==""){
      alert("Enter a Search term.");
    }
    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&search=" + text + "&format=json&callback=?";
    $("#result").empty();
   $.ajax({
     type: "POST",
     url: api,
     contentType: "application/json; charset=utf-8",
     async: false,
     dataType: "json",
     success: function(data) {
                for(var i = 0 ; i < data[1].length ; i++) {
                  $("#result").prepend("<li class=\"list-group-item-info\"><h4><a href=" + data[3][i] + ">" + data[1][i] + "</h4></a>" + "<h6>" + data[2][i] +"</h6></li><br>");
                }
              }
   });
  });
});