console.log('test from landing-page');

export const createLandingPage = () => {

    // creating left side of the main page
    const left = (() => {
        const container = document.createElement('div');
        container.classList.add('container');
        const landingPagePhoto = document.createElement('img');
        landingPagePhoto.src = '../photos/chef_cut_wider.jpg';
        landingPagePhoto.setAttribute('id', 'landing-page-photo');
        container.appendChild(landingPagePhoto);

        return container;
    })();

    // creating right side of the main page
    const createRight = (() => {
        const right = document.createElement('div');
        right.classList.add('right'); 

        // creating header
        const rightHeader = (() => {
            const header = document.createElement('header');
            header.classList.add('header');
            const headerLinks = document.createElement('nav');
            headerLinks.classList.add('header-links');
            // creating header links and appending them
            const headerList = document.createElement('ul')
            headerList.classList.add('header-list');
            const liHome = document.createElement('li');
            liHome.setAttribute('id', 'landing-home-link');
            liHome.textContent = 'Home';
            const liMenu = document.createElement('li');
            liMenu.setAttribute('id', 'landing-menu-link');
            liMenu.textContent = 'Menu';
            const liAboutUs = document.createElement('li');
            liAboutUs.setAttribute('id', 'landing-about-us-link');
            liAboutUs.textContent = 'About us';
            const liContact = document.createElement('li');
            liContact.setAttribute('id', 'landing-contact-link');
            liContact.textContent = 'Contact';
            headerList.append(liHome, liMenu, liAboutUs, liContact);
            headerLinks.appendChild(headerList);
            header.appendChild(headerLinks);
            return header;
        })();
    
    
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
            sushiLogo.src = '../photos/187463.png';
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
        right.append(rightHeader, main);
        return {
        right,
        rightHeader
        };
    })();

    // appending 2 main divisions to 'landingPage' 
    // and 'landingPage' under '#content' which is the only preexisting HTML element inside body.
    const landingPage = document.createElement('div');
    landingPage.classList.add('landing');

    landingPage.append(left, createRight.right);

    const content = document.getElementById('content');
    content.appendChild(landingPage);
    return landingPage;
};
