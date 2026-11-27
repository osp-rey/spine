import { Scrollable } from "./Scrollable.js";

export default function scrollable() {
  const sectNavs = document.querySelectorAll(".sect-nav");

  if (sectNavs.length) {
    sectNavs.forEach((nav) => {
      new Scrollable(nav);
    });
  }
}
