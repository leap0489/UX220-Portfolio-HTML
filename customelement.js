class FooterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-footeryear",FooterElement);

class BlueElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`<div style="color:#66ADFF">${this.innerHTML}</div>
        `;
    }
}

customElements.define("x-blue", BlueElement);