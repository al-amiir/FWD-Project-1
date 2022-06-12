// Content Section Data
let ContentFragment = "";
let ContentArray = [
  {
    header: "Green Trees",
    content: `    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum tempora
      facilis id perspiciatis ex esse nesciunt magnam ab quidem consequuntur!
      Illo delectus quia quasi cum, odit adipisci aliquam mollitia laborum.
      Excepturi omnis iste ab assumenda labore voluptate libero illum aperiam
      soluta id! Incidunt illo iusto a, tempora saepe vero laborum sint labore,
      repellendus sed.`,
    image: "./assets/greenTrees.jpg",
    nav: "Green",
    color: "#003e00",
  },
  {
    header: "Red Trees",
    content: `    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum tempora
      facilis id perspiciatis ex esse nesciunt magnam ab quidem consequuntur!
      Illo delectus quia quasi cum, odit adipisci aliquam mollitia laborum.
      Excepturi omnis iste ab assumenda labore voluptate libero illum aperiam
      soluta id.`,
    image: "./assets/redTrees.jpg",
    nav: "Red",
    color: "#6c0000",
  },
  {
    header: "Golden Trees",
    content: `    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum tempora
      facilis id perspiciatis ex esse nesciunt magnam ab quidem consequuntur!
      Illo delectus quia quasi cum, odit adipisci aliquam mollitia laborum.
      Excepturi omnis iste ab assumenda labore voluptate libero illum aperiam
      soluta id.`,
    image: "./assets/goldTrees.jpg",
    nav: "Golden",
    color: "#763c00",
  },
  {
    header: "Pink Trees",
    content: `    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum tempora
      facilis id perspiciatis ex esse nesciunt magnam ab quidem consequuntur!
      Illo delectus quia quasi cum, odit adipisci aliquam mollitia laborum.
      Excepturi omnis iste ab assumenda labore voluptate libero illum aperiam
      soluta id.`,
    image: "./assets/pinkTrees.jpg",
    nav: "Pink",
    color: "#a9364a",
  },
];

/////////////////////////////////////////////////////////////////////////////////
/**
 * This Function Creates Content Dynamically.
 * @param {Array} arr
 */
function ContentItems(arr) {
  arr.forEach((element, i) => {
    let dom = `
              <div id="content_items-${i}" class="content_items active" data-nav="${element.nav}">
                  <div class="content_items-text">
                      <h3> ${element.header} </h3>
                      <p> ${element.content}</p>
                  </div>
                  <img class="content_itmes-img" loading="lazy" src=${element.image} />
              </div>
          `;
    ContentFragment += dom;
  });
  // Insert Sections To It's Parent
  document.querySelector(".content_container").innerHTML = ContentFragment;
}
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Behaviour on Scroll, add "active" class to section which in view port and change backgroundImage
window.addEventListener("scroll", (event) => {
  let contentItmeTarget = document.querySelectorAll(".content_items");
  contentItmeTarget.forEach((element, i) => {
    if (
      element.getBoundingClientRect().top <= 50 &&
      element.getBoundingClientRect().top >=
        -element.getBoundingClientRect().height + 200
    ) {
      element.style.backgroundImage = `linear-gradient(180deg,black, ${ContentArray[i].color},black)`;
      element.classList.add("active");
    } else {
      element.style.backgroundImage = `linear-gradient(180deg,black, black)`;
      element.classList.remove("active");
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////

ContentItems(ContentArray);
