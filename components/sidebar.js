const slideMenu = document.getElementById("slideMenu");

slideMenu.innerHTML = `
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
`
const closeSideBar = document.getElementById("closeSideBar")
// const sideBar =document.getElementById("sideBar");

closeSideBar.addEventListener("click", () =>{
    sideBar.classList.remove("showMenu")
})

