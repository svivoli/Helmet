import React, { useState } from 'react';

function Terms() {
    const [checked, setChecked] = useState(false);

    function handleCheck() {
        setChecked(true);
    }

    function handleClick() {
        if (checked === false) {
            alert('You must agree to the Terms of Service & Privacy Policy to proceed.');
            return;
        }
        if (checked === true) {
            document.location.href = '/signup2';
        }
    }

    return (
        <section className="terms-privacy">
            <div className="terms">
            <h4>Terms & Conditions</h4>
            <p className="terms-blurb">Please read and agree to the following Terms of Service and Privacy Policy documents before proceeding.</p>
                <p>Terms of Service <a href="#">View</a></p>
                <p>Privacy Policy <a href="#">View</a></p>
                <p><input 
                className="agree uk-checkbox" 
                type="checkbox" 
                name="agree" 
                checked={checked} 
                onClick={handleCheck}
                ></input> <label className="agree">
                  Agree*</label></p>
                <button className="next1-btn uk-button uk-button-default" onClick={handleClick}>Next</button>
            </div>
        </section>
    )
};

export default Terms;