console.log('test from menu');
export const createMenuPage = () => {

    const nigiriDiv = document.createElement('div');
    nigiriDiv.classList.add('nigiri', 'menu-div');
    const hosomakiDiv = document.createElement('div');
    hosomakiDiv.classList.add('hosomaki-div', 'menu-div');
    const californiaMakiDiv = document.createElement('div');
    californiaMakiDiv.classList.add('california-maki', 'menu-div');
    
    (function images() {
        const left = document.createElement('div');
        left.classList.add('left');

        const nigiriImage = document.createElement('img');
        nigiriImage.classList.add('menu-image');
        nigiriImage.setAttribute('id', 'nigiri-image');
        nigiriImage.src = '../photos/nigiri-small.jpg';

        const hosomakiImage = document.createElement('img');
        hosomakiImage.classList.add('menu-image');
        hosomakiImage.setAttribute('id', 'hosomaki-image');
        hosomakiImage.src = '../photos/hosomaki-small.jpg';

        const californiaMakiImage = document.createElement('img');
        californiaMakiImage.classList.add('menu-image');
        californiaMakiImage.setAttribute('id', 'california-maki-image');
        californiaMakiImage.src = '../photos/california-maki-small.jpg';

        nigiriDiv.appendChild(nigiriImage);
        hosomakiDiv.appendChild(hosomakiImage);
        californiaMakiDiv.appendChild(californiaMakiImage);
    })();
 
    (function cards () {
        // card 1 - nigiri
        const nigiriCard = document.createElement('div');
        nigiriCard.classList.add('menu-card');
        nigiriCard.setAttribute('id', 'nigiri-card');
        const card1Title = document.createElement('h2');
        card1Title.classList.add('card-title');
        card1Title.textContent = 'Nigiri 2 pcs.';
        
        // card 1 menu positions
        const dlNigiri = document.createElement('dl')
        for (let i = 0; i < 5; i++) {
            const dt = document.createElement('dt');
            const dd = document.createElement('dd');
            switch (i) {
                case 0:
                    dt.textContent = 'Salmon';
                    dd.textContent = '4.25€';
                    break;
                case 1:
                    dt.textContent = 'Tuna';
                    dd.textContent = '4.65€';
                    break;
                case 2:
                    dt.textContent = 'Herring';
                    dd.textContent = '5.00€';
                    break;
                case 3:
                    dt.textContent = 'Avocado';
                    dd.textContent = '3.50€';
                    break;
                case 4:
                    dt.textContent = 'Yellowtail';
                    dd.textContent = '6.00€';
                    break;
            }
            dlNigiri.append(dt, dd);
        }
        
        // card 2 - hosomaki
        const hosomakiCard = document.createElement('div');
        hosomakiCard.classList.add('menu-card');
        hosomakiCard.setAttribute('id', 'hosomaki-card');
        const card2Title = document.createElement('h2');
        card2Title.classList.add('card-title');
        card2Title.textContent = 'Hosomaki 6 pcs.';

        // card 2 menu positions
        const dlHosomaki = document.createElement('dl')
        for (let i = 0; i < 5; i++) {
            const dt = document.createElement('dt');
            const dd = document.createElement('dd');
            switch (i) {
                case 0:
                    dt.textContent = 'Salmon';
                    dd.textContent = '6.60€';
                    break;
                case 1:
                    dt.textContent = 'Salmon tempura';
                    dd.textContent = '6.90€';
                    break;
                case 2:
                    dt.textContent = 'Prawn';
                    dd.textContent = '8.00€';
                    break;
                case 3:
                    dt.textContent = 'Mango';
                    dd.textContent = '5.20€';
                    break;
                case 4:
                    dt.textContent = 'Crab stick';
                    dd.textContent = '6.00€';
                    break;
            }
            dlHosomaki.append(dt, dd);
        }
        
        // card 3 - california maki
        const californiaMakiCard = document.createElement('div');
        californiaMakiCard.classList.add('menu-card');
        californiaMakiCard.setAttribute('id', 'california-maki-card');
        const card3Title = document.createElement('h2');
        card3Title.classList.add('card-title');
        card3Title.textContent = 'California Maki 6 pcs.';

        // card 3 menu positions
        const dlCaliforniaMaki = document.createElement('dl')
        for (let i = 0; i < 6; i++) {
            const dt = document.createElement('dt');
            const dd = document.createElement('dd');
            switch (i) {
                case 0:
                    dt.textContent = 'Salmon, mango, carrot, sesame oil';
                    dd.textContent = '7.20€';
                    break;
                case 1:
                    dt.textContent = 'Tuna, chive, leek, honey';
                    dd.textContent = '8.70€';
                    break;
                case 2:
                    dt.textContent = 'Prawn, avocado, ikura, sriracha';
                    dd.textContent = '9.95€';
                    break;
                case 3:
                    dt.textContent = 'Eel, Mango, oshinko, kabayaki';
                    dd.textContent = '9.20€';
                    break;
                case 4:
                    dt.textContent = 'Crab tempura, cucumber, chive';
                    dd.textContent = '7.40€';
                    break;
                case 5: 
                    dt.textContent = 'Herring, honey, Philadelphia';
                    dd.textContent = '8.00€';
                    break;
            }
            dlCaliforniaMaki.append(dt, dd);
        }

        // appedning elements
        nigiriCard.append(card1Title, dlNigiri);
        hosomakiCard.append(card2Title, dlHosomaki);
        californiaMakiCard.append(card3Title, dlCaliforniaMaki);

        nigiriDiv.appendChild(nigiriCard);
        hosomakiDiv.appendChild(hosomakiCard);
        californiaMakiDiv.appendChild(californiaMakiCard);
    })();

    // creating containers and appending content
    const menuMain = document.createElement('div');
    menuMain.classList.add('menu-main');
    menuMain.append(nigiriDiv, hosomakiDiv, californiaMakiDiv);
    //add before here
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu');
    menuPage.appendChild(menuMain);

    const content = document.getElementById('content');
    content.appendChild(menuPage);
    return menuPage;
};
