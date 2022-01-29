import chefPicture from './photos/chef_cut_wider.jpg';
import sushiLogoPicture from './photos/187463.png'
export const createLandingPage = () => {

    // creating left side of the main page
    const left = (() => {
        const container = document.createElement('div');
        container.classList.add('container');
        const landingPagePhoto = document.createElement('img');
        landingPagePhoto.src = chefPicture;
        landingPagePhoto.setAttribute('id', 'landing-page-photo');
        container.appendChild(landingPagePhoto);

        return container;
    })();

    // creating right side of the main page
    const right = (() => {
        const right = document.createElement('div');
        right.classList.add('right'); 

        // creating main
        const main = (() => {
            const main = document.createElement('main');
            const landingBody = document.createElement('div');
            landingBody.classList.add('landing-body')
            main.append(landingBody);
        
            const landingRight = document.createElement('div');
            landingRight.classList.add('landing-right');
            landingBody.appendChild(landingRight);
        
            const nameLogo = document.createElement('div')
            nameLogo.classList.add('name-logo');
        
            // creating restaurant name + underline and putting it in a container
            const p = document.createElement('p');
            p.setAttribute('id', 'landing-right-name');
            p.textContent = 'Restaurant name';
            const underLine = document.createElement('hr');
            underLine.classList.add('logo-underline');
            underLine.setAttribute('id', 'logo-underline-address');
            const nameContainer = document.createElement('div');
            nameContainer.append(p, underLine);

            // creating restaurant logo
            const sushiLogo = document.createElement('img');
            sushiLogo.setAttribute('id', 'sushi-logo');
            sushiLogo.src = sushiLogoPicture;
            nameLogo.append(nameContainer, sushiLogo);
        
            // creating right side of main, with short info + button leading to 'About us'
            const landingRightInfo = document.createElement('p');
            landingRightInfo.setAttribute('id', 'landing-right-info');
            landingRightInfo.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nam vero neque doloribus. Illo, culpa ducimus dolores voluptate cum reprehenderit, fugiat repudiandae nulla veritatis a, in exercitationem consectetur asperiores quas.';
            const landingAboutUsButton = document.createElement('button');
            landingAboutUsButton.setAttribute('id', 'landing-about-us-button');
            landingAboutUsButton.textContent = 'About Us';
    
            landingRight.append(nameLogo, landingRightInfo, landingAboutUsButton)
            return main;
        })();

        // appending 2 main classes to 'right'
        right.append(main);
        return right;
    })();

    // appending 2 main divisions to 'landingPage' 
    // and 'landingPage' under '#content' which is the only preexisting HTML element inside body.
    const landingPage = document.createElement('div');
    landingPage.classList.add('landing');

    landingPage.append(left, right);

    const content = document.getElementById('content');
    content.appendChild(landingPage);
    return landingPage;
};
