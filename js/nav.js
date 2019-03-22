// Created by Chase Roth/Reiss on 3/22/2019

// Need to store boolean so we know whether the nav is extended or retracted
// False is default for close
let getToggleNavStatus = false;

function toggleNav() {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarAnchors = document.querySelectorAll(".nav-sidebar a");

  // This If statement gets and sets styles for when we are extending our aside so the user can see the menu
  if (getToggleNavStatus === false) {
    // Setting the ul in the sidebar to visable
    getSidebarUl.style.visibility = "visible";
    // Setting the aside a new width
    getSidebar.style.width = "700px";
    // Setting the opacity of the anchors
    getSidebar.style.opacity = "1";

    let arrayLength = getSidebarAnchors.length;
    for (let i = 0; i < arrayLength.length; i++) {
      getSidebarAnchors[i].style.opacity = "1";
    }
    getToggleNavStatus = true;
  }
  // This if statement changes the styles for when we are closing the aside
  else if (getToggleNavStatus === true) {
    getSidebarUl.style.visibility = "hidden";
    getSidebar.style.width = "0";
    getSidebar.style.opacity = "0";

    let arrayLength = getSidebarAnchors.length;
    for (let i = 0; i < arrayLength.length; i++) {
      getSidebarAnchors[i].style.opacity = "0";
    }
    getToggleNavStatus = false;
  }
}
