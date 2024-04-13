class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                footer {
                    background-color: #959493;
                    color: white;
                    padding: 10px;
                    text-align: center;
                    font-weight: bolder;
                    width: 100%;
                    height: 40px;
                    bottom: 0;
                }
            </style>
            <footer>
                <p><slot>Note Apps</slot></p>
            </footer>`;
    }
}

customElements.define('custom-footer', Footer);