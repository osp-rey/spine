export default function pSidebarDrop() {
  const buttons = document.querySelectorAll("[data-sidebar-drop-btn]");
  if (buttons.length) {
    const sidebar = document.querySelector(".p-sidebar");
    const overlay = document.querySelector(".p-sidebar__drop-overlay");
    const drops = document.querySelectorAll("[data-sidebar-drop]");
    let timeoutClose = null;

    overlay.addEventListener("mouseenter", handleClose);
    overlay.addEventListener("mouseleave", () => {
      clearTimeout(timeoutClose);
    });
    sidebar.addEventListener("mouseenter", handleClose);
    sidebar.addEventListener("mouseleave", () => {
      clearTimeout(timeoutClose);
    });

    function handleClose() {
      timeoutClose = setTimeout(() => {
        drops.forEach((d) => d.classList.remove("_open"));
        overlay.classList.remove("_active");
        buttons.forEach((b) => b.classList.remove("_active"));
      }, 400);
    }

    drops.forEach((d) =>
      d.addEventListener("mouseenter", (e) => {
        e.stopPropagation();
        clearTimeout(timeoutClose);
      }),
    );
    buttons.forEach((btn) => {
      let timeout = null;

      btn.addEventListener("mouseenter", (e) => {
        e.stopPropagation();
        if (btn.classList.contains("_active")) return;
        clearTimeout(timeoutClose);
        timeout = setTimeout(() => {
          const id = btn.dataset.sidebarDropBtn;
          const drop = document.querySelector(`[data-sidebar-drop="${id}"]`);

          if (window.matchMedia("(max-width: 1199px)").matches) {
            const sidebar = document.querySelector(".p-sidebar");
            if (!sidebar) return;
            const offsetTop = sidebar.clientHeight;
            drop.style.paddingTop = `${offsetTop}px`;
          }

          if (!drop) return;

          drops.forEach((d) => d.classList.remove("_open"));

          if (!overlay.classList.contains("_active"))
            overlay.classList.add("_active");
          drop.classList.add("_open");
        }, 150);
      });
      btn.addEventListener("mouseleave", () => {
        clearTimeout(timeout);
        handleClose();
      });
    });
  }
}
