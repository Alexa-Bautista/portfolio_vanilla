const navbar = document.getElementById("navbar")

navbar.innerHTML = `
<i id="menuHamburguer" class="bx bx-menu"></i>
<a href="/index.html"> <div class="logo">
    <div class="icon">
        <img src="/public/images/ivnova.svg" alt="">
    </div>
    <p class="ivnova">IVNOVA</p>
</div> </a>

<i class="bx bxs-volume-full"></i>
`

const menuHamburguer =document.getElementById("menuHamburguer");
const sideBar =document.getElementById("sideBar");

menuHamburguer.addEventListener("click", () =>{
    sideBar.classList.toggle("showMenu")
})





