let section = document.querySelector(".container");
let counters = document.querySelectorAll(".counter");
let speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;
    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});
 window.addEventListener("scroll",() =>{
   let scrolled = window.screenY
    console.log(scrolled)
 })