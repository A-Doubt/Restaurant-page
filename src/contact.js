console.log ('test from contact3');


export const createContactPage = () => {

    // creating left side of main
    const left = (() => {
        const left = document.createElement('div');
        left.classList.add('left');

        // creating and append google map with location (within left)
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

    // creating right side of the 'contact'page
    const right = (() => {
        const right = document.createElement('div');
        right.classList.add('right');
        const contactCard = document.createElement('div');
        contactCard.classList.add('contact-card');

        // creating restaurant name h2 and underline
        const restaurantName = document.createElement('h2');
        restaurantName.classList.add('restaurant-name');
        restaurantName.setAttribute('id', 'white');
        restaurantName.textContent = 'Restaurant name';
        const underLine = document.createElement('hr');
        underLine.classList.add('logo-underline');
        underLine.setAttribute('id', 'logo-underline-address');
        
        // creating address card (container)
        const addressInfo = document.createElement('div');
        addressInfo.setAttribute('id', 'address-info');

        // creating a list of items within the card
        const addressList = document.createElement('ul');
        addressList.setAttribute('id', 'address-list');
        const addressLine1 = document.createElement('li');
        const addressLine2 = document.createElement('li');
        const addressLine3 = document.createElement('li');
        const addressLine4 = document.createElement('li');
        addressLine1.textContent = 'ul. Piastowska 142';
            // icons within the list
        const pinIcon = document.createElement('img');
        pinIcon.setAttribute('id', 'pin-icon');
        pinIcon.src = '../photos/pin-icon.png';
        const telephoneIcon = document.createElement('img');
        telephoneIcon.setAttribute('id', 'telephone-icon');
        telephoneIcon.src = '../photos/telephone-icon.png';

        // populating address and contact info
        addressLine2.textContent = '80-358, Gdańsk';
        addressLine3.textContent = 'Poland';
        addressLine4.textContent = 'Phone number:  0048 123-456-789';

        addressLine1.setAttribute('id', 'address-line-with-logo');
        addressLine2.setAttribute('id', 'address-line-without-logo');
        addressLine3.setAttribute('id', 'address-line-without-logo');
        addressLine4.setAttribute('id', 'address-line-with-logo');

        addressLine1.appendChild(pinIcon);
        addressLine4.appendChild(telephoneIcon);

        // restaurant logo below address
        const sushiLogo = document.createElement('img');
        sushiLogo.classList.add('sushi-logo-contact');
        sushiLogo.setAttribute('id', 'sushi-logo-contact-card');
        sushiLogo.src = '../photos/187463.png';

        addressList.append(addressLine1, addressLine2, addressLine3, addressLine4, sushiLogo);
        addressInfo.appendChild(addressList);
        contactCard.append(restaurantName, underLine, addressInfo);
        right.appendChild(contactCard);
        return right;
    })();


    // creating containers and appending content
    const contactMain = document.createElement('div');
    contactMain.classList.add('contact-main');
    contactMain.append(left, right);
    
    // creating main container of the 'contact' page
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact');
    contactPage.append(contactMain);

    const content = document.getElementById('content');
    content.appendChild(contactPage);
    return contactPage;
};
