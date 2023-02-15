// // import {cart} from "./cart.json";
// const cart = [
//   {
//     "image": "https://i.ibb.co/qk3WZzd/bouquet-cart1.png",
//     "name": "Ніжна свіжість",
//     "flovers": "троянди та лілії",
//     "price": 445
//   },
//   {
//     "image": "https://i.ibb.co/kSqMtYg/bouquet-cart2.png",
//     "name": "Сорбет",
//     "flovers": "хризантеми та троянди",
//     "price": 450
//   },
//   {
//     "image": "https://i.ibb.co/P9mTcQT/bouquet-cart3.png",
//     "name": "Yellow song",
//     "flovers": "соняшники та солідаго",
//     "price": 455
//   },
//   {
//     "image": "https://i.ibb.co/M8NL0gT/bouquet-cart4.png",
//     "name": "Персиковий нектар",
//     "flovers": "лілії та троянди",
//     "price": 455
//   },
//   {
//     "image": "https://i.ibb.co/LYMJ9mc/bouquet-cart5.png",
//     "name": "Аврора",
//     "flovers": "лілії та троянди",
//     "price": 460
//   },
//   {
//     "image": "https://i.ibb.co/Y7jdbq5/bouquet-cart6.png",
//     "name": "Класика кохання",
//     "flovers": "червоні троянди",
//     "price": 465
//   }
// ]
// function CartList(props) {
 
//   const listItems = props.map((cart) =>
//     <li key={cart.id} className="cart-item">
//         <h3 className="cart-item-title">{cart.name}</h3>
//         <p className="cart-item-composition">{cart.flover}</p>
//         <p className="cart-item-price">${cart.price}</p>
//         <button className="btn"></button>
      
      
//     </li>
//   );
//   return (
//     <ul href="#" className="cart">{listItems}</ul>
//   );
// }


// function Cart() {

//   return(
//     <section className="container">
//       <h2 className="section-title"></h2>
//       <CartList    />
       
//     </section>
//   )
   
// }

//   export { Cart };