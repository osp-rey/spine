export default function hoverItem() {
  const containers = document.querySelectorAll("[data-hover-container]");

  if (containers.length) {
    containers.forEach((container) => {
      const buttons = container.querySelectorAll("[data-hover-btn]");
      const items = container.querySelectorAll("[data-hover-item]");

      buttons.forEach((btn) => {
        let timeout = null;

        btn.addEventListener("mouseenter", () => {
          if (btn.classList.contains("_active")) return;

          timeout = setTimeout(() => {
            const id = btn.dataset.hoverBtn;
            const item = container.querySelector(`[data-hover-item="${id}"]`);

            items.forEach((i) => {
              i.classList.remove("_show");
              setTimeout(() => {
                i.classList.remove("_active");
              }, 150);
            });
            setTimeout(() => {
              item.classList.add("_active");
              setTimeout(() => {
                item.classList.add("_show");
              }, 150);
            }, 150);

            buttons.forEach((b) => b.classList.remove("_active"));
            btn.classList.add("_active");
          }, 150);
        });
        btn.addEventListener("mouseleave", () => clearTimeout(timeout));
      });
    });
  }
}
