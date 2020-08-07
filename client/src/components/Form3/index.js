import React, { useState } from 'react';
import API from '../../utils/API';

function Form3() {
    const [uses, setUses] = useState([]);
    const [commuting, setCommuting] = useState();
    const [pleasure, setPleasure] = useState();
    const [exercise, setExercise] = useState();
    const [racing, setRacing] = useState();
    const [other, setOther] = useState();
    const [stolen, setStolen] = useState();
    const [clubinput, setClubinput] = useState();
    const [clubs, setClubs] = useState([]);
    const [active1, setActive1] = useState();
    const [active2, setActive2] = useState();

    function handleUsesChange(e) {
        const clicked = e.target.value;
        if ('Commuting' === clicked) {
            setCommuting('selected');
            setUses(uses_array => [...uses_array, 'Commuting']);
        }
        if ('Pleasure' === clicked) {
            setPleasure('selected');
            setUses(uses_array => [...uses_array, 'Pleasure']);
        }
        if ('Exercise' === clicked) {
            setExercise('selected');
            setUses(uses_array => [...uses_array, 'Exercise']);
        }
        if ('Racing' === clicked) {
            setRacing('selected');
            setUses(uses_array => [...uses_array, 'Racing']);
        }
        if ('Other' === clicked) {
            setOther('selected');
            setUses(uses_array => [...uses_array, 'Other']);
        }
    }
   
        // if (commuting === '') {
        //     setUses(uses_array.filter((e)=>(e !== 'Commuting')));
        // }

    function handleStolenTrue(e) {
        const clicked = e.target.id
        if (active1 === clicked) {
            setActive1('active');
            setActive2('');
            setStolen(true);
        } else {
            setActive1('')
        }
    }

    function handleStolenFalse(e) {
        const clicked = e.target.id
        if (active2 === clicked) {
            setActive2('active');
            setActive1('');
            setStolen(false)
        } else {
            setActive2('')
        }
    }

    function handleClubsChange(e) {
        setClubinput(e.target.value)
    }

    function handleClubsAdd(event) {
        event.preventDefault();
        let list_item = document.getElementsByClassName('clubs')[0].value;
        console.log(document.getElementsByClassName('clubs'))
        let club_list = document.getElementsByClassName('club-list')[0];
        let li = document.createElement('li');
        li.innerText = list_item;
        club_list.appendChild(li);
        setClubinput('');
        setClubs(club_array => [...club_array, clubinput]);
    }

    function handlePost() {
        API.createUses({
            use: uses,
            stolen: stolen,
            clubs: clubs
        })
            .then(console.log("Uses saved to database."))
            .catch(err => console.log(err));
    }

    return (
        <section className="sign-up">
            <div className="form-content">
                <div className="bike-info">
                    <h4>What do you use your bike for (primarily)?</h4>
                    <div className="uses uk-margin-large">
                        <input type="button" className={`light uk-button uk-button-default ${commuting}`} value="Commuting" onClick={handleUsesChange}></input>
                        <input type="button" className={`light uk-button uk-button-default ${pleasure}`} value="Pleasure" onClick={handleUsesChange}></input>
                        <input type="button" className={`light uk-button uk-button-default ${exercise}`} value="Exercise" onClick={handleUsesChange}></input>
                        <input type="button" className={`light uk-button uk-button-default ${racing}`} value="Racing" onClick={handleUsesChange}></input>
                        <input type="button" className={`light uk-button uk-button-default ${other}`} value="Other" onClick={handleUsesChange}></input>
                        {/* <label><input className="uk-checkbox" type="checkbox" value="Commuting" onClick={handleUsesChange}></input> Commuting</label>
                        <label><input className="uk-checkbox" type="checkbox" value="Pleasure" onClick={handleUsesChange}></input> Pleasure</label>
                        <label><input className="uk-checkbox" type="checkbox" value="Exercise" onClick={handleUsesChange}></input> Exercise</label>
                        <label><input className="uk-checkbox" type="checkbox" value="Racing" onClick={handleUsesChange}></input> Racing</label>
                        <label><input className="uk-checkbox" type="checkbox" value="All of the Above" onClick={handleUsesChange}></input> All of the above</label>
                        <label><input className="uk-checkbox" type="checkbox" value="Other" onClick={handleUsesChange}></input> Other</label> */}
                    </div>
                    <h4>Have you ever had a bike stolen?</h4>
                    <div className="row justify-content-md-center uk-margin-large">
                        <div className="up col-md-4 uk-margin-large">
                            <i className={`up far fa-thumbs-up ${active1}`} aria-hidden="true" onClick={handleStolenTrue}></i>
                        </div>
                        <div className="down col-md-4">
                            <i className={`down far fa-thumbs-down ${active2}`} aria-hidden="true" onClick={handleStolenFalse}></i>
                        </div>
                    </div>
                    <h4>List your bike clubs below</h4>
                    <div className="uk-margin">
                        <div>
                            <ul className="club-list"></ul>
                        </div>
                        <div className="row">
                            <div className="col-md-10">
                                <input className="clubs uk-input" onfocus="this.value=''" type="text" name="clubs" value={clubinput} onChange={handleClubsChange}></input>
                            </div>
                            <div className="col-md-2 uk-margin">
                                <button className="club-btn uk-button uk-button-default" onClick={handleClubsAdd}>+</button>
                            </div>
                        </div>
                    </div>
                    <a className="next3-btn uk-button uk-button-default" href="/signup4" onClick={handlePost}>Next</a>
                </div>
            </div>
        </section>
    )
};

export default Form3;