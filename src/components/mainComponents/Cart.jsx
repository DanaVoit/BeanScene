import cart from "../data/cart.json";
import { SectionHeader } from "./SectionHeader";

function CartList() {
  const cartListItems = cart.map((data) => (
    <li key={cart.id} className="cart-item">
      <div
        className="cart-item-image"
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      />
      <div className="cart-item-info">
        <h3 className="cart-item-title">{data.name}</h3>
        <p className="cart-item-composition">{data.composition}</p>
        <p className="cart-item-price">${data.price}</p>
      </div>
      <button className="btn">Order Now</button>
    </li>
  ));
  return (
    <ul href="#" className="cart">
      {cartListItems}
    </ul>
  );
}

function Cart() {
  return (
    <section className="container section">
      <SectionHeader
        title="Enjoy a new blend of coffee style"
        dscrpt="Explore all flavours of coffee with us. There is always a new cup worth experiencing"
      />
      <CartList />
    </section>
  );
}

export { Cart };
