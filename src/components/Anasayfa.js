import React from "react";
import { Link } from "react-router-dom";
import "./Anasayfa.css";



const Anasayfa = () =>{

        return(

        

            <div className="header" >
                <div className="text-container">
                    <h1>Teknolojik Yemekler</h1>
                    <br/>
                    <p className="text">KOD ACIKTIRIR,</p>
                    <br/>
                    <p className="text">PİZZA DOYURUR!</p>
                </div>

                <div className="button-container">

                    <Link id="order-pizza" to="/pizza">
                        <button type="button" id="acıktım"> ACIKTIM </button>
                    </Link>

                </div>

                

            </div>
        
    )
}

export default Anasayfa;