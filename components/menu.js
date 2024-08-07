const navbar = document.getElementById("navbar")

navbar.innerHTML = `
<i id="menuHamburguer" class="bx bx-menu"></i>
<div class="logo">
    <div class="icon">
        <img src="/public/images/ivnova.svg" alt="">
    </div>
    <p class="ivnova">IVNOVA</p>
</div>
<div class="containerSideBar" id="sideBar" >

    <div class="sideBar">
        <i id="closeSideBar" class='bx bx-x-circle'></i>
        <ul >
            <li class="borderSeparationMenu"> <a href="#">Sobre Mi</a> </li>
            <li class="borderSeparationMenu"> <a href="#">Proyectos</a> </li> 
            <li> <a href="#">Contáctame</a> </li> 
        </ul> 
    </div>
</div>

<i class="bx bxs-volume-full"></i>
`

const menuHamburguer =document.getElementById("menuHamburguer");
const sideBar =document.getElementById("sideBar");
const closeSideBar = document.getElementById("closeSideBar")


menuHamburguer.addEventListener("click", () =>{
    sideBar.classList.add("showMenu")
})

closeSideBar.addEventListener("click", () =>{
    sideBar.classList.remove("showMenu")
})