import AboutUsPagePhotoPicture from './photos/about-us-photo2.jpg';
import sushiLogoPicture from './photos/187463.png';

export const createAboutUsPage = () => {

    // creating left side of main
    const left = (() => {
        const left = document.createElement('div');
        left.classList.add('left');

        const AboutUsPagePhoto = document.createElement('img');
        AboutUsPagePhoto.src = AboutUsPagePhotoPicture;
        AboutUsPagePhoto.setAttribute('id', 'about-us-page-photo');
        left.appendChild(AboutUsPagePhoto);
        return left;
    })();

    const right = (() => {
        // creating restaurant name and its container
        const aboutUsRight = document.createElement('div');
        aboutUsRight.classList.add('about-us-right');

        const nameLogo = document.createElement('div')
        nameLogo.classList.add('name-logo');

        const p = document.createElement('p');
        p.setAttribute('id', 'about-us-right-name');
        p.textContent = 'Restaurant name';
        const underLine = document.createElement('hr');
        underLine.classList.add('logo-underline');
        underLine.setAttribute('id', 'about-us-underline');
        const nameContainer = document.createElement('div');
        nameContainer.append(p, underLine);

        // creating restaurant logo
        const sushiLogo = document.createElement('img');
        sushiLogo.setAttribute('id', 'sushi-logo');
        sushiLogo.src = sushiLogoPicture;
        nameLogo.append(nameContainer, sushiLogo);

        // creating right side of main, with short info + button leading to 'About us'
        const firstHeader = document.createElement('h2');
        firstHeader.classList.add('about-us-headers');
        firstHeader.textContent = 'History';

        const aboutUsRightInfo1 = document.createElement('p');
        aboutUsRightInfo1.classList.add('about-us-right-info');
        aboutUsRightInfo1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nam vero neque doloribus. Illo, culpa ducimus dolores voluptate cum reprehenderit, fugiat repudiandae nulla veritatis a, in exercitationem consectetur asperiores quas. Fuga deleniti, voluptatem aliquam libero laudantium officia ut nihil omnis vitae consequuntur!';

        const secondHeader = document.createElement('h2');
        secondHeader.classList.add('about-us-headers');
        secondHeader.textContent = 'About our cuisine';

        const aboutUsRightInfo2 = document.createElement('p');
        aboutUsRightInfo2.classList.add('about-us-right-info');
        aboutUsRightInfo2.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum tempore natus aliquid facere incidunt est quasi error laborum, sit ad, sed debitis quas autem nam pariatur minima doloremque fugit quos! Nobis iste vitae voluptatum harum omnis. Aspernatur debitis voluptatibus ipsa quidem culpa perferendis commodi ipsum delectus eveniet possimus.';
        
        aboutUsRight.append(nameLogo, firstHeader, aboutUsRightInfo1, secondHeader, aboutUsRightInfo2)
        return aboutUsRight;
    })();
    
    // creating containers and appending content
    const aboutUsMain = document.createElement('div');
    aboutUsMain.classList.add('about-us-main');
    aboutUsMain.append(left, right);
    
    // creating main container of the 'about-us' page
    const aboutUsPage = document.createElement('div');
    aboutUsPage.classList.add('about-us');
    aboutUsPage.append(aboutUsMain);

    const content = document.getElementById('content');
    content.appendChild(aboutUsPage);
    return aboutUsPage;
};
