function filterResults ($items, category, needle) {
  var highlighter = new Hilitor("open-cards");
  highlighter.setMatchType("open");

  $items.each(function () {
    var $this = $(this);
    var searchParam = needle.toLowerCase();
    var hideResult = false;

    if (searchParam.length >= 3) {
      var header = $this.find(".title").html().toLowerCase();
      var body = $this.find("p").html().toLowerCase();

      highlighter.apply(searchParam);

      if (header.indexOf(searchParam) < 0 && body.indexOf(searchParam) < 0) {
        hideResult = true;
        $this.attr("data-hiddensearch", true);
      }
    } else {
      highlighter.remove();

      if ($this.data("hiddensearch")) {
        hideResult = false;
        $this.attr("data-hiddensearch", false);
      }
    }

    if (category === "all") {
      if (hideResult) {
        $this.attr("data-hiddencat", false);
      }
    }

    if (category !== "all" && $this.data("category") !== category) {
      hideResult = true;
      $this.attr("data-hiddencat", true);
    }

    if (hideResult) {
      $this.addClass("hidden");
    } else {
      $this.removeClass("hidden");
    }
  });

  if ($(".source-container:visible").length === 0) {
    $("#noResults").removeClass("hidden");
  } else {
    $("#noResults").addClass("hidden");
  }
}

$(document).ready(function () {
  var currentCategory =  "all";
  var currentSearchParam = "";
  var $sourceContainers = $(".source-container");

  $("#search").keyup(function () {
    currentSearchParam = $(this).val().toLowerCase();

    filterResults($sourceContainers, currentCategory, currentSearchParam);
  });

  $(".cat-filter").click(function (e) {
    e.preventDefault();

    currentCategory = $(this).data("category");

    $("#categorySelection").html($(this).html());

    filterResults($sourceContainers, currentCategory, currentSearchParam);
  });
});
