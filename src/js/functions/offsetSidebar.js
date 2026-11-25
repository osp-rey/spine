export default function offsetSidebar() {
  const items = document.querySelectorAll("._offset-s");

  if (items) {
    function handlerOffset() {
      if (window.matchMedia("(min-width: 1200px)").matches) {
        const sidebar = document.querySelector(".p-sidebar");
        if (!sidebar) return;
        const sidebarWidth = sidebar.clientWidth;

        items.forEach((item) => {
          item.style.paddingLeft = `${sidebarWidth}px`;
          item.classList.add("_offset-s-made");
        });
      } else {
        items.forEach((item) => {
          if (item.classList.contains("_offset-s-made")) {
            item.classList.remove("_offset-s-made");
            item.style.paddingLeft = 0;
          }
        });
      }
    }

    handlerOffset();
    window.visualViewport.addEventListener("resize", handlerOffset);
    window.visualViewport.addEventListener("scroll", handlerOffset);
  }
}
