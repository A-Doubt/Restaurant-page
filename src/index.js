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

// toggle visibility of all the but landing page
menuPage.classList.add('invisible');
aboutUsPage.classList.add('invisible');
contactPage.classList.add('invisible');

const headerLinks = (() => {
    const body = document.querySelector('body');
    const sushiLogo = document.querySelector('.sushi-logo');
    sushiLogo.addEventListener('click', switchToLanding);
    const landingAboutUsButton = document.querySelector('#landing-about-us-button');
    landingAboutUsButton.addEventListener('click', switchToAboutUs);
    const headerHomeLink = document.querySelector('#header-home-link');
    const headerMenuLink = headerHomeLink.nextSibling;
    const headerAboutUsLink = headerMenuLink.nextSibling;
    const headerContactLink = headerAboutUsLink.nextSibling;

    headerHomeLink.addEventListener('click', switchToLanding);
    function switchToLanding() {
        landingPage.classList.remove('invisible');
        menuPage.classList.add('invisible');
        aboutUsPage.classList.add('invisible');
        contactPage.classList.add('invisible');
        body.style.overflowY = 'hidden';
    }

    headerMenuLink.addEventListener('click', switchToMenu);
    function switchToMenu() {
        landingPage.classList.add('invisible');
        menuPage.classList.remove('invisible');
        aboutUsPage.classList.add('invisible');
        contactPage.classList.add('invisible');
        body.style.overflowY = 'auto';
    }

    headerAboutUsLink.addEventListener('click', switchToAboutUs);
    function switchToAboutUs() {
        landingPage.classList.add('invisible');
        menuPage.classList.add('invisible');
        aboutUsPage.classList.remove('invisible');
        contactPage.classList.add('invisible');
        body.style.overflowY = 'hidden';
    }

    headerContactLink.addEventListener('click', switchToContact);
    function switchToContact() {
        landingPage.classList.add('invisible');
        menuPage.classList.add('invisible');
        aboutUsPage.classList.add('invisible');
        contactPage.classList.remove('invisible');
        body.style.overflowY = 'hidden';
    }
})();

