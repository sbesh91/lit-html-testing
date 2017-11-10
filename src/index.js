import { html, render } from 'lit-html/lib/lit-extended';
import loader from '@webcomponents/webcomponentsjs';
import '@polymer/paper-input/paper-input.js';
import './app.js';

const body = document.querySelector("#body");
const label = 'Hello World';
let value = '';

let clickHandler = (e) => {  
  value = '';
  render(helloTemplate('Steven'), body);
}

let changeHandler = (e) => {
  value = e.target.value;
  render(helloTemplate(`Steve has typed this: ${value}`), body);
}

const helloTemplate = (text) => html`
  <div>${text}</div>    
  
  <button on-click="${(e) => clickHandler(e)}">button</button>
  
  <paper-input
    label="${label}"
    value="${value}"
    on-value-changed="${(e) => changeHandler(e)}">
  </paper-input>
  
  <app-body></app-body>
`;

render(helloTemplate('Steve'), body);