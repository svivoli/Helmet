import React, { Component } from "react";
 
class Menu extends Component {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    function handleClick() {
      alert("Coming Soon!");
    }

    return (
      <div id="flyoutMenu" 
           className={visibility}>
        <h2><a className="menu-title" href="/">Home</a></h2>
        <h2><a className="menu-title" href="/signup">Get Started</a></h2>
        <h2><a className="menu-title" href="/about">About</a></h2>
        <h2 onClick={handleClick}><a className="menu-title" href="/">Blog</a></h2>
      </div>
    );
  }
}
 
export default Menu;