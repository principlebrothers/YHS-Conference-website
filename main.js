const toggleBtn = document.querySelector('.humburger');
const links = document.querySelector('#myNavbar');
const link = document.querySelectorAll('.link');

toggleBtn.addEventListener('click', () => {
  links.classList.toggle('active');
});

link.forEach((link) => link.addEventListener('click', () => {
  links.classList.remove('active');
}));

const speakers = [
  {
    class: "eric-img",
    name: 'Apostle Eric Nyamekye',
    personality: 'Chairman of the Church of Pentecost',
    image: './img/Apostle-Eric.jpg',
    alt: 'Eric',
    description: 'He has worked with the youth for 20 decade. He holds a doctrate degree in theology.',
  },
  {
    class: "prince-img",
    name: 'Elder Prince Adjei',
    personality: 'Elder of the Church of Pentecost',
    image: './img/Elder-Prince.png',
    alt: 'Prince',
    description: 'He has great knowledge in family life and as he is an internationally aclaimed speaker',
  },
  {
    class: "justice-img",
    name: 'Prophet Justice Lemawu',
    personality: 'Doctor in Divinity',
    image: './img/Prophet-Justice.png',
    alt: 'Justice',
    description: 'He is the senior Presbyter of Christ Cosmopolitan, a church he founded whiles studying at the KTU, where he rose to fame.',
  },
  {
    class: "ernest-img",
    name: 'Ernest Anyewe Adonu',
    personality: 'Author of some of best-selling books and a Counsellor',
    image: './img/Ernest.png',
    alt: 'Ernest',
    description: 'He he an internationally acclaimed speaker, author, Counsellor and Life coach.',
  },
  {
    class: "abel-img",
    name: 'Dr. Abel Damina',
    personality: 'Pastor of Power City International and a prolific author',
    image: './img/Abel-Damina.png',
    alt: 'Abel',
    description: 'Dr. Abel has won so many awards of ecclesiastical excellence around the world. He is also a writer with so many wonderful books to his credit',
  },
  {
    class: "chris-img",
    name: 'Pastor Chris Oyakhilome',
    personality: 'Pastor of Christ Embassy, a Counsellor and an Author',
    image: './img/Pastor-Chris.jpg',
    alt: 'Chris',
    description: 'Pastor\'s ministry holds meetings in the United Kingdom, the United States,Ghana and South Africa, and has "healing school" sessions in South Africa, Lagos and Canada.',
  },
];

const speakersContainer = document.querySelector('.speakers-grid-container');

function createSpeakers() {
  const len = speakers.length;
  for (let i = 0; i < len; i += 1) {
    const speaker = speakers[i];

    speakersContainer.innerHTML += `
      <div class="speakers-card">
        <div class="col-1 col">
          <div class="img-container">
            <img class= ${speaker.class} src="${speaker.image}" alt=${speaker.alt}>
            <div class="chess-bg"></div>
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
