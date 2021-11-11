class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            .footer-section > h2 {
                padding-left: 29%;
                color: #FFFFFF;
            }

            .footer-section > hr {
                margin-left: 29%;
            }

            .custom-footer{
                color: #d8d8d8;
                background-color: #6D7074;
                height: 300px;
                margin-top: auto;
            }
            
            .custom-footer .footer-content {
                height: 300px;
                display: flex;
            }
            
            .custom-footer .footer-content .footer-section {
                flex: 1;
            }

            .footer-section > p {
                margin: auto;
                vertical-align: middle;
                width: 200px;
                word-wrap: break-word;
            }
        </style>
        <footer>
            <div class="custom-footer">
                <div class="footer-content">
                    <div class="footer-section">
                        <h2>edyou</h2>
                        <hr>
                        <p> edyou develops and delivers educational technology sercives for schools, teachers and students</p>
                    </div>
                    <div class="footer-section">
                        <h2>Services</h2>
                        <hr>
                        <p>Adaptive </p>
                        <p>Insight Express </p>
                        <p>Consultancy </p>
                    </div>
                    <div class="footer-section">
                        <h2>Contact</h2>
                        <hr>
                        <p> Trondheim, 7034, Norway</p>
                        <p> contact@edyou.com</p>
                        <p> +47 99 33 44 99</p>
                    </div>
                </div>
            
            </div>
        </footer>
      `;
    }
  }
  
  
  customElements.define('footer-component', Footer);