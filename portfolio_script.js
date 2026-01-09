
window.onload = function () {
    window.scrollTo(0, 0);
};

function toggleMode() {
    document.body.classList.toggle("dark");
}

function submitForm(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
}

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

   
    revealSections();
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function revealSections() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;

    reveals.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}
