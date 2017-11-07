import { html, render } from 'lit-html/lib/lit-extended';
import loader from '@webcomponents/webcomponentsjs';
import app from './app.js';

let clickHandler = (e) => {
  console.log(e);
  render(helloTemplate('Steven'), document.body);
};

const helloTemplate = (name) => html`
  <div>Hello ${name}!</div>    
  <button on-click="${(e) => clickHandler(e)}">button</button>
  <app-body></app-body>
`;

render(helloTemplate('Steve'), document.body);