import "./style.css";
// import { setupCounter } from "./counter.ts";
document
  .querySelector(".btn-social.instagram")
  ?.addEventListener("click", () => {
    window.open("https://www.instagram.com/subodhnjr", "_blank");
  });
document
  .querySelector(".btn-social.linkedin")
  ?.addEventListener("click", () => {
    window.open(
      "https://www.linkedin.com/in/subodh-bhandari-512631159",
      "_blank"
    );
  });
// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
