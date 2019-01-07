
class MobileMenu {
    constructor() {
        this.toggleBtn = document.getElementById("toggle-button");
        this.mobileNav = document.getElementById("main-nav");
        this.headerWidth = document.getElementById("main-header");
        this.eventHandlers();
    }

    eventHandlers() {
       this.toggleBtn.addEventListener("click", () => {
           this.mobileNav.classList.toggle("open-menu");
       });
      
       window.addEventListener("resize", () => {
            if(this.headerWidth.clientWidth >= 550) {
                this.mobileNav.classList.remove("open-menu");
            }
       });
    }

}

export default MobileMenu;