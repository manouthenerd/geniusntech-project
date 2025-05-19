export const toggleMenu = () => {
  

  const toggleAction = (button, navbar, classList) => {

    let mobileNavbar = document.querySelector(navbar);
    let menuButton = document.querySelector(button);

    menuButton.addEventListener("click", () => {
      mobileNavbar.classList.remove("top-[4.5rem]");
      mobileNavbar?.classList.toggle(classList);

      console.log("Clicked !!!!")
      console.log(mobileNavbar, menuButton)
    });
  };

  return {
    toggleAction
  }
};


