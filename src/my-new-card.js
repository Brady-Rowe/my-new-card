import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyNewCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
     .cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
        }
        .card-content {
          text-align: center;
          color: white;
          display: block;
         flex-direction: column;
         align-content: center;
        font-family: "Comic Sans MS"
        }
        .card-container {
            background-color: #808080;
            width: 45%;
            margin: 8px;
            padding: 15px;
            border-radius: 10px;
        }
        .card-content img {
            max-width: 100%;
            border-radius: 10px;
        } 
        #cDescription {
    color: white;
    font-family: "Comic Sans MS"
    
  }

  #details-button {
    display: flex;
    background-color: white;
    color: #808080;
    width: 40%;
    align-items: center; 
    justify-content: center;
    margin-left: 100px;
    margin-top: 100px;
    font-family: "Comic Sans MS";    
  }

  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  firstUpdated() {
    const colorBtn = this.shadowRoot.querySelector("#colorBtn");
    const titleBtn = this.shadowRoot.querySelector("#titleBtn");
    const deleteBtn = this.shadowRoot.querySelector("#deleteBtn");
    
  }

  cloneCard(e) {
    const card = this.shadowRoot.querySelector('.card-container');
    const clone = card.cloneNode(true);
    this.shadowRoot.appendChild(clone);
  }
  

  render() {
    return html`
  <button id="btn" @click="${this.cloneCard}">Clone</button>
  <button id="colorBtn">Change Color</button>
  <button id="titleBtn">Change Title</button>
  <button id="deleteBtn">Delete Card</button>
<div class="cards">
    <div class="card-container">
      <div class="card-content">
        <h2 id="cardTitle">Penn State College of IST</h2>
        <p>the College of IST</p>
        <img src="https://sites.psu.edu/istclub/wp-content/uploads/sites/12209/2014/08/cropped-IST.jpg" alt="Card Image">
      </div>
      <details>
        
      <summary id = "details-button" > Click for Details </summary>
      <p id = "cDescription" >Penn State's College of Information Sciences and Technology offers a small school community with the resources of a world-class university.</p>

      </details>
    
    </div>
  </div>
    `;
  }
}

customElements.define('my-new-card', MyNewCard);