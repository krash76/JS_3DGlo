const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const modalContent = modal.querySelector(".popup-content");
  
  buttons.forEach(button => (button.addEventListener("click", () => {
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
   
    if (window.screen.width >= 768 ) {
      modalAnimate();
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