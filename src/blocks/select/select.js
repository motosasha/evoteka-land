import ready from "../../js/utils/documentReady.js";
import SimpleBar from "simplebar";
import SlimSelect from "slim-select";

ready(function () {
  const placeSelect = document.querySelector("[name='contacts-place']");
  const categorySelect = document.querySelector("[name='contacts-category']");

  new SlimSelect({
    select: placeSelect,
    settings: {
      showSearch: false,
    },
    events: {
      afterChange: () => {
        const id = placeSelect.dataset.id;
        const drop = document.querySelector(`.ss-content[data-id="${id}"]`);
        const list = drop.querySelector(".ss-list");
        new SimpleBar(list, { autoHide: false });
      },
    },
  });

  new SlimSelect({
    select: "[name='contacts-category']",
    settings: {
      showSearch: false,
    },
    events: {
      afterChange: () => {
        const id = categorySelect.dataset.id;
        const drop = document.querySelector(`.ss-content[data-id="${id}"]`);
        const list = drop.querySelector(".ss-list");
        new SimpleBar(list, { autoHide: false });
      },
    },
  });

  setTimeout(() => {
    const selectDrops = document.querySelectorAll(".ss-list");
    selectDrops.forEach((selectDrop) => {
      new SimpleBar(selectDrop, { autoHide: false });
    });
  }, 1000);
});
