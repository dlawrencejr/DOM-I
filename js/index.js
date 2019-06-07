const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br> Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street<br><br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//Navigation and header

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
const nav = document.querySelector('nav');
const newAnchor1 = document.createElement('a');
const newAnchor2 = document.createElement('a');
newAnchor1.textContent = 'Home';
nav.prepend(newAnchor1);
newAnchor2.textContent = 'End';
nav.appendChild(newAnchor2);
const navA = document.querySelectorAll('a');

navA.forEach((nav)=> {
  return nav.style.color = 'green'
});

navA[1].textContent = siteContent.nav['nav-item-1'];
navA[2].textContent = siteContent.nav['nav-item-2'];
navA[3].textContent = siteContent.nav['nav-item-3'];
navA[4].textContent = siteContent.nav['nav-item-4'];
navA[5].textContent = siteContent.nav['nav-item-5'];
navA[6].textContent = siteContent.nav['nav-item-6'];

//CTA

let ctaImg = document.querySelector('#cta-img')
let ctaHead = document.querySelector('.cta .cta-text h1')
let ctaBtn = document.querySelector('.cta .cta-text button')

ctaHead.innerHTML = siteContent['cta']['h1'];
ctaImg.setAttribute('src', siteContent['cta']['img-src']);
ctaBtn.textContent = siteContent['cta']['button'];

//MAIN
const mainHead = document.querySelectorAll('.main-content h4')
const mainP = document.querySelectorAll('.main-content p')
let mainImg = document.querySelector('.main-content .middle-img')
mainImg.setAttribute('src',siteContent['main-content']['middle-img-src']);
const contactInfo = document.querySelector('.contact')

mainHead[0].textContent = siteContent["main-content"]['features-h4'];
mainHead[1].textContent = siteContent["main-content"]['about-h4'];
mainHead[2].textContent = siteContent["main-content"]['services-h4'];
mainHead[3].textContent = siteContent["main-content"]['product-h4'];
mainHead[4].textContent = siteContent["main-content"]['vision-h4'];

mainP[0].textContent = siteContent['main-content']['features-content'];
mainP[1].textContent = siteContent['main-content']['about-content'];
mainP[2].textContent = siteContent['main-content']['services-content'];
mainP[3].textContent = siteContent['main-content']['product-content'];
mainP[4].textContent = siteContent['main-content']['vision-content'];


contactInfo.children[0].textContent = siteContent['contact']['contact-h4']
contactInfo.children[1].innerHTML = siteContent['contact']['address']
contactInfo.children[2].textContent = siteContent['contact']['phone']
contactInfo.children[3].textContent = siteContent['contact']['email']


//Footer

document.querySelector('footer p').textContent = siteContent['footer']['copyright'];











// console.log(ctaBtn);