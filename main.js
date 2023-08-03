//Portifolio card

const portifolioData = [
  {
    id: 1,
    name: "Tonic",
    imageName: "Snapshoot5.png",
    description1:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    description2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: "",
    technologies: ["HTML", "CSS", "Javascript", "Ruby", "Bootstrap"],
    liveLink: "http://reconfort.github.io",
    sourceLink: "https://github.com/Reconfort/reconfort.github.io",
  },
  {
    id: 2,
    name: "Multi-Post Stories",
    imageName: "Snapshoot4.png",
    description1:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    description2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: "",
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'Javascript'],
    liveLink: "http://reconfort.github.io",
    sourceLink: "https://github.com/Reconfort/reconfort.github.io",
  },
  {
    id: 3,
    name: "Facebook 360",
    imageName: "Snapshoot.png",
    description1:
      "Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    description2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: "",
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'Javascript'],
    liveLink: "http://reconfort.github.io",
    sourceLink: "https://github.com/Reconfort/reconfort.github.io",
  },
  {
    id: 4,
    name: "Uber Navigation",
    imageName: "Snapshoot2.png",
    description1:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    description2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: "",
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'Javascript'],
    liveLink: "http://reconfort.github.io",
    sourceLink: "https://github.com/Reconfort/reconfort.github.io",
  },
];

const workContainer = document.querySelector(".works");
let worksHtml = "";

portifolioData.forEach((data) => {
  worksHtml += `  <div class="work-item lg-screen">
          <img src="./media/${data.imageName}" class="work-image"/>
          <article class="work-details">
            <h2 class="work-title">${data.name}</h2>
            <ul class="work-tags">
              <li class="work-tag">CANOPY</li>
              <li class="work-tag">Back End Dev</li>
              <li class="work-tag">2015</li>
            </ul>
            <p class="work-description">
              ${data.description1}
              </p>
              <div class="work-tech-stack">
              ${data.technologies.map(tech=>{
                return `<span class="tech-tag">${tech}</span>`
              }).join('')}
            </div>

            <button class="work-link" type="button" data-work-array='${JSON.stringify(
              data
            )}'>
              <p class="link-button">See project</p>
            </button>
          </article>
        </div>`;
});

workContainer.innerHTML = worksHtml;

const Menu = document.getElementById("menus");
const closeMenu = document.querySelector(".close-btn");
const openMenu = document.querySelector(".burger");

const showNav = () => {
  Menu.style.display = "block";
};

const hideNav = () => {
  Menu.style.display = "none";
};

closeMenu.addEventListener("click", hideNav);
openMenu.addEventListener("click", showNav);

// Popup task

const seeProjectButtons = document.querySelectorAll("[data-work-array]");
if (seeProjectButtons) {
  const modal = document.querySelector(".modal");
  seeProjectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let modalHtml;
      const workArray = JSON.parse(button.getAttribute("data-work-array"));
      console.log(workArray);
      modalHtml = ` <div class="modal-container">
          <div class="head">
            <div class="left">
              <h2>${workArray.name}</h2>
              <ul>
                <li>CANOPY</li>
                <li>Back End Dev</li>
                <li>2015</li>
              </ul>
            </div>
            <button class="closePopup">
              <img src="./media/Disabled.png" alt="">
            </button>
          </div>
          <div class="contentimg">
            <img src="./media/${workArray.imageName}" alt="">
          </div>
          <div class="details">
            <p>
              <span>
                ${workArray.description1}
              </span>
              <span class="moreDetails">
                ${workArray.description2}
              </span>
            </p>
            <div class="category">
              <div class="tag">
                <span>HTML</span>
                <span>CSS</span>
                <span>Javascript</span>
                <span>Ruby</span>
                <span>Bootstrap</span>
              </div>
              <div class="link">
              <a href="${workArray.liveLink}" target="_blank">
                <button>
                  See live 
                  <img src="./media/Icon - Export.svg" alt="">
                </button>
                </a>
                <a href="${workArray.sourceLink}" target="_blank">
                <button>
                  See source 
                  <img src="./media/Icon -GitHub.png" alt="">
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>`;

      modal.classList.remove("hidden");
      modal.innerHTML = modalHtml;

      const closePopup = document.querySelector(".closePopup");
      closePopup.addEventListener("click", () => {
        modal.classList.add("hidden");
      });
    });
  });
}

// Form Validation
// Get the form and submit button element
const submitBtn = document.getElementById(‘submit-btn’);
// Add a click event listener to the submit button
submitBtn.addEventListener(‘click’, (event) => {
    // Get the email input value
    const emailInput = document.getElementById(‘email’);
    const email = emailInput.value;
    // Check if the email is in lowercase
    if (email !== email.toLowerCase()) {
        // Show the error message and prevent form submission
        const errorMessage = document.getElementById(‘error-message’);
        errorMessage.style.display = ‘block’;
        event.preventDefault();
    } else {
        // If email is in lowercase, hide the error message (if it was shown previously)
        const errorMessage = document.getElementById(‘error-message’);
        errorMessage.style.display = ‘none’;
    }
});
