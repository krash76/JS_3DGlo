const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const modalContent = modal.querySelector(".popup-content");
  
  buttons.forEach(button => (button.addEventListener("click", () => {
    modal.style.display = "block";
    let count = -300;
    let idInterval;

    const modalAnimate = () => {
      count++;
      idInterval = requestAnimationFrame(modalAnimate);
      if (count < 40) {
        modalContent.style.top = count + "px";
      } else {
        cancelAnimationFrame(modalAnimate);
      }
    };
  
    if (window.screen.width >= 768 ) {
      modalAnimate();
    } else {
      modal.style.display = "block";
    }
  })));

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  })
};

export default modal;