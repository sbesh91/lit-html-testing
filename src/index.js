import { html, render } from 'lit-html/lib/lit-extended';
// import page from 'page';
// import loader from '@webcomponents/webcomponentsjs';

let clickHandler = (e) => {
  render(helloTemplate('Steven'), document.body);
};

const helloTemplate = (name) => html`
  <div>Hello ${name}!</div>  
  <button on-click="${(e) => clickHandler(e)}">button</button>
`;

render(helloTemplate('Steve'), document.body);