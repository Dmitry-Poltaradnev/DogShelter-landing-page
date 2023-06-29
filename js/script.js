const data = [
  {
    name: "Jennifer",
    img: "assets/images/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "assets/images/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "assets/images/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "assets/images/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "assets/images/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "assets/images/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "assets/images/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "assets/images/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];
window.onload = function () {
  addCardsClickHandler();

  addBurgerClickHandler();
  if (document.querySelector(".slider")) {
    addSliderClickHandler();
    sliderContentRender();
  }
  if (document.querySelector(".pagination")) {
    addPaginationClickHandlerInitial();
    renderCurrentPaginatonPage(0);
  }
};

let burgerIcon = document.querySelector(".burger");
let menuList = document.querySelector(".menu__list");
let menuLogo = document.querySelector(".menu__logo");
let menuOverlay = document.querySelector(".menu__overlay");

const addBurgerClickHandler = () => {
  burgerIcon.addEventListener("click", toggleBurgerMenu);
};

const toggleBurgerMenu = () => {
  menuList.classList.toggle("menu__list_open");
  burgerIcon.classList.toggle("burger_open");
  menuLogo.classList.toggle("menu__logo_open");
  document.body.classList.toggle("body__no-scroll");
  menuOverlay.classList.toggle("menu__overlay_open");

  toggleOpenedMenuClickHandler();
};

const toggleOpenedMenuClickHandler = () => {
  if (burgerIcon.classList.contains("burger_open")) {
    console.log("open");
    menuOverlay.addEventListener("click", closeBurgerMenu);
  } else {
    console.log("close");
    menuOverlay.removeEventListener("click", closeBurgerMenu);
  }
};

const closeBurgerMenu = (e) => {
  let burgerClick = new Event("click");
  if (
    e.target.closest(".menu__logo") ||
    e.target.classList.contains("menu") ||
    e.target.closest("li")
  ) {
    burgerIcon.dispatchEvent(burgerClick);
  }
};

class Modal {
  constructor({
    name,
    img,
    type,
    breed,
    description,
    age,
    inoculations,
    diseases,
    parasites,
  }) {
    this.name = name;
    this.img = img;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }

  generateModal() {
    let template = "";
    let modal = document.createElement("div");
    modal.className = "modal modal_overlay";

    template += `<div class="modal__content">`;
    template += `<div class="modal__btn btn-round"><img src="assets/icons/iconCross.svg" alt="close button"></div>`;
    template += `<div class="modal__img"><img src="${this.img}" alt="pet image"></div>`;
    template += `<div class="modal__info info">`;
    template += `<div class="info__name">${this.name}</div>`;
    template += `<div class="info__type">${this.type} - ${this.breed}</div>`;
    template += `<div class="info__description">${this.description}</div>`;
    template += `<ul class="info__details details">`;
    template += `<li class="details__age details__item"><span><span class="span_bold">Age:</span> &nbsp;${this.age}</span></li>`;
    template += `<li class="details__inoculations details__item"><span><span class="span_bold">Inoculations:</span> &nbsp;${this.inoculations.join(
      ", "
    )}</span></li>`;
    template += `<li class="details__diseases details__item"><span><span class="span_bold">Diseases:</span>&nbsp;${this.diseases.join(
      ", "
    )}</span></li>`;
    template += `<li class="details__parasites details__item"><span><span class="span_bold">Parasites:</span>&nbsp;${this.parasites.join(
      ", "
    )}</span></li>`;
    template += `</ul>`;
    template += `</div>`;
    template += `</div>`;

    modal.innerHTML = template;
    return modal;
  }

  generateCard() {
    let template = "";
    let card = document.createElement("div");
    card.className = "card__content";

    template += `<div class="card__img"><img src=${this.img} alt="pet-card"></div>`;
    template += `<div class="card__title">${this.name}</div>`;
    template += `<a class="card__btn btn-border">Learn more</a>`;

    card.innerHTML = template;
    return card;
  }
}

const generateModalData = (data) => {
  let modals = [];
  data.forEach((elem) => {
    modals.push(new Modal(elem));
  });
  shuffle(modals);
  return modals;
};
let modalsArr = generateModalData(data);
modalsArr.forEach((e, i) => {
  e.id = i;
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
}

const renderCard = (arr, num) => {
  let cardsWrapper = document.querySelector(".card");
  let currentCard = arr[num];
  let currentCardGenerated = currentCard.generateCard();
  currentCardGenerated.setAttribute("id", currentCard.id);
  cardsWrapper.append(currentCardGenerated);
};
const getCleanCardsWrapper = () => {
  let cardsWrapper = document.querySelector(".card");
  cardsWrapper.innerHTML = "";
  return cardsWrapper;
};

let index = 0;
let step;
let sliderArr = modalsArr.slice();
sliderArr.push(sliderArr[0]);
const addSliderClickHandler = () => {
  let prevArrow = document.querySelector(".slider__arrow-prev");
  let nextArrow = document.querySelector(".slider__arrow-next");

  prevArrow.addEventListener("click", sliderPrev, { once: true });
  nextArrow.addEventListener("click", sliderNext, { once: true });
};
const sliderPrev = () => {
  setSliderStep();
  let dir = "left";
  moveCards(dir);
  setTimeout(sliderContentRender, 500, dir);
  setTimeout(addSliderClickHandler, 500);
};
const sliderNext = () => {
  setSliderStep();
  let dir = "right";
  moveCards(dir);
  setTimeout(sliderContentRender, 500, dir);
  setTimeout(addSliderClickHandler, 500);
};
const setSliderStep = () => {
  if (document.body.clientWidth > 1279) {
    step = 3;
  } else if (document.body.clientWidth > 767) {
    step = 2;
  } else {
    step = 1;
  }
  return step;
};

const makeArrForRender = (arr, dir) => {
  let mainArr;
  let restArr;
  let result;
  setSliderStep();
  let index = step;
  if (dir === "right") {
    mainArr = arr.slice(index + step, index + 2 * step);
    restArr = arr.slice(1, index + step).concat(arr.slice(index + 2 * step, 9));
  } else {
    mainArr = arr.slice(0, index);
    restArr = arr.slice(index, 8);
  }
  shuffle(restArr);
  shuffle(restArr);
  shuffle(restArr);
  shuffle(restArr);
  result = restArr.slice();
  mainArr.forEach((e, i) => {
    result.splice(index + i, 0, e);
  });
  result.push(result[0]);
  return result;
};

const sliderContentRender = (dir) => {
  getCleanCardsWrapper();
  sliderArr = makeArrForRender(sliderArr, dir);
  sliderArr.forEach((e, i) => {
    renderCard(sliderArr, i);
  });
  addClassSliderCard();
};
const moveCards = (dir) => {
  currentCards = document.querySelectorAll(".slider__card");
  currentCards.forEach((card) => {
    if (dir === "left") {
      card.classList.add("slider__card_moved-left");
    } else {
      card.classList.add("slider__card_moved-right");
    }
  });
};
const addClassSliderCard = () => {
  currentCards = document.querySelectorAll(".card__content");
  currentCards.forEach((card) => {
    card.classList.add("slider__card");
  });
};

let varRss = 6;

const getPaginationArray = () => {
  let resultArr = modalsArr.slice(0, 8);
  let serviceArr = modalsArr.slice(0, 8);
  let i = 0;
  while (i < varRss - 1) {
    shuffle(serviceArr);
    resultArr = resultArr.concat(serviceArr);
    ++i;
  }
  return resultArr;
};

let pagArr = getPaginationArray();
let amountOfOdjects = pagArr.length;
let lastPaginationPage = 6;
let currentPaginationPage = 0;

const btnFirst = document.querySelector(".pagination__btn_first");
const btnPrev = document.querySelector(".pagination__btn_prev");
const btnNext = document.querySelector(".pagination__btn_next");
const btnLast = document.querySelector(".pagination__btn_last");

const addPaginationClickHandlerInitial = () => {
  btnFirst.removeEventListener("click", getPaginationFirst, { once: true });
  btnPrev.removeEventListener("click", getPaginationPrev, { once: true });
  btnNext.addEventListener("click", getPaginationNext, { once: true });
  btnLast.addEventListener("click", getPaginationLast, { once: true });
};
const addPaginationClickHandlerAll = () => {
  btnFirst.addEventListener("click", getPaginationFirst, { once: true });
  btnPrev.addEventListener("click", getPaginationPrev, { once: true });
  btnNext.addEventListener("click", getPaginationNext, { once: true });
  btnLast.addEventListener("click", getPaginationLast, { once: true });
};
const addPaginationClickHandlerLast = () => {
  btnFirst.addEventListener("click", getPaginationFirst, { once: true });
  btnPrev.addEventListener("click", getPaginationPrev, { once: true });
  btnNext.removeEventListener("click", getPaginationNext, { once: true });
  btnLast.removeEventListener("click", getPaginationLast, { once: true });
};
const removePaginationClickHandlerAll = () => {
  btnFirst.removeEventListener("click", getPaginationFirst, { once: true });
  btnPrev.removeEventListener("click", getPaginationPrev, { once: true });
  btnNext.removeEventListener("click", getPaginationNext, { once: true });
  btnLast.removeEventListener("click", getPaginationLast, { once: true });
};

const getPaginationFirst = () => {
  removePaginationClickHandlerAll();

  index = getCurrentIndex();
  renderFirstPaginatonPage(index);
  addClassMovedToNext();
  setTimeout(addClassMovedToPrev, 1);
  index = 0;
  currentPaginationPage = 0;
  setTimeout(renderCurrentPaginatonPage, 500, index);

  renderCurrentPageNumber();
  renderBtnFirst();
  setTimeout(addPaginationClickHandlerInitial, 500);
};

const getPaginationPrev = () => {
  removePaginationClickHandlerAll();

  setPaginationStep();

  index = getCurrentIndex();
  renderPrevPaginatonPage(index);
  addClassMovedToNext();
  setTimeout(addClassMovedToPrev, 1);
  --currentPaginationPage;
  index = getCurrentIndex();
  setTimeout(renderCurrentPaginatonPage, 500, index);

  renderCurrentPageNumber();
  currentPaginationPage === 0 ? renderBtnFirst() : renderBtnAll();
  currentPaginationPage === 0
    ? setTimeout(addPaginationClickHandlerInitial, 500)
    : setTimeout(addPaginationClickHandlerAll, 500);
};
const getPaginationNext = () => {
  removePaginationClickHandlerAll();

  setPaginationStep();
  setLastPaginationPage();
  index = getCurrentIndex();
  renderNextPaginatonPage(index);
  setTimeout(addClassMovedToNext, 1);
  ++currentPaginationPage;
  index = getCurrentIndex();
  setTimeout(renderCurrentPaginatonPage, 500, index);

  renderCurrentPageNumber();
  currentPaginationPage === lastPaginationPage
    ? renderBtnLast()
    : renderBtnAll();
  currentPaginationPage === lastPaginationPage
    ? setTimeout(addPaginationClickHandlerLast, 500)
    : setTimeout(addPaginationClickHandlerAll, 500);
};
const getPaginationLast = () => {
  removePaginationClickHandlerAll();

  setPaginationStep();
  setLastPaginationPage();

  index = getCurrentIndex();
  renderLastPaginatonPage(index);
  setTimeout(addClassMovedToNext, 1);
  currentPaginationPage = lastPaginationPage;
  index = getCurrentIndex();
  setTimeout(renderCurrentPaginatonPage, 500, index);

  renderBtnLast();
  renderCurrentPageNumber();
  setTimeout(addPaginationClickHandlerLast, 500);
};

const addClassPaginationCard = () => {
  currentCards = document.querySelectorAll(".card__content");
  currentCards.forEach((card) => {
    card.classList.add("pagination__card");
  });
};
const addClassMovedToNext = () => {
  currentCards = document.querySelectorAll(".card__content");
  currentCards.forEach((card) => {
    card.classList.add("pagination__card_moved-to-next");
  });
};
const addClassMovedToPrev = () => {
  currentCards = document.querySelectorAll(".card__content");
  currentCards.forEach((card) => {
    card.classList.remove("pagination__card_moved-to-next");
  });
};
const setPaginationStep = () => {
  if (document.body.clientWidth > 1279) {
    step = 8;
  } else if (document.body.clientWidth > 767) {
    step = 6;
  } else {
    step = 3;
  }
  return step;
};
const setLastPaginationPage = () => {
  setPaginationStep();
  lastPaginationPage = (amountOfOdjects - (amountOfOdjects % step)) / step - 1;
};

const getCurrentIndex = () => {
  return currentPaginationPage * step;
};
const renderCurrentPageNumber = () => {
  let btnCurrentPageNumber = document.querySelector(".btn-round_active");
  btnCurrentPageNumber.innerHTML = currentPaginationPage + 1;
};
const renderBtnFirst = () => {
  btnFirst.classList.remove("btn-round");
  btnPrev.classList.remove("btn-round");
  btnFirst.classList.add("btn-round_disabled");
  btnPrev.classList.add("btn-round_disabled");

  btnNext.classList.remove("btn-round_disabled");
  btnLast.classList.remove("btn-round_disabled");
  btnNext.classList.add("btn-round");
  btnLast.classList.add("btn-round");
};
const renderBtnAll = () => {
  btnFirst.classList.remove("btn-round_disabled");
  btnPrev.classList.remove("btn-round_disabled");
  btnFirst.classList.add("btn-round");
  btnPrev.classList.add("btn-round");

  btnNext.classList.remove("btn-round_disabled");
  btnLast.classList.remove("btn-round_disabled");
  btnNext.classList.add("btn-round");
  btnLast.classList.add("btn-round");
};
const renderBtnLast = () => {
  btnFirst.classList.remove("btn-round_disabled");
  btnPrev.classList.remove("btn-round_disabled");
  btnFirst.classList.add("btn-round");
  btnPrev.classList.add("btn-round");

  btnNext.classList.remove("btn-round");
  btnLast.classList.remove("btn-round");
  btnNext.classList.add("btn-round_disabled");
  btnLast.classList.add("btn-round_disabled");
};

const renderCurrentPaginatonPage = (index) => {
  getCleanCardsWrapper();
  setPaginationStep();
  index = getCurrentIndex();
  let i = 0;
  while (i < step) {
    renderCard(pagArr, index);
    index++;
    i++;
  }
  addClassPaginationCard();
};
const renderNextPaginatonPage = (index) => {
  getCleanCardsWrapper();
  setPaginationStep();
  index = getCurrentIndex();
  let i = 0;
  while (i < step * 2) {
    renderCard(pagArr, index);
    index++;
    i++;
  }
  addClassPaginationCard();
};
const renderPrevPaginatonPage = (index) => {
  getCleanCardsWrapper();
  setPaginationStep();
  index = getCurrentIndex();
  let i = 0;
  index -= step;
  while (i < step * 2) {
    renderCard(pagArr, index);
    index++;
    i++;
  }
  addClassPaginationCard();
};
const renderFirstPaginatonPage = (index) => {
  getCleanCardsWrapper();
  setPaginationStep();
  index = getCurrentIndex();
  let i = 0;
  while (i < step) {
    renderCard(pagArr, i);
    i++;
  }
  i = 0;
  while (i < step) {
    renderCard(pagArr, index);
    index++;
    i++;
  }
  addClassPaginationCard();
};
const renderLastPaginatonPage = (index) => {
  getCleanCardsWrapper();
  setPaginationStep();
  setLastPaginationPage();
  index = getCurrentIndex();
  let i = 0;
  while (i < step) {
    renderCard(pagArr, index);
    index++;
    i++;
  }
  i = 0;
  index = lastPaginationPage * step;
  while (i < step) {
    renderCard(pagArr, index);
    index++;
    i++;
  }
  addClassPaginationCard();
};

const renderModal = (id) => {
  let modalWrapper = document.querySelector(".body");
  let currentModal = modalsArr[id];
  modalWrapper.append(currentModal.generateModal());
};

const addCardsClickHandler = () => {
  document.querySelector(".card").addEventListener("click", openModal);
};

const closeModal = (e) => {
  if (
    e.target.closest(".modal__btn") ||
    e.target.classList.contains("modal_overlay")
  ) {
    document.querySelector(".modal").remove();
    document.body.classList.remove("body__no-scroll");
  }
};

const addModalCloseClickHandler = () => {
  let modalListener = document.querySelector(".modal");
  modalListener.addEventListener("click", closeModal);
};

const openModal = (e) => {
  let clickedCard = e.target.closest(".card__content");
  if (clickedCard) {
    let id = clickedCard.getAttribute("id");
    renderModal(id);
    addModalCloseClickHandler();
    document.body.classList.add("body__no-scroll");
  }
};
