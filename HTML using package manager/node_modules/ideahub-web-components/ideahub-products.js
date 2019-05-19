import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import './ideahub-icon-toggle.js';

class IdeahubProducts extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
            display: inline-block;
            font-family: IBM Plex Sans;
        }
        h2 {
            font-size:14px;
            color: blue;
            margin: 0px 0px 10px 0px;
            padding: 0px;
        }
        h2 a {
          color: blue;
          text-decoration: none;
        }
        .container {
          width: 100%;
          margin: 20px 0 20px 0px;
          border: 1px solid #ccc;
          padding: 10px;
          background-color: #fff;
          color: #000;
          text-align:left;
          font-size: 14px;
        }
        .container:hover {
          background-color: #f4f4f4;
        }
        .feed_left {
          width: 15%;
          float:left;
          margin-right: 3%;
          color: #000;
          text-align:left;
        }
        .feed_left img {
          width: 100%;
          border-radius: 50%;
        }
        .feed_right {
          width: 80%;
          padding-top: 15px;
          float:left;
          color: #000;
          text-align:left;
        }

        .fl_lft {
          float: left;
          color: #000;
          text-align:left;
        }
        .fl_rgt {
          float: right;
          color: #000;
          text-align:left;
        }
        .clear {
          clear: both;
        }
      </style>
  
      <!-- shadow DOM goes here -->
      <template is="dom-repeat" items="{{accounts}}" as="feed">
        <div class="container">
        <div class="feed_left">
          <img src={{feed.avtar}} />
        </div>
          <div class="feed_right">
            <h2><a href="#">[[feed.productname]]</a></h2>
            <div class="fl_lft">[[feed.number]]<br />Balance: <strong>[[feed.balance]]</strong></div>
            <div class="fl_rgt">[[feed.status]]</div>
            <div class="clear" style="padding-bottom:5px;"></div>
            <ideahub-icon-toggle toggle-icon="favorite"></ideahub-icon-toggle>
          </div>
          <div class="clear"></div>
        </div>
      </template>
    `;
  }

  constructor() {
    super();
  }

  static get properties() {
    return {
      accounts: {
        type: Array,
        value: [
          {
            number: "234567 1234567890",
            avtar: "https://www.w3schools.com/howto/img_avatar.png",
            productname: "Flex Plus",
            balance: "£2000",
            status: "Closed on 12 Aug 2012"
          },
          {
            number: "543535 353522442",
            avtar: "https://www.w3schools.com/howto/img_avatar2.png",
            productname: "Little Saver Plus",
            balance: "£1000",
            status: "Open"
          }
      ]
      }
    }
  }
}

customElements.define('ideahub-products', IdeahubProducts);
