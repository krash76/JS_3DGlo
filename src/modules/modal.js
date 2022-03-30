import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const modalContent = modal.querySelector(".popup-content");
  
  buttons.forEach(button => (button.addEventListener("click", () => {
    animate({
      duration: 1000,
      timing(timeFraction) {
          return timeFraction;
        },
      draw(progress) {
        modal.style.display = "block";
        let count = 250;
        modalContent.style.top = count * progress + "px";  
        } 
      });

    /* 
    modal.style.display = "block";
    let count = -300;
    let idInterval;

    const modalAnimate = () => {
      count+=10;
      idInterval = requestAnimationFrame(modalAnimate);
      if (count < 250) {
        modalContent.style.top = count + "px";
      } else {
        cancelAnimationFrame(idInterval);
      }
    };
   */
    if (window.screen.width >= 768 ) {
      animate({
      duration: 1000,
      timing(timeFraction) {
          return timeFraction;
        },
      draw(progress) {
        modal.style.display = "block";
        let count = 250;
        modalContent.style.top = count * progress + "px";  
        } 
      });
    } else {
      modal.style.display = "block";
    }
  })));

  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".popup-content") || e.target.classList.contains ("popup-close")) {
      modal.style.display = "none";
    }
   
  })

};

export default modal;