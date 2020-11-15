// export { showSideNavbar};
const showSideNavbar = document.getElementById("openSideNav").addEventListener("click",()=>{
    const sidenavebar= document.getElementById("side-nav");
    sidenavebar.style.width="100%";
    console.log("open");
});

const hideSideNavbar = document.getElementById("closeSideNav").addEventListener("click",()=>{
    const sidenavebar= document.getElementById("side-nav");
    sidenavebar.style.width="0";
    console.log("close");
});