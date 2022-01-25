console.log('test from loading-page');

export const createLandingPage = () => {
    const content = document.getElementById('content');

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
        const header = (() => {
            const header = document.createElement('header');
            header.classList.add('header');
            const headerLinks = document.createElement('nav');
            headerLinks.classList.add('header-links');
            // creating header links and appending them
            const headerList = document.createElement('ul')
            const liHome = document.createElement('li');
            liHome.textContent = 'Home';
            const liMenu = document.createElement('li');
            liMenu.textContent = 'Menu';
            const liAboutUs = document.createElement('li');
            liAboutUs.textContent = 'About us';
            const liContact = document.createElement('li');
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
        
            const p = document.createElement('p');
            p.setAttribute('id', 'landing-right-name');
            p.textContent = 'Restaurant name';
            const sushiLogo = document.createElement('img');
            sushiLogo.setAttribute('id', 'sushi-logo');
            sushiLogo.src = '../photos/187463.png';
            nameLogo.append(p, sushiLogo);
        
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
        right.append(header, main);
        return {
            header,
            right,
        };
    })();

    // appending 2 main divisions to 'landingPage' 
    // and 'landingPage' under '#content' which is the only preexisting HTML element inside body.
    const landingPage = document.createElement('div');
    landingPage.classList.add('visible'); // adding visibility, as it's the first page to load

    landingPage.append(left, createRight.right);
    content.appendChild(landingPage);

    return createRight.header;
};
