import React, { useState } from 'react';
import API from '../../utils/API';

function Form() {
    const [make, setMake] = useState();
    const [model, setModel] = useState();
    const [bikeYear, setBikeYear] = useState();
    const [value, setValue] = useState();

    const [often, setOften] = useState();

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

    const [first, setFirst] = useState();
    const [last, setLast] = useState();
    const [email, setEmail] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    const [zip, setZip] = useState();

    function handleMakeChange(e) {
        setMake(e.target.value);
    }

    function handleModelChange(e) {
        setModel(e.target.value);
    }

    function handleBikeYearChange(e) {
        setBikeYear(e.target.value);
    }

    function handleValueChange(e) {
        setValue(e.target.value);
    }

    function handleOftenChange(event) {
        setOften(event.target.value);
    }

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
        if (isNaN(value) || value.includes(' ')) {
            alert('Estimated value must be a numerical value.')
            return;
        }
        console.log("HEY FROM HANDLEPOST")
        API.createUser({
            make: make,
            model: model,
            year: bikeYear,
            estvalue: value,
            often: often,
            use: uses,
            stolen: stolen,
            clubs: clubs,
            first: first,
            last: last,
            email: email,
            dob_month: month,
            dob_day: day,
            dob_year: year,
            zip: zip
        })
            .then(console.log("User data saved to database."))
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
        alert("Thank you! We will reach out when service is available in your area.");
        document.location.href = "/";
    };

    return (
        <div>
            <section className="sign-up">
                <div className="form-content">
                    <div className="about">
                        <h4 style={{ marginBottom: '40px' }}>Tell us about your bike!</h4>
                        <div className="row uk-margin">
                            <div className="col-md-4">
                                <p>Make:</p>
                            </div>
                            <div className="col-md-8">
                                <input
                                    className="uk-input"
                                    type="text"
                                    name="make"
                                    onChange={handleMakeChange}
                                >
                                </input>
                            </div>
                        </div>
                        <div className="row uk-margin">
                            <div className="col-md-4">
                                <p>Model:</p>
                            </div>
                            <div className="col-md-8">
                                <input
                                    className="uk-input"
                                    type="text"
                                    name="model"
                                    onChange={handleModelChange}
                                >
                                </input>
                            </div>
                        </div>
                        <div className="row uk-margin">
                            <div className="col-md-4">
                                <p>Year:</p>
                            </div>
                            <div className="col-md-8">
                                <input
                                    className="uk-input"
                                    type="text"
                                    name="year"
                                    onChange={handleBikeYearChange}
                                >
                                </input>
                            </div>
                        </div>
                        <div className="row uk-margin">
                            <div className="col-md-6">
                                <p>Estimated Value:</p>
                            </div>
                            <div className="col-md-4">
                                <div className="uk-inline">
                                    <span className="uk-form-icon">$</span>
                                    <input className="estimate uk-input" type="text" name="value" value={value} onChange={handleValueChange}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="arrow-down">&#8595;</p>
                </div>
            </section>
            <section className="sign-up">
                <div className="form-content">
                    <div className="often">
                        <h4>How often do you ride?</h4>
                        <div className="uk-margin-medium">
                            <input type="button" className="light uk-button uk-button-default" value="0-5 Days/Month" onClick={handleOftenChange}></input>
                            <input type="button" className="med uk-button uk-button-default" value="10+ Days/Month" onClick={handleOftenChange}></input>
                            <input type="button" className="heavy uk-button uk-button-default" value="Daily" onClick={handleOftenChange}></input>
                        </div>
                    </div>
                    <p className="arrow-down">&#8595;</p>
                </div>
            </section>
            <section className="sign-up">
                <div className="form-content">
                    <div className="bike-info">
                        <h4>What do you use your bike for?</h4>
                        <div className="uk-margin-medium">
                            <input type="button" className={`uk-button uk-button-default ${commuting}`} value="Commuting" onClick={handleUsesChange}></input>
                            <input type="button" className={`uk-button uk-button-default ${pleasure}`} value="Pleasure" onClick={handleUsesChange}></input>
                            <input type="button" className={`uk-button uk-button-default ${exercise}`} value="Exercise" onClick={handleUsesChange}></input>
                            <br></br>
                            <input type="button" className={`uk-button uk-button-default ${racing}`} value="Racing" onClick={handleUsesChange}></input>
                            <input type="button" className={`uk-button uk-button-default ${other}`} value="Other" onClick={handleUsesChange}></input>
                        </div>
                        <h4>Have you ever had a bike stolen?</h4>
                        <div className="row justify-content-md-center uk-margin-large">
                            <div className="up col-md-4 uk-margin">
                                <i className={`up far fa-thumbs-up ${active1}`} aria-hidden="true" onClick={handleStolenTrue}></i>
                            </div>
                            <div className="down col-md-4">
                                <i className={`down far fa-thumbs-down ${active2}`} aria-hidden="true" onClick={handleStolenFalse}></i>
                            </div>
                        </div>
                        <h4>Add your bike clubs below</h4>
                        <div className="uk-margin">
                            <div>
                                <ul className="club-list"></ul>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-md-10">
                                    <input className="clubs uk-input" onfocus="this.value=''" type="text" name="clubs" value={clubinput} onChange={handleClubsChange}></input>
                                </div>
                                <div className="col-md-2">
                                    <button className="club-btn uk-button uk-button-default" onClick={handleClubsAdd}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="arrow-down">&#8595;</p>
                </div>
            </section>
            <section className="sign-up">
                <div className="form-content">
                    <div className="you">
                        <h3>You</h3>
                        <div className="name row">
                            <div className="col-md-6">
                                <input className="uk-input" type="text" placeholder="First" onChange={e => setFirst(e.target.value)}></input>
                            </div>
                            <div className="col-md-6">
                                <input className="uk-input" type="text" placeholder="Last" onChange={e => setLast(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <div className="uk-inline">
                                <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: mail"></span>
                                <input className="uk-input" type="text" placeholder="email@domain.com" onChange={e => setEmail(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3" style={{ marginTop: '5px' }}>
                                <p>Date of Birth:</p>
                            </div>
                            <div className="col-md-3">
                                <div uk-form-custom="target: > * > span:first-child">
                                    <select onChange={e => setMonth(e.target.value)}>
                                        <option value="Month">Month</option>
                                        <option value="Jan">Jan</option>
                                        <option value="Feb">Feb</option>
                                        <option value="Mar">Mar</option>
                                        <option value="Apr">Apr</option>
                                        <option value="May">May</option>
                                        <option value="Jun">Jun</option>
                                        <option value="Jul">Jul</option>
                                        <option value="Aug">Aug</option>
                                        <option value="Sep">Sep</option>
                                        <option value="Oct">Oct</option>
                                        <option value="Nov">Nov</option>
                                        <option value="Dec">Dec</option>
                                    </select>
                                    <button class="uk-button uk-button-default" type="button" tabindex="-1">
                                        <span></span>
                                        <span uk-icon="icon: chevron-down"></span>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div uk-form-custom="target: > * > span:first-child">
                                    <select onChange={e => setDay(e.target.value)}>
                                        <option value="Day">Day</option>
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                        <option value="4">04</option>
                                        <option value="5">05</option>
                                        <option value="6">06</option>
                                        <option value="7">07</option>
                                        <option value="8">08</option>
                                        <option value="9">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                    <button class="uk-button uk-button-default" type="button" tabindex="-1">
                                        <span></span>
                                        <span uk-icon="icon: chevron-down"></span>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div uk-form-custom="target: > * > span:first-child">
                                    <select onChange={e => setYear(e.target.value)}>
                                        <option value="Year">Year</option>
                                        <option value="20201">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                        <option value="2002">2002</option>
                                        <option value="2001">2001</option>
                                        <option value="2000">2000</option>
                                        <option value="1999">1999</option>
                                        <option value="1998">1998</option>
                                        <option value="1997">1997</option>
                                        <option value="1996">1996</option>
                                        <option value="1995">1995</option>
                                        <option value="1994">1994</option>
                                        <option value="1993">1993</option>
                                        <option value="1992">1992</option>
                                        <option value="1991">1991</option>
                                        <option value="1990">1990</option>
                                        <option value="1989">1989</option>
                                        <option value="1988">1988</option>
                                        <option value="1987">1987</option>
                                        <option value="1986">1986</option>
                                        <option value="1985">1985</option>
                                        <option value="1984">1984</option>
                                        <option value="1983">1983</option>
                                        <option value="1982">1982</option>
                                        <option value="1981">1981</option>
                                        <option value="1980">1980</option>
                                        <option value="1979">1979</option>
                                        <option value="1978">1978</option>
                                        <option value="1977">1977</option>
                                        <option value="1976">1976</option>
                                        <option value="1975">1975</option>
                                        <option value="1974">1974</option>
                                        <option value="1973">1973</option>
                                        <option value="1972">1972</option>
                                        <option value="1971">1971</option>
                                        <option value="1970">1970</option>
                                        <option value="1969">1969</option>
                                        <option value="1968">1968</option>
                                        <option value="1967">1967</option>
                                        <option value="1966">1966</option>
                                        <option value="1965">1965</option>
                                        <option value="1964">1964</option>
                                        <option value="1963">1963</option>
                                        <option value="1962">1962</option>
                                        <option value="1961">1961</option>
                                        <option value="1960">1960</option>
                                        <option value="1959">1959</option>
                                        <option value="1958">1958</option>
                                        <option value="1957">1957</option>
                                        <option value="1956">1956</option>
                                        <option value="1955">1955</option>
                                        <option value="1954">1954</option>
                                        <option value="1953">1953</option>
                                        <option value="1952">1952</option>
                                        <option value="1951">1951</option>
                                        <option value="1950">1950</option>
                                        <option value="1949">1949</option>
                                        <option value="1948">1948</option>
                                        <option value="1947">1947</option>
                                        <option value="1946">1946</option>
                                        <option value="1945">1945</option>
                                        <option value="1944">1944</option>
                                        <option value="1943">1943</option>
                                        <option value="1942">1942</option>
                                        <option value="1941">1941</option>
                                        <option value="1940">1940</option>
                                        <option value="1939">1939</option>
                                        <option value="1938">1938</option>
                                        <option value="1937">1937</option>
                                        <option value="1936">1936</option>
                                        <option value="1935">1935</option>
                                        <option value="1934">1934</option>
                                        <option value="1933">1933</option>
                                        <option value="1932">1932</option>
                                        <option value="1931">1931</option>
                                        <option value="1930">1930</option>
                                        <option value="1929">1929</option>
                                        <option value="1928">1928</option>
                                        <option value="1927">1927</option>
                                        <option value="1926">1926</option>
                                        <option value="1925">1925</option>
                                        <option value="1924">1924</option>
                                        <option value="1923">1923</option>
                                        <option value="1922">1922</option>
                                        <option value="1921">1921</option>
                                        <option value="1920">1920</option>
                                        <option value="1919">1919</option>
                                        <option value="1918">1918</option>
                                        <option value="1917">1917</option>
                                        <option value="1916">1916</option>
                                        <option value="1915">1915</option>
                                        <option value="1914">1914</option>
                                        <option value="1913">1913</option>
                                        <option value="1912">1912</option>
                                        <option value="1911">1911</option>
                                        <option value="1910">1910</option>
                                        <option value="1909">1909</option>
                                        <option value="1908">1908</option>
                                        <option value="1907">1907</option>
                                        <option value="1906">1906</option>
                                        <option value="1905">1905</option>
                                        <option value="1904">1904</option>
                                        <option value="1903">1903</option>
                                        <option value="1902">1902</option>
                                        <option value="1901">1901</option>
                                        <option value="1900">1900</option>
                                    </select>
                                    <button class="uk-button uk-button-default" type="button" tabindex="-1">
                                        <span></span>
                                        <span uk-icon="icon: chevron-down"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center uk-margin">
                            <div className="col-md-3" style={{ marginTop: '15px' }}>
                                <p>Zip:</p>
                            </div>
                            <div className="col-md-3">
                                <input className="uk-input" type="text" onChange={e => setZip(e.target.value)}></input>
                            </div>
                        </div>
                    </div>
                    <div className="uk-margin-large">
                        <button type="submit" className="submit-btn uk-button uk-button-default" onClick={handlePost}>Submit</button>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Form;