$(document).ready(function () {
  var highlighter = new Hilitor("open-cards");
  var $sourceContainers = $(".source-container");
  
  highlighter.setMatchType("open");
  
  $("#search").keyup(function () {
    var $this = $(this);
    var searchParam = $this.val().toLowerCase();
    
    if (searchParam.length >= 3) {
      highlighter.apply(searchParam);
      
      $sourceContainers.each(function () {
        var $this = $(this);
        var header = $this.find("h2").html().toLowerCase();
        var body = $this.find("p").html().toLowerCase();
        
        if (header.indexOf(searchParam) < 0 && body.indexOf(searchParam) < 0) {
          $this.addClass("hidden");
        }
      });
    } else {
      highlighter.remove();
      $sourceContainers.removeClass("hidden");
    }
  });
});