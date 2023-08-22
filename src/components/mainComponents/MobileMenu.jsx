import { HeaderList } from "../Header";
import { HeaderAuth } from "./auth/HeaderAuth";
import { useState } from "react";

function MobileMenu() {
  const headerListItems = ["Home", "Menu", "About us", "Contact us"];
  const [menuOpen, openMenu] = useState(false);

  const clickOpenMenu = (event) => {
    openMenu(true);
  };
  const closeOpenMenu = (event) => {
    openMenu(false);
  };

  return (
    <div>
      <label onClick={clickOpenMenu} class="menu-btn">
        <span></span>
      </label>

      {menuOpen && (
        <div className="overlay">
          <div className="mobile-menu">
            <HeaderList numbers={headerListItems} />
            <HeaderAuth/>
            <button className="form-sign-close" onClick={closeOpenMenu}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export { MobileMenu };
