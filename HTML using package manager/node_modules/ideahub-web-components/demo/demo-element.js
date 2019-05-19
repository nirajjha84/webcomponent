import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '../ideahub-icon-toggle.js';

class DemoElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          font-family: sans-serif;
          --ideahub-icon-toggle-color: lightgrey;
          --ideahub-icon-toggle-outline-color: black;
          --ideahub-icon-toggle-pressed-color: red;
        }
      </style>
      
      <h3>Statically-configured icon-toggles</h3>
      <ideahub-icon-toggle toggle-icon="star"></ideahub-icon-toggle>
      <ideahub-icon-toggle toggle-icon="star" pressed></ideahub-icon-toggle>
        
      <h3>Data-bound icon-toggle</h3>
      <!-- use a computed binding to generate the message -->
      <div><span>[[_message(isFav)]]</span></div>
      <!-- curly brackets ({{}}} allow two-way binding --> 
      <ideahub-icon-toggle toggle-icon="favorite" pressed="{{isFav}}"></ideahub-icon-toggle>
    `;
  }
  _message(fav) {
    if (fav) {
      return 'You really like me!';
    } 
    else {
      return 'Do you like me?';
    }
  }
}
customElements.define('demo-element', DemoElement);
