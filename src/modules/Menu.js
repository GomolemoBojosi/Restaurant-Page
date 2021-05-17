function createMenuItem(price, name, imgSrc, alt) {
  const menuItem = document.createElement('div');
  const img = document.createElement('img');
  const itemDesc = document.createElement('h3');
  const itemPrice = document.createElement('p');
  const itemName = document.createElement('p');

  img.setAttribute('src', imgSrc);
  img.setAttribute('alt', alt);

  itemName.textContent = name;
  itemPrice.textContent = price;

  itemDesc.appendChild(itemName);
  itemDesc.appendChild(itemPrice);

  menuItem.appendChild(img);
  menuItem.appendChild(itemDesc);

  return menuItem;
}

function menu() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  menuContainer.appendChild(createMenuItem(
    'R12.00',
    'Burger-1',
    '../../dist/imgs/menu imgs/amirali-mirhashemian-jh5XyK4Rr3Y-unsplash.jpg',
    'burger-1'
  ));
  menuContainer.appendChild(createMenuItem(
    'R12.00',
    'Burger-1',
    '../../dist/imgs/menu imgs/eaters-collective-pLKgCsBOiw4-unsplash.jpg',
    'burger-1'
  ));
  menuContainer.appendChild(createMenuItem(
    'R12.00',
    'Burger-1',
    '../../dist/imgs/menu imgs/eiliv-sonas-aceron-uBigm8w_MpA-unsplash.jpg',
    'burger-1'
  ));
  menuContainer.appendChild(createMenuItem(
    'R12.00',
    'Burger-1',
    '../../dist/imgs/menu imgs/food-photographer-david-fedulov-E94j3rMcxlw-unsplash.jpg',
    'burger-1'
  ));
  menuContainer.appendChild(createMenuItem(
    'R12.00',
    'Burger-1',
    '../../dist/imgs/menu imgs/jiroe-ris5_dfbltU-unsplash.jpg',
    'burger-1'
  ));
  menuContainer.appendChild(createMenuItem(
    'R12.00',
    'Burger-1',
    '../../dist/imgs/menu imgs/joseph-abeesh-vk0SvpcFEnI-unsplash.jpg',
    'burger-1'
  ));
  menuContainer.appendChild(createMenuItem(
    'R12.00',
    'Burger-1',
    '../../dist/imgs/menu imgs/mae-mu-I7A_pHLcQK8-unsplash.jpg',
    'burger-1'
  ));
  menuContainer.appendChild(createMenuItem(
    'R12.00',
    'Burger-1',
    '../../dist/imgs/menu imgs/shaafi-ali-5qBwgjP1ZwE-unsplash.jpg',
    'burger-1'
  ));

  return menuContainer;
}

export default menu;