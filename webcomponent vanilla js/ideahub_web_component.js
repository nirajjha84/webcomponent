const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
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
            width: 95%;
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
    
    <div class='container'>
        <div class="feed_left"><img src='https://desktop-stvfbri:442/images/helen.jpg' /></div>
        <div class="feed_right">
            <h2><a href="#">Product name</a></h2>
            <div class="fl_lft">12345678<br />Balance: <strong>2000</strong></div>
            <div class="fl_rgt">open</div>
            <div class="clear" style="padding-bottom:5px;"></div>
        </div>
        <div class="clear"></div>
    </div>
`;

class IdeahubProducts extends HTMLElement {
    constructor() {
        super();
        // Create a shadow root
        this._shadowRoot = this.attachShadow({mode: 'open'});
        // attach the created elements to the shadow dom
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

// register custom element
customElements.define('ideahub-products', IdeahubProducts);
