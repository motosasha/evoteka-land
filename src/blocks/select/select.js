import ready from "../../js/utils/documentReady.js";
import SimpleBar from "simplebar";
import SlimSelect from "slim-select";

ready(function () {
  const selects = document.querySelectorAll("select");

  if (selects && selects.length) {
    selects.forEach((select) => {
      new SlimSelect({
        select: select,
        settings: {
          showSearch: false,
        },
        events: {
          afterChange: () => {
            const id = select.dataset.id;
            const drop = document.querySelector(`.ss-content[data-id="${id}"]`);
            const list = drop.querySelector(".ss-list");
            new SimpleBar(list, { autoHide: false });
          },
        },
      });
    });
  }

  setTimeout(() => {
    const selectDrops = document.querySelectorAll(".ss-list");
    selectDrops.forEach((selectDrop) => {
      new SimpleBar(selectDrop, { autoHide: false });
    });
  }, 1000);
});
