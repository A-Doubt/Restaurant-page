import { createLandingPage } from './loading-page';
import { createHeader } from './header';
import { createMenuPage } from './menu';

import { createContactPage } from './contact';

const landingPage = createLandingPage();
const header = createHeader();
const menuPage = createMenuPage();
const contactPage = createContactPage();

console.log('test from ./src/index.js');

// toggle visibility of all the sites available so far

// landingPage.classList.add('invisible');
// contactPage.classList.add('invisible');

landingPage.classList.add('invisible');
header.classList.add('visible');
menuPage.classList.add('visible');


contactPage.classList.add('invisible');