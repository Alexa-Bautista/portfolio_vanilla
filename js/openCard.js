// project container variables
const containerProjects = document.getElementById("containerProjects");
const h3Project = document.querySelector("#containerProjects h3");
const pProject = document.querySelector("#containerProjects p");
const btnProject = document.querySelector("#containerProjects .btnAboutMe");

// Contact container variables
const containerContact = document.getElementById("containerContact");
const h3Contact = document.querySelector("#containerContact h3");
const pContact = document.querySelector("#containerContact p");
const btnContact = document.querySelector("#containerContact .btnAboutMe");

// Card movies container varibles
const containerCardMovies = document.getElementById("containerCardMovies");
const h2ContainerCardMovies = document.querySelector("#containerCardMovies h2");
const pContainerCardMovies = document.querySelector("#containerCardMovies p");
const btnContainerCardMovies = document.querySelector(
  "#containerCardMovies .btnAboutMe"
);
const iconsContainerCardMovies = document.querySelector(
  "#containerCardMovies .containerIcons"
);

// Listener container projects
containerProjects.addEventListener("click", () => {
  containerProjects.classList.add("infoCardMovies");
  containerProjects.classList.add("showCardProject");
  containerProjects.classList.add("showInfoContainerProject");

  containerProjects.classList.remove("showcontainerCardMoviesLeft");

  containerProjects.style.zIndex = "0";
  h3Project.style.transform = "rotate(0deg)";
  h3Project.style.fontSize = "var(--subtitle)";
  h3Project.style.textShadow = " rgb(0, 0, 0) 1px 0 5px";
  h3Project.style.marginLeft = "0px";
  pProject.style.display = "block";
  pProject.style.width = "70%";
  pProject.style.textShadow = "rgb(0, 0, 0) 1px 0 5px";
  btnProject.style.display = "block";

  containerContact.classList.add("showcontainerCardMoviesLeft");
  containerContact.style.zIndex = "200";
  pContact.style.display = "none";
  btnContact.style.display = "none";
  h3Contact.style.transform = "rotate(270deg)";
  h3Contact.style.fontSize = "var(--paragraph)";
  h3Project.style.width = "100px";
  h3Contact.style.marginLeft = "-40px";
  h3Contact.style.textAlign = "center";
  h3Contact.style.textShadow = "none";

  containerCardMovies.classList.add("showcontainerCardMovies");
  containerCardMovies.style.borderRadius = "20px 0 0 20px";
  containerCardMovies.style.zIndex = "300";
  pContainerCardMovies.style.display = "none";
  btnContainerCardMovies.style.display = "none";
  iconsContainerCardMovies.style.display = "none";
  h2ContainerCardMovies.style.transform = "rotate(270deg)";
  h2ContainerCardMovies.style.fontSize = "var(--paragraph)";
  h2ContainerCardMovies.style.width = "100px";
  h2ContainerCardMovies.style.marginLeft = "-40px";
  h2ContainerCardMovies.style.textAlign = "center";
  h2ContainerCardMovies.style.textShadow = "none";
});

// Listener container contact
containerContact.addEventListener("click", () => {
  containerContact.classList.add("showCardProject");
  containerContact.classList.add("infoCardMovies");
  containerContact.classList.add("showInfoContainerProject");

  containerContact.classList.remove("showcontainerCardMoviesLeft");
  containerContact.classList.remove("showcontainerCardMovies");

  containerContact.style.zIndex = "0";
  h3Contact.style.marginLeft = "0";
  h3Contact.style.transform = "rotate(0deg)";
  h3Contact.style.fontSize = "var(--subtitle)";
  h3Contact.style.textShadow = " rgb(0, 0, 0) 1px 0 5px";
  pContact.style.display = "block";
  pContact.style.width = "70%";
  pContact.style.textShadow = "rgb(0, 0, 0) 1px 0 5px";
  btnContact.style.display = "block";

  containerProjects.classList.add("showcontainerCardMoviesLeft");
  containerProjects.style.zIndex = "100";
  pProject.style.display = "none";
  btnProject.style.display = "none";
  h3Project.style.transform = "rotate(270deg)";
  h3Project.style.fontSize = "var(--paragraph)";
  h3Project.style.width = "100px";
  h3Project.style.marginLeft = "-40px";
  h3Project.style.textAlign = "center";
  h3Project.style.textShadow = "none";

  containerCardMovies.classList.add("showcontainerCardMovies");
  containerCardMovies.style.zIndex = "200";
  pContainerCardMovies.style.display = "none";
  btnContainerCardMovies.style.display = "none";
  iconsContainerCardMovies.style.display = "none";
  h2ContainerCardMovies.style.transform = "rotate(270deg)";
  h2ContainerCardMovies.style.fontSize = "var(--paragraph)";
  h2ContainerCardMovies.style.width = "100px";
  h2ContainerCardMovies.style.marginLeft = "-40px";
  h2ContainerCardMovies.style.textAlign = "center";
  h2ContainerCardMovies.style.textShadow = "none";
  containerCardMovies.style.borderRadius = "20px 0 0 20px";
});

containerCardMovies.addEventListener("click", () => {
  containerCardMovies.classList.remove("showcontainerCardMovies");
  containerCardMovies.style.zIndex = "0";
  containerCardMovies.style.borderRadius = "0 20px 20px 0";
  pContainerCardMovies.style.display = "block";
  btnContainerCardMovies.style.display = "block";
  iconsContainerCardMovies.style.display = "block";
  h2ContainerCardMovies.style.transform = "rotate(0deg)";
  h2ContainerCardMovies.style.fontSize = "var(--subtitle)";
  h2ContainerCardMovies.style.width = "auto";
  h2ContainerCardMovies.style.marginLeft = "0px";
  h2ContainerCardMovies.style.textAlign = "center";
  h2ContainerCardMovies.style.textShadow = "rgb(0, 0, 0) 1px 0 5px";

  containerProjects.classList.add("showcontainerCardMoviesLeft");
  containerProjects.style.zIndex = "100";
  pProject.style.display = "none";
  btnProject.style.display = "none";
  h3Project.style.transform = "rotate(270deg)";
  h3Project.style.fontSize = "var(--paragraph)";
  h3Project.style.width = "100px";
  h3Project.style.marginLeft = "-40px";
  h3Project.style.textAlign = "center";
  h3Project.style.textShadow = "none";

  containerContact.classList.add("showcontainerCardMovies");
  containerContact.classList.remove("showcontainerCardMoviesLeft");

  containerContact.classList.remove("h3");

  containerContact.style.zIndex = "200";
  pContact.style.display = "none";
  btnContact.style.display = "none";
  h3Contact.style.transform = "rotate(270deg)";
  h3Contact.style.fontSize = "var(--paragraph)";
  h3Contact.style.width = "100px";
  h3Contact.style.marginLeft = "-40px";
  h3Contact.style.textAlign = "center";
  h3Contact.style.textShadow = "none";
});
