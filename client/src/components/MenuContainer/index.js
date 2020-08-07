import React, { useState } from "react";
import MenuButton from '../MenuButton';
import Menu from '../Menu';

function MenuContainer() {
  // constructor(props, context) {
  //   super(props, context);

  //   this.state = {
  //     visible: false
  //   };
    const [visible, setVisible] = useState();

    // this.toggleMenu = this.toggleMenu.bind(this);
    // this.toggleMenu = this.toggleMenu.bind(this);
  // }

  function handleMouseDown() {
    toggleMenu();
  }

  function toggleMenu() {
    setVisible(!visible);
  }

    return (
      <div className="minified-nav">

        <div className="hamburger">
        <div class="row">
        <MenuButton className="hamburger-btn" handleMouseDown={handleMouseDown} />
        <h3>Helmet</h3>
        </div>
        </div>
        <Menu handleMouseDown={handleMouseDown}
          menuVisibility={visible} />
      </div>
    )
}

export default MenuContainer;