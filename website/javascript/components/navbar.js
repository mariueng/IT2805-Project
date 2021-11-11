class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            #logo-div {
                position: absolute;
                margin: auto;
                display: inline;
                padding: 15px;
            }
        </style>

        <header>
            <nav class = nav id = "navbar">
                <div id="logo-div">
                    <img src="img/edyou_letterform.png" width="50px" height="43.3px">
                    <label class = "logo">edyou</label>
                </div>
                <ul>
                    <li><a href="homepage.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                </ul>
            </nav>
        </header>

      `;
    }
  }
  
  customElements.define('header-component', Header);