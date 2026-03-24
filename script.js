document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    arrows: false,
    pagination: false,
    autoWidth: true,
    gap: "1.5rem",
    focus: 0,
    omitEnd: true,
  });
  splide.mount();

  $("[data-splide]").on("click", function () {
    splide.go($(this).attr("data-splide") === "next" ? ">" : "<");
  });
});

$("[data-modal='open']").on("click", function () {
  let current = $(this).parent();
  let currentContent = {
    icon: current.find("[data-content='icon']").attr("src"),
    title: current.find("[data-content='title']").text(),
    description: current.find("[data-content='description']").text(),
    sdk: current.find("[data-sdk-url]").attr("data-sdk-url"),
    cloud: current.find("[data-cloud-url]").attr("data-cloud-url"),
  };
  
});
