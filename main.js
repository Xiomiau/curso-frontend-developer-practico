//  ---------------VARIABLES----------------
    const menuEmail = document.querySelector('.navbar-email');
    const desktopMenu = document.querySelector('.desktop-menu');

    const burguerMenu = document.querySelector('.burguerMenu');
    const menuMobile = document.querySelector('.mobile-menu');

    const cartMenu = document.querySelector('.navbar-shopping-cart');
    const showCart = document.querySelector('.product-detail');

    const cardsContainer = document.querySelector('.cards-container');

    //  ---------------MOSTRAR/OCUTAR MENU EMAIL----------------

    menuEmail.addEventListener('click', toggleDesktopMenu);
    function toggleDesktopMenu() {
        const ishowCartClosed = showCart.classList.contains('inactive');

    if (!ishowCartClosed) {
    showCart.classList.add('inactive');
    }
        desktopMenu.classList.toggle('inactive');
    }

//  -----------mostrar/ocultar menu en mobile--------------------


burguerMenu.addEventListener('click', toggleMenuMobile); 

    function toggleMenuMobile() {
    const ishowCartClosed = showCart.classList.contains('inactive');

    if (!ishowCartClosed) {
    showCart.classList.add('inactive');
    }

    {
        menuMobile.classList.toggle('inactive')
    }
}

    //  -----------mostrar/ocultar menu en desktop--------------------

    cartMenu.addEventListener('click', toggleShowCart);

    function toggleShowCart(){
    const isMenuMobileClosed = menuMobile.classList.contains('inactive');

    if (!isMenuMobileClosed) {
        menuMobile.classList.add('inactive');
    }
    
    {
        showCart.classList.toggle('inactive');
    }
}
//---------- INVENTARIO----------------------------
const inventarioList = [];
inventarioList.push(
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
inventarioList.push(
    {
        name: 'Pantalla',
        price: 220,
        image: 'https://images.samsung.com/is/image/samsung/mx-full-hd-t5300-un43t5300afxzx-frontblack-234815390?$650_519_PNG$'
    }
);
inventarioList.push(
    {
        name: 'Xbox',
        price: 620,
        image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4FkjX?ver=c092'
    }
);

function renderProducts(arr){
    for (product of inventarioList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText= '$' + product.price
        const  productName = document.createElement('p');
        productName.innerText=  product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}
renderProducts(inventarioList)