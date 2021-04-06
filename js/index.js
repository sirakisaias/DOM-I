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
    "h1": "DOM Is Awesome",
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
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav section
const navSection = document.querySelectorAll("a");
//console.log(navSection);
navSection.forEach(link => {
      console.log(link.textContent);
   })

//header image 
const headerImg = document.querySelector('#cta-img')   
headerImg.setAttribute('src', 'img/header-img.png');
// another way doing it is headerImg.src = "anylinkhere"

//title
const newTitle = document.querySelector('h1');
newTitle.textContent = 'Dom Is Awesome';

//button
const newButton = document.querySelector('.cta button');
newButton.textContent = 'Get Started';


//middle image
const midImage = document.querySelector('.middle-img');   
midImage.src = 'img/mid-page-accent.jpg';

//top-content
const topFeature= document.querySelector('.top-content h4');
topFeature.textContent = 'FEATURES';
const topParagraph = document.querySelector('.text-content p');
topParagraph.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
// const topFeature2= document.querySelector('.text-content h4');
// topFeature2.textContent = 'ABOUT';



//bottom content
const bottomContent= document.querySelector('.bottom-content h4');
bottomContent.textContent = 'SERVICE';
const bottomParagraph= document.querySelector('.bottom-content p');
bottomParagraph.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


//footer
const bottomContact = document.querySelector('.contact h4');
bottomContact.textContent = 'Contact'
const address = document.querySelector('.contact p')
address.textContent = '123 Way 456 Street Somewhere, USA';

const newFooter = document.querySelector('footer');
newFooter.textContent = 'Copyright Great Idea! 2018'