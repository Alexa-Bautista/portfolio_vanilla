const containerProjects = document.getElementById("containerProjects");
const h3Project = document.querySelector("#containerProjects h3")
const pProject = document.querySelector("#containerProjects p")
const btnProject = document.querySelector("#containerProjects .btnAboutMe")

const containerContact = document.getElementById("containerContact")

const containerCardMovies = document.getElementById("containerCardMovies")
const h1ContainerCardMovies = document.querySelector("#containerCardMovies h1")
const pContainerCardMovies = document.querySelector("#containerCardMovies p")
const btnContainerCardMovies = document.querySelector("#containerCardMovies .btnAboutMe")
const iconsContainerCardMovies = document.querySelector("#containerCardMovies .containerIcons")







containerProjects.addEventListener("click", ()=> {
    console.log("click project");
    containerProjects.classList.add("showCardProject")
    containerProjects.classList.add("infoCardMovies")
    h3Project.style.transform="rotate(0deg)"
    h3Project.style.fontSize="var(--subtitle)"
    h3Project.style.textShadow=" rgb(0, 0, 0) 1px 0 5px"
    pProject.style.display="block"
    pProject.style.width="70%"
    pProject.style.textShadow="rgb(0, 0, 0) 1px 0 5px"
    btnProject.style.display="block"
    containerProjects.classList.add("showInfoContainerProject")

    containerContact.style.zIndex="200"
    
    containerCardMovies.classList.add("showcontainerCardMovies")
    pContainerCardMovies.style.display="none"
    btnContainerCardMovies.style.display="none"
    iconsContainerCardMovies.style.display="none"
    h1ContainerCardMovies.style.transform="rotate(270deg)"
    h1ContainerCardMovies.style.fontSize="var(--paragraph)"
    h1ContainerCardMovies.style.width="100px"
    h1ContainerCardMovies.style.marginLeft="-40px"
    h1ContainerCardMovies.style.textAlign="center"
    h1ContainerCardMovies.style.textShadow="none"




    
})

containerContact.addEventListener("click", ()=> {
    console.log("click contact");
    containerContact.style.marginLeft= "0";
})