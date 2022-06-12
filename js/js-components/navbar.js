/////////////////////////////////////////////////////////////////////////////////
// Navbar Section's Data
let navbarItemsFragment = document.createDocumentFragment();
let navbarItemsArray = [
  { itemName: "Green" },
  { itemName: "Red" },
  { itemName: "Golden" },
  { itemName: "Pink" },
];
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
/**
 * on click will scroll into view of content items and change style of clicked button
 * @param {item of navbarItemsArray} element
 * @param { index of navbarItemsArray} i
 */
function buttonHandlerFunction(element, i) {
  // Button Style
  let allButtons = document.querySelectorAll(".navbar_container li");
  allButtons.forEach((button) => (button.style.borderBottom = "none"));
  allButtons[i].style.borderBottom = "1px solid white";
  // Scroll To Specific Element
  document.querySelector(`#content_items-${i}`).scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
}
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
/**
 * This function creates navbar buttons in the dom
 * Buttons are dependent on content items which created in mainContent.js file
 */
function navbarItems() {
  document.querySelectorAll(".content_items").forEach((element, i) => {
    console.log(element.dataset.nav);
    let dom = document.createElement("li");
    dom.innerText = `${element.dataset.nav}`;
    // Event Listner For Every Button
    dom.addEventListener("click", () => {
      buttonHandlerFunction(element, i);
    });
    // Now Append All Buttons to Fragment
    navbarItemsFragment.append(dom);
  });
  // Append That Fragment To It's Parent
  document.querySelector(".navbar_container").append(navbarItemsFragment);
}
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Add eventListner on click on navbar hamburger button
let navbarContainer = document.querySelector(".navbar_container");
document.querySelector(".navbar_hamburger").addEventListener("click", () => {
  navbarContainer.style.height === "0px" || navbarContainer.style.height === ""
    ? (navbarContainer.style.height = "120px")
    : (navbarContainer.style.height = "0px");
});
// Check if window's innerWidth > 500
window.addEventListener("resize", () => {
  console.log(window.innerWidth);
  window.innerWidth > 500
    ? (navbarContainer.style.height = "min-content")
    : (navbarContainer.style.height = "0px");
});
/////////////////////////////////////////////////////////////////////////////////

let scrolling = false;
let navbarHover = false;
let navbar = document.querySelector(".navbar");

// When hover on navbar it will stay visible
document.querySelector(".navbar").addEventListener("mouseover", () => {
  navbarHover = true;
  navbar.style.cssText = "visibility:visible;opacity:1";
});
// When hover out of navbar it will hidden, but in case your window is offset with 100
document.querySelector(".navbar").addEventListener("mouseout", () => {
  if (window.pageYOffset <= 100) {
    navbarHover = true;
  } else {
    navbarHover = false;
  }
});

// on scrolling show navbar
window.addEventListener("scroll", (event) => {
  scrolling = true;
  if (window.pageYOffset <= 100) {
    navbarHover = true;
  } else navbarHover = false;
  navbar.style.cssText = "visibility:visible;opacity:1";
});

// on Load or reload navbar will be shown
window.addEventListener("load", () => {
  scrolling = false;
});

// Every 2s check if you not scrolling and not hover on navbar, if true then hide navbar
setInterval(() => {
  if (scrolling && !navbarHover) {
    navbar.style.cssText = "visibility:hidden;opacity:0";
    scrolling = false;
  }
}, 5000);

navbarItems();
