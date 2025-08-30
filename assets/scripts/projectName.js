//  set window scrool

//  @@@@@@@@@        handle this

// window.addEventListener("scroll", function () {
//   body.scrollIntoView({ behavior: "smooth" });
// });

// set switch mode

const mode = document.querySelector(".mode");
const btnMode = document.querySelectorAll(".mode span");
const links = document.querySelectorAll("a.link");
const body = document.body;
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const nav = document.querySelector(".nav");
const main = document.querySelector(".main");

const titleHome = document.querySelector(".title");
const sup = document.querySelector(".title sup");
const animatedSpan = document.querySelector(".home-span");

// set function
mode.addEventListener("click", function (e) {
  for (const span of btnMode) {
    if (span.getAttribute("class") === "move") {
      span.setAttribute("class", "move1");
      header.classList.toggle("black");
      main.classList.toggle("black");
      nav.classList.toggle("black");
      footer.classList.toggle("black");
      //   for toggle mode
      if (titleHome.classList.contains("black")) {
        titleHome.classList.remove("black");
        titleHome.classList.add("white");
        animatedSpan.classList.add("white");
        animatedSpan.classList.remove("black");
        sup.classList.add("black");
        sup.classList.remove("white");
      } else {
        titleHome.classList.remove("white");
        titleHome.classList.add("black");
        animatedSpan.classList.add("black");
        animatedSpan.classList.remove("white");
        sup.classList.add("white");
        sup.classList.remove("black");
      }
    } else {
      span.setAttribute("class", "move");
    }
  }
});
// set active for navbar links
const navLinks = document.querySelectorAll(".itemNav .link");
navLinks.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    navLinks.forEach((ele) => {
      ele.classList.remove("active");
    });
    ele.classList.add("active");
  });
});

// set borger nav

const btnBurger = document.querySelector(".toggle-nav");
const icons = document.querySelectorAll(".toggle-nav i");
const navBurger = document.querySelector(".list-items");

btnBurger.addEventListener("click", function () {
  navBurger.classList.toggle("translate");
  icons.forEach((icon) => icon.classList.toggle("show"));
});

//  set form translate
const btnSignIn = document.querySelector(".btn-sign");
const photoCover = document.querySelector(".photo-cover");
const containerForm = document.querySelector(".container-form");

btnSignIn.addEventListener("click", moveIn);
function moveIn() {
  photoCover.classList.toggle("left");
  photoCover.classList.contains("left")
    ? (btnSignIn.textContent = "Log In")
    : (btnSignIn.textContent = "Sign In");
}
// set portfolio navigation

const navPortfolio = document.querySelectorAll(
  ".container-portfolio .item a.link"
);
const boxPortfolio = document.querySelectorAll(".box-project");

navPortfolio.forEach((link) => {
  link.addEventListener("click", () => {
    // set animation
    const dataName = link.getAttribute("data-name");
    boxPortfolio.forEach((box) => {
      const match =
        dataName === "all" || box.getAttribute("data-cat") === dataName;
      match ? box.classList.remove("hide") : box.classList.add("hide");
    });

    // set active
    navPortfolio.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// set  portfolio box modal
const boxModal = document.querySelector(".box-modal");
const readMore = document.querySelectorAll(".more");
const closeModal = document.querySelector(".close-modal");

// console.log(boxModal ,readMore);
readMore.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    console.log(e.target.parentNode.parentNode.getAttribute("data-cat"));
    boxModal.style.display = "block";
    boxModal.style.backgroundColor = "rgba(0, 0, 0, 0.51)";
  });
});
// close modal

closeModal.addEventListener("click", function (e) {
  boxModal.style.display = "none";
});

//   set scrool width page
const scroolPage = document.querySelector(".scrooling");
window.addEventListener("scroll", function () {
  const newWidht = `${
    (window.scrollY * 100) / (body.scrollHeight - window.innerHeight)
  }%`;
  scroolPage.setAttribute("data-width", window.scrollY);
  scroolPage.style.width = `${newWidht}`;
});

//   set scrool to top
const btnToTop = document.querySelector(".to-top");
window.addEventListener("scroll", createScrollToTop);
btnToTop.addEventListener("click", goToTop);

function createScrollToTop() {
  window.scrollY >= 400
    ? (btnToTop.style.display = "flex")
    : (btnToTop.style.display = "none");
}
function goToTop() {
  window.scrollTo(0, 0);
}

// set animation title home section

const jobs = Array.from(document.querySelectorAll(".feature-job p "));
let currentIndex = 0;
setInterval(function () {
  jobs.forEach((element) => {
    element.classList.remove("active");
  });
  jobs[currentIndex].classList.add("active");
  currentIndex = (currentIndex + 1) % jobs.length;
}, 4000);

// set section about
const jobTitle = document.querySelectorAll(".job h5");
const job = document.querySelectorAll(".job");
const contentJob = document.querySelectorAll(".content-job");

job.forEach((element) => {
  element.addEventListener("click", function (e) {
    const data = this.getAttribute("data-job");

    job.forEach((element) => {
      element.style.flexGrow = 0;
    });
    this.style.flexGrow = 1;

    if (element.getAttribute("style")) {
      progressBar.forEach((element) => {
        animateWidth();
      });
    } 
    Array.from(contentJob).forEach((element) => {
      element.classList.remove("hide");
      data === element.getAttribute("data-job")
        ? element.classList.remove("hide")
        : element.classList.add("hide");
    });
  });
});

// set width for progress bar
const progressBar = document.querySelectorAll(".progress-bar");

function animateWidth() {
  setInterval(() => {
    progressBar.forEach((element) => {
      const newWidth = `${element.getAttribute("data-complite")}%`;
      element.children[0].style.width = newWidth;
    });
  }, 1000);
}

// set button submit for download CV

const btnCv = document.querySelector(".btn-cv");
btnCv.addEventListener("click", downCV);
function downCV() {
  const link = document.createElement("a");
  link.href = "/CV.txt";
  link.download = "My-CV.txt";
  link.click();
}

// set input in focus 
const inputs = document.querySelectorAll('input')
inputs.forEach(input =>{
  input.addEventListener('focus',function(){
    input.innerHTML = ''
  })

})
