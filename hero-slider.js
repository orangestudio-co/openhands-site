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

const modalItem = Object.fromEntries(
  ["icon", "title", "description", "cloudUrl", "sdkUrl"].map((name) => [
    name,
    $(`[data-modal-content="${name}"]`),
  ]),
);

$("[data-modal='open']").on("click", function () {
  let current = $(this).parent();
  let currentContent = {
    icon: current.find("[data-content='icon']").attr("src"),
    title: current.find("[data-content='title']").text(),
    description: current.find("[data-content='description']").text(),
    sdk: current.find("[data-sdk-url]").attr("data-sdk-url"),
    cloud: current.find("[data-cloud-url]").attr("data-cloud-url"),
  };

  modalItem.icon.attr("src", currentContent.icon);
  modalItem.title.text(currentContent.title);
  modalItem.description.text(currentContent.description);
  modalItem.sdkUrl.attr(
    "href",
    currentContent.sdk ? currentContent.sdk : "https://app.all-hands.dev/login",
  );
  modalItem.cloudUrl.attr(
    "href",
    currentContent.cloud ? currentContent.cloud : "#",
  );

  $("[data-modal='modal']")[0].showModal();
});

$("[data-modal='close']").on("click", function () {
  $("[data-modal='modal']")[0].close();
});
