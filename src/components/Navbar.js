import React from 'react'

import {
    Link
} from "react-router-dom";

const NavBar = ()=>{

    const handleType = ()=>{
        let search = document.getElementById('searchTxt');
        search.addEventListener("input",function(){
            let inputVal = search.value;
            console.log("type",inputVal);
            let card = document.getElementsByClassName('card');
            Array.from(card).forEach(function(element){
                let cardTxt = element.getElementsByTagName("p")[0].innerText;
                // console.log(cardTxt);

                if(cardTxt.includes(inputVal)){
                    element.style.display = "flex";
                }

                else{
                    element.style.display = "none";
                }
            })
        })
    }

        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                {/* <li className="nav-item">
                                <a Link className="nav-link" to="/about">About</a>
                            </li> */}

                                <li className="nav-item"> <Link className="nav-link" to="/business">business</Link> </li>
                                <li className="nav-item"> <Link className="nav-link" to="/entertainment">entertainment</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/general">general</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/health">health</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/science">science</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/sports">sports</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/technology">technology</Link></li>
                            </ul>
                            <form className="d-flex" role="search" >
                                <input className="form-control me-2" id="searchTxt" type="search" placeholder="Search" aria-label="Search" onClick={handleType}/>
                                    <button className="btn btn-outline-success" type="submit" id="mySearch" > Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    
}

export default NavBar
