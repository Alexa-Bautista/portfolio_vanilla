// project container variables
const containerProjects = document.getElementById("containerProjects");
const h3Project = document.querySelector("#containerProjects h3")
const pProject = document.querySelector("#containerProjects p")
const btnProject = document.querySelector("#containerProjects .btnAboutMe")

// Contact container variables
const containerContact = document.getElementById("containerContact")
const h3Contact = document.querySelector("#containerContact h3")
const pContact = document.querySelector("#containerContact p")
const btnContact = document.querySelector("#containerContact .btnAboutMe")

// Card movies container varibles
const containerCardMovies = document.getElementById("containerCardMovies")
const h1ContainerCardMovies = document.querySelector("#containerCardMovies h1")
const pContainerCardMovies = document.querySelector("#containerCardMovies p")
const btnContainerCardMovies = document.querySelector("#containerCardMovies .btnAboutMe")
const iconsContainerCardMovies = document.querySelector("#containerCardMovies .containerIcons")


// Condition 




// Listener container projects
containerProjects.addEventListener("click", ()=> {

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


// Listener container contact

containerContact.addEventListener("click", ()=> {
    containerContact.classList.add("showCardProject")
    containerContact.classList.add("infoCardMovies")
    h3Contact.style.marginLeft="0"
    h3Contact.style.transform="rotate(0deg)"
    h3Contact.style.fontSize="var(--subtitle)"
    h3Contact.style.textShadow=" rgb(0, 0, 0) 1px 0 5px"
    pContact.style.display="block"
    pContact.style.width="70%"
    pContact.style.textShadow="rgb(0, 0, 0) 1px 0 5px"
    btnContact.style.display="block"
    containerContact.classList.add("showInfoContainerProject")
    
    // containerContact.style.zIndex="200"
    
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

    containerProjects.classList.add("showcontainerCardMoviesLeft")
    pProject.style.display="none"
    btnProject.style.display="none"
    h3Project.style.transform="rotate(270deg)"
    h3Project.style.fontSize="var(--paragraph)"
    h3Project.style.width="100px"
    h3Project.style.marginLeft="-40px"
    h3Project.style.textAlign="center"
    h3Project.style.textShadow="none"
    

})