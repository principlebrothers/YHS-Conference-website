const toggleBtn = document.querySelector('.humburger');
const links = document.querySelector('#myNavbar');
const link = document.querySelectorAll('.link');

toggleBtn.addEventListener('click', () => {
  links.classList.toggle('active');
});

link.forEach((n) => n.addEventListener('click', () => {
  links.classList.remove('active');
}));

const speakers = [
  {
    position: 1,
    name: "Apostle Eric Nyamekye",
    personality: "Chairman of the Church of Pentecost",
    image: "./img/Apostle-Eric.jpg",
    alt: "Apostle Eric Nyamekye",
    description: "He has worked with the youth for 20 decade. He holds a doctrate degree in theology."
  },
  {
    position: 2,
    name: "Elder Prince Adjei",
    personality: "Elder of the Church of Pentecost",
    image: "./img/Elder-Prince.png",
    alt: "Elder Prince Adjei",
    description: "He has great knowledge in family life and as he is an internationally aclaimed speaker"
  },
  {
    position: 3,
    name: "Prophet Justice Lemawu",
    personality: "Doctor in Divinity",
    image: "./img/Prophet-Justice.png",
    alt: "Prophet Justice Lemawu",
    description: "He is the senior Presbyter of Christ Cosmopolitan, a church he founded whiles studying at the KTU, where he rose to fame."
  },
  {
    position: 4,
    name: "Ernest Anyewe Adonu",
    personality: "Author of some of best-selling books and a Counsellor",
    image: "./img/Ernest.png",
    alt: "Ernest Anyewe Adonu",
    description: "He he an internationally acclaimed speaker, author, Counsellor and Life coach."
  },
];

const speakersContainer = document.querySelector('.speakers-grid-container');

function createSpeakers() {
  let len = speakers.length;
  for (let i = 0; i < len; i += 1) {
    let speaker = speakers[i];

    speakersContainer.innerHTML += `
      <div class="speakers-card">
        <div class="col-1 col">
          <div class="img-container">
            <img src="${speaker.image}" alt=${speaker.alt}>
          </div>
          <div class="profile">
            <h3 class="name-of-speaker">${speaker.name}</h3>
            <p class="persona">${speaker.personality}</p>
            <p class="brief-description">${speaker.description}</p>
          </div>
        </div>
      </div>`;
  }
}

createSpeakers();
