 function HeaderList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li><a className="header-list-item">{number}</a></li>
    );
    return (
      <ul href="#" className="header-list">{listItems}</ul>
    );
  }


  function Header() {
    const headerListItems = ["Home", "Menu", "About us", "Contact us"];
  
    return(
      <header className="header container">
          <a  className="header-logo-title">Bean Scene</a>
          <HeaderList numbers={headerListItems} />
        <div className="header-auth">
            <button type="button" className="btn">Sign in</button>
            <button type="button" className="btn btn_black">Sign out</button>
            {/* <button type="button" >Sign out</button> */}
        </div>
      </header>
    )
    }
  
    export { Header };