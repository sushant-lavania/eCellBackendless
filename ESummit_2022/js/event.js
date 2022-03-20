const items = document.querySelectorAll('#timeline li');

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () => {
  items.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });
};

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);

const register = (e) => {
  document.querySelector('.warplanes').classList.add('clicked');
  let id = e.target.id;

  if (id == 'registerBellwether') {
    setTimeout(() => {
      window.location.href =
        'https://dare2compete.com/competition/bellwether-the-perfect-manager-e-summit-22-netaji-subhas-university-of-technology-nsut-delhi-275108';
    }, 750);
  } else if (id == 'registerInstaseed') {
    setTimeout(() => {
      window.location.href =
        'https://dare2compete.com/competition/instaseed-10-mins-10-teams-millions-at-stake-e-summit-22-netaji-subhas-university-of-technology-nsut-delhi-275127';
    }, 750);
  } else if (id == 'registerUnravel') {
    setTimeout(() => {
      window.location.href =
        'https://dare2compete.com/competition/unravel-the-case-study-competition-e-summit-22-netaji-subhas-university-of-technology-nsut-delhi-275136';
    }, 750);
  } else if (id == 'registerBidshot') {
    setTimeout(() => {
      window.location.href =
        'https://dare2compete.com/competition/the-bid-shot-scoop-it-to-win-it-e-summit-22-netaji-subhas-university-of-technology-nsut-delhi-275130';
    }, 750);
  } else if (id == 'registerInvestopreneur') {
    setTimeout(() => {
      window.location.href =
        'https://dare2compete.com/competition/investopreneur-bid-it-to-win-it-e-summit-22-netaji-subhas-university-of-technology-nsut-delhi-275139';
    }, 750);
  } else if (id == 'registerWhatWentWrong') {
    setTimeout(() => {
      window.location.href =
        'https://dare2compete.com/competition/what-went-wrong-a-product-management-case-study-e-summit-22-netaji-subhas-university-of-technology-nsut-delh-275147';
    }, 750);
  }
};
document.querySelector('.register-btn').addEventListener('click', register);
