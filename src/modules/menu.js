const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = document.querySelector(".close-btn");
  const menuItems = document.querySelectorAll("ul>li>a");

  const handleMenu = () => {
   // if (!menu.style.transform) {
     // menu.style.transform = "translateX(0)";
    //} else {
      //menu.style.transform = ""; // or "translate(-100%)" for control
    //}
    menu.classList.toggle("active-menu");
  };


  menuBtn.addEventListener("click", handleMenu);
  closeBtn.addEventListener("click",handleMenu);
  menuItems.forEach(menuItem => menuItem.addEventListener("click", handleMenu))

};

export default menu;
