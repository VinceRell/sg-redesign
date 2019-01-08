
class ScrollTop {
    constructor() {
        this.scrollTopBtn = document.querySelector(".scrollTop");
        this.eventHandlers();
    }

    eventHandlers() {
        window.onscroll = () => {
            if(document.body.ScrollTop > 100 || document.documentElement.scrollTop > 100) {
                this.scrollTopBtn.classList.add("display-button");
            } else {
                this.scrollTopBtn.classList.remove("display-button");
            }
        }

        this.scrollTopBtn.addEventListener("click", this.scrollToTop.bind(this));
    }

    scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
}

export default ScrollTop;