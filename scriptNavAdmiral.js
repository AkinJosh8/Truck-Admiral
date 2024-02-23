const navBtn = document.querySelector(".buttnNav")
const navLink = document.querySelector(".closeNav")

navBtn.addEventListener("click", ()=>{
    navLink.classList.toggle("closeNav")
    navLink.classList.toggle("openNav")
})