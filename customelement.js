class FooterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-footeryear",FooterElement);

class NameElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Laynol Eap";
    }
}

customElements.define("x-name",NameElement);