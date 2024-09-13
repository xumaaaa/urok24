const catalog = [
    {
        name: 'Nike air zoom',
        img: 'https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_363,c_limit/6a47cb7a-6cb1-4dfc-9c0d-62d550e1fb2a/nike-debuts-revolutionary-technology-with-the-air-zoom-mercurial.jpg',
        price: 250,
        oldPrice: 500,
        currency: '$',
        description: 'Какое-то описание'
    },
    {
        name: 'Adidas Predator',
        img: 'https://www.prokituk.com/media/catalog/product/cache/492fa7b0a954c582f49c6e3f2e151aab/i/g/ig7768.jpg',
        price: 500,
        oldPrice: 1000,
        currency: '$',
        description: 'Какое-то описание'
    },
    {
        name: 'Adidas F50 ',
        img: ' https://www.prokituk.com/media/catalog/product/cache/492fa7b0a954c582f49c6e3f2e151aab/a/d/adieuro28524sm_0013_ie0601.jpg',
        price: 200,
        oldPrice: 400,
        currency: '$',
        description: 'Какое-то описание'
    },
    {
        name: 'Puma Ultra',
        img: 'https://www.prokituk.com/media/catalog/product/cache/492fa7b0a954c582f49c6e3f2e151aab/u/l/ultraultimatefieryfgnew.jpg',
        price: 400,
        oldPrice: 700,
        currency: '$',
        description: 'Какое-то описание'
    },
    {
        name: 'Nike TN',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxSNyZBFKQtK-505YbetuAUXzUErdIcUcSg&s',
        price: 300,
        oldPrice: 500,
        currency: '$',
        description: 'Какое-то описание'
    },
    


]


const cards = document.querySelector('.cards')

catalog.forEach(card => {
    cards.innerHTML += `
        <div class="card">
            <img src=${card.img} alt="">
            <h3>${card.name}</h3>
            <p>${card.description}</p>
            <s>${card.oldPrice}</s>
            <h4>${card.price}</h4>
            <button>Купить</button>
        </div>
    `
})