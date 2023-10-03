/**
 * this is for making th collaspsible work
 * #TODO
 * query select all elements with the class of collapsible
 * the add event that listens for click event and execute the function
 * that toogle or add a class
 */
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
