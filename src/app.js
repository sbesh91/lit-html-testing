class App extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log('connected')
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }

}

customElements.define('app-body', App);