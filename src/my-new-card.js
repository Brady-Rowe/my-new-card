import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyNewCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--my-new-card-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
     <button id="btn">Clone</button>
  <button id="colorBtn">Change Color</button>
  <button id="titleBtn">Change Title</button>
  <button id="deleteBtn">Delete Card</button>


<div class="cards">
    <div class="card-container">
      <div class="card-content">
        <h2 id="cardTitle">Penn State College of IST</h2>
        <p>the College of IST</p>
        <img src="https://sites.psu.edu/istclub/wp-content/uploads/sites/12209/2014/08/cropped-IST.jpg" alt="Card Image">
        <div>
            <style>
        .hidden {
            display: none;
        }
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
    </style>
 </head>            
      
        </div>
      </div>
      <details>
        
      <summary id = "details-button" > Click for Details </summary>
      <p id = "cDescription" >Penn State's College of Information Sciences and Technology offers a small school community with the resources of a world-class university.</p>

      </details>
    
    </div>
  </div>

<script>
    //Defining some variables
    const button = document.querySelector("#btn");
    const colorButton = document.querySelector("#colorBtn");
    const cardContainer = document.querySelector(".card-container");
    const cardTitle = document.querySelector("#cardTitle");
    const detailsButton = document.querySelector(".details-button");
    const description = document.querySelector(".description");
    const deleteButton = document.querySelector("#deleteBtn");
    const titleButton = document.querySelector("#titleBtn");
  
    //Clone Button
    button.addEventListener("click", function (e) {
      const cardToClone = document.querySelector(".card-container");
      const cardCloned = cardToClone.cloneNode(true);
      
    cardCloned.querySelector(".details-button").addEventListener("click", function (e) {
    const description = cardCloned.querySelector(".description");
    if (description) {
    description.classList.toggle("hidden");
    }
});
      document.querySelector(".cards").appendChild(cardCloned);
    });
    //Change Color button
    colorButton.addEventListener("click", function (e) {
    
      const randomColor = getRandomColor();
      cardContainer.style.backgroundColor = randomColor;
    });
    //Change title
    cardTitle.addEventListener("click", function (e) {
   
      cardTitle.textContent = "The Nitany Lions?";
    });
    //Details Dropdown button
    detailsButton.addEventListener("click", function (e) {
     
      description.classList.toggle("hidden");
      
    });
    //Delete Card button
    deleteButton.addEventListener("click", function (e) {
      
      const cards = document.querySelectorAll(".card-container");
      if (cards.length > 1) {
        const lastCard = cards[cards.length - 1];
        lastCard.parentNode.removeChild(lastCard);
      }
    });
    //Change title button
    titleButton.addEventListener("click", function (e) {
      
      
      cardTitle.textContent = "The Nitany Lions?";
    });

    //Random color fuction
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  </script>
    `;
  }
}

customElements.define('my-new-card', MyNewCard);