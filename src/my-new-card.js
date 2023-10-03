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
        font-family: "Optima"
        }
        .card-container {
            background-color: #808080;
            width: 45%;
            margin: 50px;
            padding: 15px;
            border-radius: 15px;
        }
        .card-content img {
            max-width: 100%;
            border-radius: 5px;
        } 
        #cDescription {
    color: white;
    font-size: 18px; 
    font-family: "Optima"
    
  }

  #details-button {
    display: flex;
    border-radius: 4px ;
    background-color: whitesmoke;
    color: black;
    height: 22px ;
    width: 30%; 
    align-content: center; 
    justify-content: center;
    margin-left: 25px;
    margin-top: 50px;
    margin-bottom: 10px;
    font-family: "Optima";   
  }

  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  firstUpdated() {
    const colorBtn = this.shadowRoot.querySelector('#colorBtn');
    const titleBtn = this.shadowRoot.querySelector('#titleBtn');
    const deleteBtn = this.shadowRoot.querySelector('#deleteBtn');
    const cardTitle = this.shadowRoot.querySelector('#cardTitle');
    const cardDescription = this.shadowRoot.querySelector('#cDescription');
    const toggleDescription = this.shadowRoot.querySelector('#details-button')
    const btn = this.shadowRoot.querySelector('#btn');
    const card = this.shadowRoot.querySelector('.card-container');
    const clone = card.cloneNode(true);
    const cards = this.shadowRoot.querySelector('.cards');
    const details = this.shadowRoot.querySelector('details');
    const summary = this.shadowRoot.querySelector('summary');
    const cardContent = this.shadowRoot.querySelector('.card-content');
    const cardImage = this.shadowRoot.querySelector('img');
    const cardContainer = this.shadowRoot.querySelector('.card-container');
    const cardClone = this.shadowRoot.querySelector('.card-container');
    const cardClone2 = this.shadowRoot.querySelector('.card-container');

    

    titleBtn.addEventListener('click', () => {
      cardTitle.innerHTML = 'The Nitany Lions?';
    });
    deleteBtn.addEventListener('click', () => {
      cards.removeChild(cardClone2);
    });
    toggleDescription.addEventListener('click', () => {
      cardDescription.classList.toggle('hidden');
    });
    
    cardContent.addEventListener('click', () => {
      cardImage.classList.toggle('hidden');
    });
    summary.addEventListener('click', () => {
      cardDescription.classList.toggle('hidden');
    });

  }

  deleteCard () {
    const cardzz = this.shadowRoot.querySelectorAll('.card-container');
    if(cards.length > 1) {
      const lastcardz = cardzz[cardzz.length - 1];
      lastcardz.parentNode.removeChild(lastcardz);
    }

  }


  randomColorGenerator() {
    const cardContainer = this.shadowRoot.querySelector('.card-container');
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    cardContainer.style.backgroundColor = '#' + randomColor;
    return randomColor;
  }

  cloneCard(e) {
    const card = this.shadowRoot.querySelector('.card-container');
    const clone = card.cloneNode(true);
    this.shadowRoot.querySelector('.cards').appendChild(clone);
  }
    

  render() {
    return html`
  <button id="btn" @click="${this.cloneCard}">Clone</button>
  <button id="colorBtn" @click="${this.randomColorGenerator}">Change Color</button>
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