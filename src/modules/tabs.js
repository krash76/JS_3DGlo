const tabs = () => {

  const tabMenu = document.querySelector(".service-header"); 
  const tabs = document.querySelectorAll(".service-header-tab");
  const tabContent = document.querySelectorAll(".service-tab");

  tabMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("service-header-tab")) {
      tabs.forEach((tab, index) => {
        if (tab === e.target) {
          tab.classList.add ("active");
        } else {
          tab.classList.remove("active")
        }
      })
    }
  });

  console.log(tabs);

};

export default tabs;