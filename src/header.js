console.log('from header.js');

export const createHeader = () => {
    // main header and left + right headers
    const content = document.getElementById('content');

    const header = document.createElement('header');
    header.classList.add('header')
    const rightHeader = document.createElement('header');
    const leftHeader = document.createElement('header');
    leftHeader.classList.add('left-header');
    rightHeader.classList.add('right-header');
    header.append(leftHeader, rightHeader);

    //content within left header
    const p = document.createElement('p');
    p.classList.add('restaurant-name');
    p.textContent = 'Restaurant name';
    const underLine = document.createElement('hr');
    underLine.classList.add('logo-underline')
    underLine.setAttribute('id', 'logo-underline-header');
    p.appendChild(underLine);

    const sushiLogo = document.createElement('img');
    sushiLogo.classList.add('sushi-logo-contact');
    sushiLogo.src = '../photos/187463.png';
    leftHeader.append(sushiLogo, p);


    // content within right header
    const headerLinks = document.createElement('nav');
    headerLinks.classList.add('header-links');
    const headerList = document.createElement('ul')
    headerList.classList.add('header-list');
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
    rightHeader.appendChild(headerLinks);

    content.appendChild(header);
    return header;
};