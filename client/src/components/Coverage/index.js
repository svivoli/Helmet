import React from 'react';

function Coverage() {
  function handleClick() {
    let msg = "Coming soon!";
    const line_break = "\r\n";
    msg += line_break;
    msg += "Sign up today and receive an email when our plans are finalized.";
    alert(msg);
  }

    return(
        <section className="coverage">
        <div className="row">
          <div className="blurb col-md-6 col-sm-12" data-aos="fade-right">
            <div className="break">
            </div>
            <h1>Coverage.</h1>
  
            <p>You can now insure your bike from thieves and the elements! Whether you are a racer, commuter, or
              newbie - you can protect your bike today from getting stolen or broken. Our plans give riders the
              ease of mind by knowing they are always protected with Helmet.</p>
            <p uk-margin>
              <button className="plans-btn uk-button uk-button-default" onClick={handleClick}>See Our Plans</button>
            </p>
          </div>
          <div className="coverage-right col-md-6 col-sm-12">
  
          </div>
        </div>
      </section>
    )
};

export default Coverage;