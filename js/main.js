$(document).ready(function () {
  var $sourceContainers = $(".source-container");
  
  $("#search").keyup(function () {
    var $this = $(this);
    var searchParam = $this.val().toLowerCase();
    
    if (searchParam.length >= 3) {
      $sourceContainers.each(function () {
        var $this = $(this);
        var header = $this.find("h2").html().toLowerCase();
        var body = $this.find("p").html().toLowerCase();
        
        if (header.indexOf(searchParam) < 0 && body.indexOf(searchParam) < 0) {
          $this.addClass("hidden");
        }
      });
    } else {
      $sourceContainers.removeClass("hidden");
    }
  });
});