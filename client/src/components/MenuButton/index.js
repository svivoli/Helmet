import React, { useState } from "react";
import { HamburgerButton } from 'react-hamburger-button';

function MenuButton(props) {
    const [open, setOpen] = useState(false);
    // constructor(props, context) {
    //     super(props, context);

    //     this.state = {
    //       open: false
    //     };

    //     this.handleClick = this.handleClick.bind(this);
    // }

    function handleClick() {
        setOpen(!open);
        props.handleMouseDown();
    }

    // render() {
    return (
        <HamburgerButton
            open={open}
            onClick={handleClick}
            width={18}
            height={15}
            strokeWidth={1}
            color='black'
            animationDuration={0.5}
        />
    );
    // }
}

export default MenuButton;