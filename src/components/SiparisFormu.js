
import React from "react";
import { Link } from "react-router-dom";
import Forms from "./Forms";
import "./SiparisFormu.css";



const SiparisFormu = () => {

    return (
        <div className="Order">
            <div className="Header">
                <br />
                <h1>Teknolojik Yemekler</h1>

                <div className="Bar">
                    <ul>
                        <li>
                            <Link to="/">Anasayfa</Link>
                        </li>
                        -
                        <li>
                            <Link to="/">Seçenekler</Link>
                        </li>
                        -
                        <li>
                            <Link to="/pizza" style={{fontWeight: "bold"}}>Siparişi Oluştur</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="product-container">
                <h2>Position Absolute Acı Pizza</h2>
                    <div className="pizza-info">
                        <span className="price">
                            <p>85.50₺</p>
                        </span>
                        <span className="rate">
                            <p>4.9</p> 
                        </span>
                        <span className="comment">
                            <p>(200)</p>
                        </span>
                    </div>

                    <p className="text-hakkinda">
                        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
                        pizza tam sana göre, Pizza, domates, peynir ve genellikle çeşitli diğer
                        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
                        fırında yüksek sıcaklıkta pişirilen. genellikle yuvarlak, düzleştirilmiş
                        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
                        yemektir.. Küçük bir pizzaya bazen pizzetta denir.
                    </p>

            </div>

            <div className="form">
                < Forms />
            </div>





        </div>

    );


}

export default SiparisFormu;