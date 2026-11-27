import burger from "./functions/burger.js";
import hoverItem from "./functions/hoverItem.js";
import offsetSidebar from "./functions/offsetSidebar.js";
import pSidebarDrop from "./functions/pSidebarDrop.js";
import scrollable from "./functions/scrollbable.js";
import sliders from "./functions/sliders.js";

document.addEventListener("DOMContentLoaded", () => {
  offsetSidebar();
  hoverItem();
  pSidebarDrop();
  sliders();
  burger();
  scrollable();

  // Fancybox.show([{src: "#modal-feedback", type: "inline"}])

  Fancybox.bind("[data-fancybox]", {
    on: {
      destroy: (instance) => {
        const id = instance.getSlide().src;

        if (id.includes("#modal")) {
          const modal = document.querySelector(id);
          const inputNote = modal.querySelector(".input-note");
          const modalTitle = modal.querySelector(".modal__title[data-text]");

          if (inputNote) inputNote.value = "";
          if (modalTitle) modalTitle.textContent = modalTitle.dataset.text;
        }
      },
    },
  });
});
