const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});


navLinks.addEventListener("click",(e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class" , "ri-menu-line");
});

// Define scroll reveal options
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    // delay: 300, // Optional: add a delay to make the reveal smoother
};

// Initialize ScrollReveal and apply it to the image in the about_container
ScrollReveal().reveal(".about_container .section_header", {
    ...scrollRevealOption,
    // You can override or add any additional options here
    reset: true, // Optional: makes the animation repeat when the element comes back into view
    
});
ScrollReveal().reveal(".about_container .section_description", {
    ...scrollRevealOption,
    // You can override or add any additional options here
    reset: true,
    delay:500,
    interval:500 // Optional: makes the animation repeat when the element comes back into view
    
});
ScrollReveal().reveal(".about_container img", {
    ...scrollRevealOption,
    // You can override or add any additional options here
    reset: true, // Optional: makes the animation repeat when the element comes back into view
    delay:1500,

});
ScrollReveal().reveal(".section_containerr .section_headerr", {
    ...scrollRevealOption,
    reset: true, // 'return' is not a valid option, 'reset' should be used to allow animations to trigger again
  });
  
  ScrollReveal().reveal(".section_containerr .section_description", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".services_card", {
    duration: 1000,
    delay: 1000,
    interval: 500,
  });
  

  const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    }
});

const instagram = document.querySelector(".instagram_flex")
Array.from(instagram.children).forEach(item =>{
    const duplicateNode = item.cloneNode(true)
    duplicateNode.setAttribute("aria-hidden",true);
    instagram.appendChild(duplicateNode);
})