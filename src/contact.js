console.log ('test from contact3');

export const createContactPage = () => {
    const content = document.getElementById('content');

    const header = (() => {
        // main header and left + right headers
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
        return header;
    })();

    // create main part of 'contact' page
    const contactMain = (() => {
        const contactMain = document.createElement('div');
        contactMain.classList.add('contact-main');

        // create left side of main
        const left = (() => {
            const left = document.createElement('div');
            left.classList.add('left');

            // create and append google map with location (within left)
            (function createMap () { 
                const mapContainer = document.createElement('div');
                mapContainer.setAttribute('id', 'map-container');
                const map = document.createElement('iframe');
                map.src ='https://maps.google.com/maps?q=ul.%20piastowska%20142%20Gda%C5%84sk&t=&z=13&ie=UTF8&iwloc=&output=embed';
                map.setAttribute('id', 'map');
                mapContainer.appendChild(map);
                left.appendChild(mapContainer);
            })();

            return left;
        })();

        const right = (() => {
            const right = document.createElement('div');
            right.classList.add('right');
            const contactCard = document.createElement('div');
            contactCard.classList.add('contact-card');

            const restaurantName = document.createElement('h2');
            restaurantName.classList.add('restaurant-name');
            restaurantName.setAttribute('id', 'white');
            restaurantName.textContent = 'Restaurant name';
            const underLine = document.createElement('hr');
            underLine.classList.add('logo-underline');
            underLine.setAttribute('id', 'logo-underline-address');
            

            const addressInfo = document.createElement('div');
            addressInfo.setAttribute('id', 'address-info');

            const addressList = document.createElement('ul');
            addressList.setAttribute('id', 'address-list');
            const addressLine1 = document.createElement('li');
            const addressLine2 = document.createElement('li');
            const addressLine3 = document.createElement('li');
            const addressLine4 = document.createElement('li');
            addressLine1.textContent = 'ul. Piastowska 142';
            const pinIcon = document.createElement('img');
            pinIcon.setAttribute('id', 'pin-icon');
            pinIcon.src = '../photos/pin-icon.png';
            const telephoneIcon = document.createElement('img');
            telephoneIcon.setAttribute('id', 'telephone-icon');
            telephoneIcon.src = '../photos/telephone-icon.png';


            addressLine2.textContent = '80-358, Gdańsk';
            addressLine3.textContent = 'Poland';
            addressLine4.textContent = 'Phone number:  0048 123-456-789';

            addressLine1.appendChild(pinIcon);
            addressLine4.appendChild(telephoneIcon);

            addressLine1.setAttribute('id', 'address-line-with-logo');
            addressLine2.setAttribute('id', 'address-line-without-logo');
            addressLine3.setAttribute('id', 'address-line-without-logo');
            addressLine4.setAttribute('id', 'address-line-with-logo');
            
            const sushiLogo = document.createElement('img');
            sushiLogo.classList.add('sushi-logo-contact');
            sushiLogo.setAttribute('id', 'sushi-logo-contact-card');
            sushiLogo.src = '../photos/187463.png';

            addressList.append(addressLine1, addressLine2, addressLine3, addressLine4, sushiLogo);

            addressInfo.appendChild(addressList);
            contactCard.append(restaurantName, underLine, addressInfo);
            right.append(contactCard);
            return right;
        })();

        contactMain.append(left, right)
        return contactMain;
    })();
    
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact');
    contactPage.append(header, contactMain);

    content.appendChild(contactPage);
    return contactPage;
};