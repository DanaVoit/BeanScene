import { HeaderAuth } from "./mainComponents/auth/HeaderAuth";
import { MobileMenu } from "./mainComponents/MobileMenu";


function HeaderList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li>
      <a className="header-list-item">{number}</a>
    </li>
  ));
  return (
    <ul href="#" className="header-list">
      {listItems}
    </ul>
  );
}

function Header() {
  const headerListItems = ["Home", "Menu", "About us", "Contact us"];

  return (
    <header className="header container">
      <a className="header-logo-title">Bean Scene</a>
      <HeaderList numbers={headerListItems} />
      <HeaderAuth />
      <MobileMenu/>
    </header>
  );
}

export { Header };
export {HeaderList};
