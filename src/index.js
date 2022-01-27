import {createLandingPage} from './loading-page';
import {createContactPage} from './contact';

const landingPage = createLandingPage();
const contactPage = createContactPage();

console.log('test from ./src/index.js');

landingPage.classList.add('visible');
contactPage.classList.add('visible');