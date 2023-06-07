const product = [
  {
    id: 0,
    image: 'img/JBL_Quantum_400_Product Image_Hero 02.png',
    title: 'JBL Quantum 400',
    price: '329',
  },
  {
    id: 1,
    image: 'img/pngimg.com - running_shoes_PNG5816 (1).png',
    title: 'Tenis Air Max Plus',
    price: '799',
  },
  {
    id: 2,
    image: 'img/pngimg.com - running_shoes_PNG5816 (1).png',
    title: 'Tenis Air Max Plus',
    price:'799',
  }
];
const categories = [...new Set(product.map((item)=>
  {return item.}))];
  let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
  var {image, title, price} = item;
  return(
    `<div class="box>`
        <div class= 'img-box'>
          <img class="images' src="${image}></img>
        </div>
      <div class="bottom'>
      <p>${title}</p>
      <h2>${price}.00</h2>`+
      '<button onclick= 'addtocart('+(i++)+')'>Add to cart </button>'+
      `</div>
      </div>`
  )
}).join(')