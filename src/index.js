import { createLandingPage } from './landing-page';
import { createHeader } from './header';
import { createMenuPage } from './menu';
import { createAboutUsPage } from './about-us';
import { createContactPage } from './contact';

const header = createHeader();
const landingPage = createLandingPage();
const menuPage = createMenuPage();
const aboutUsPage = createAboutUsPage();
const contactPage = createContactPage();

console.log('test from ./src/index.js');

// toggle visibility of all the sites available so far
header.classList.add('invisible');
menuPage.classList.add('invisible');
aboutUsPage.classList.add('invisible');
contactPage.classList.add('invisible');

const landingLinks = (() => {
    // grabing the DOM
    const body = document.querySelector('body');
    const landingHomeLink = document.querySelector('#landing-home-link');
    const landingMenuLink = landingHomeLink.nextSibling;
    const landingAboutUsLink = landingMenuLink.nextSibling;
    const landingContactLink = landingAboutUsLink.nextSibling;

    landingMenuLink.addEventListener('click', switchToMenu);
    function switchToMenu() {
        landingPage.classList.add('invisible');
        header.classList.remove('invisible');
        menuPage.classList.remove('invisible');
        body.style.overflowY = 'auto';
    }

    landingAboutUsLink.addEventListener('click', switchToAboutUs);
    function switchToAboutUs() {
        landingPage.classList.add('invisible');
        header.classList.remove('invisible');
        aboutUsPage.classList.remove('invisible');
        body.style.overflowY = 'hidden';
    }

    landingContactLink.addEventListener('click', switchToContact);
    function switchToContact() {
        landingPage.classList.add('invisible');
        header.classList.remove('invisible');
        contactPage.classList.remove('invisible');
        body.style.overflowY = 'hidden';
    }
})();

const headerLinks = (() => {
    const body = document.querySelector('body');
    const headerHomeLink = document.querySelector('#header-home-link');
    const headerMenuLink = headerHomeLink.nextSibling;
    const headerAboutUsLink = headerMenuLink.nextSibling;
    const headerContactLink = headerAboutUsLink.nextSibling;

    headerHomeLink.addEventListener('click', switchToLanding);
    function switchToLanding() {
        landingPage.classList.remove('invisible');
        header.classList.add('invisible');
        menuPage.classList.add('invisible');
        aboutUsPage.classList.add('invisible');
        contactPage.classList.add('invisible');
        body.style.overflowY = 'hidden';
    }

    headerMenuLink.addEventListener('click', switchToMenu);
    function switchToMenu() {
        menuPage.classList.remove('invisible');
        aboutUsPage.classList.add('invisible');
        contactPage.classList.add('invisible');
        body.style.overflowY = 'auto';
    }

    headerAboutUsLink.addEventListener('click', switchToAboutUs);
    function switchToAboutUs() {
        menuPage.classList.add('invisible');
        aboutUsPage.classList.remove('invisible');
        contactPage.classList.add('invisible');
        body.style.overflowY = 'hidden';
    }

    headerContactLink.addEventListener('click', switchToContact);
    function switchToContact() {
        menuPage.classList.add('invisible');
        aboutUsPage.classList.add('invisible');
        contactPage.classList.remove('invisible');
        body.style.overflowY = 'hidden';
    }
})();

