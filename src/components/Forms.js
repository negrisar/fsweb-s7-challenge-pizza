import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  FormFeedback,
} from "reactstrap";
import "./Form.css";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Counter from "./Counter";


const Forms = () => {
  let [pizza, setPizza] = useState({
    name: "",
    size: null,
    hamur: "",
    Pepperoni: false,
    Domates: false,
    Biber: false,
    Sosis: false,
    Jambon: false,
    Kabak: false,
    Misir: false,
    Sucuk: false,
    Ananas: false,
    TavukIzgara: false,
    Jalepeno: false,
    Sogan: false,
    Sarimsak: false,
    note: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    size: null,
    hamur: "",
    Pepperoni: false,
    Domates: false,
    Biber: false,
    Sosis: false,
    Misir: false,
    Sucuk: false,
    Jambon: false,
    Kabak: false,
    Ananas: false,
    TavukIzgara: false,
    Jalepeno: false,
    Sogan: false,
    Sarimsak: false,
    note: "",
  });

  const formSchema = Yup.object().shape({
    name: Yup.string().required("Litfen isminizi giriniz!"),
    size: Yup.string().required("Lütfen Pizzanızın boyutunu seçiniz!"),
    hamur: Yup.string().required("Lütfen Hamur kalınlığı tercihinizi yapınız!"),
    note: Yup.string(),
    Pepperoni: Yup.string(),
    Domates: Yup.string(),
    Jambon: Yup.string(),
    Kabak: Yup.string(),
    Biber: Yup.string(),
    Sosis: Yup.string(),
    Misir: Yup.string(),
    Sucuk: Yup.string(),
    Ananas: Yup.string(),
    TavukIzgara: Yup.string(),
    Jalepeno: Yup.string(),
    Sogan: Yup.string(),
    Sarimsak: Yup.string(),
  });
  
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setPizza({ ...pizza, [name]: value });
    Yup.reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  const inputCheckboxHandler = (e) => {
    const { name, checked } = e.target;
    setPizza({ ...pizza, [name]: checked });
  };

  useEffect(() => {
    console.log("pizza:", pizza);
  }, [pizza]);

  useEffect(() => {
    console.warn(formErrors);
  }, [formErrors]);

  const sender = useHistory();

  let [holdData, setHoldData] = useState([]);
  let [response, setResponse] = useState();
  


  return (
    <div>
      <Form
        id="pizza-form"
        onSubmit={(event) => {
          event.preventDefault();
          formSchema.isValid(pizza).then((valid) => {
            if (valid) {
              axios
                .post("https://reqres.in/api/users", { ...pizza })
                .then((res) => {
                  console.log("Yeni Pizza:", res.data);
                  setResponse(res.data);
                  setHoldData([...holdData, pizza]);
                  sender.push("validation");
                });
            } else {
              alert(
                "Hata! Siparişiniz tarafımıza ulaşmadı. Lütfen siparişinizi kontrol edip tekrar deneyiniz."
              );
            }
          });
        }}
      >

        <br />
        <div className="hamur">
          <FormGroup>
            <div className="boyut-sec">
              <legend>Boyut Seç *:</legend>
              <br />

              <Input
                type="radio"
                id="kucuk"
                name="size"
                value={"Kucuk"}
                onChange={inputChangeHandler}
                invalid={!!formErrors.size}
              />
              <label htmlFor="kucuk">Küçük</label>
              <br />

              <Input
                type="radio"
                id="orta"
                name="size"
                value={"Orta"}
                onChange={inputChangeHandler}
                invalid={!!formErrors.size}
              />
              <label htmlFor="orta">Orta</label>
              <br />

              <Input
                type="radio"
                id="buyuk"
                name="size"
                value={"Buyuk"}
                onChange={inputChangeHandler}
                invalid={!!formErrors.size}
              />
              <label htmlFor="buyuk">Büyük</label>
              <br />
              {formErrors.size && <FormFeedback>{formErrors.size}</FormFeedback>}
            </div>
          </FormGroup>

          <br />
          <FormGroup>
            <Label htmlFor="size-dropdown">Hamur Seç *: </Label>
            <br />
            <select id="size-dropdown" onChange={inputChangeHandler} name="hamur">
              <option selected disabled hidden>
                Hamur Kalınlığı
              </option>
              <option>İnce</option>
              <option>Orta</option>
              <option>Kalın</option>
            </select>
          </FormGroup>
          <br />
        </div>
        <br />
        <div className="malzemeler">

          <FormGroup>
            <Label htmlFor="user-service" style={{ fontWeight: "bold" }}>Ek Malzemeler </Label>
            <br />
            <legend>En Fazla 10 malzeme seçebilirsiniz. 5₺</legend>
            <br />

            <div className="malzemeler-container">
              <Label htmlFor="for-pepperoni">Pepperoni </Label>
              <Input
                id="for-pepperoni"
                name="Pepperoni"
                type="checkbox"
                onChange={inputCheckboxHandler}
              />

              <Label htmlFor="for-domates">Domates </Label>
              <Input
                id="for-domates"
                name="Domates"
                type="checkbox"
                onChange={inputCheckboxHandler}
              />

              <Label htmlFor="for-biber">Biber </Label>
              <Input
                id="for-biber"
                name="Biber"
                type="checkbox"
                onChange={inputCheckboxHandler}
              />
              <br />

              <Label htmlFor="for-sosis">Sosis </Label>
              <Input
                id="for-sosis"
                name="Sosis"
                type="checkbox"
                onChange={inputCheckboxHandler}
              />

              <Label htmlFor="for-misir">Mısır </Label>
              <Input
                id="for-misir"
                name="Misir"
                type="checkbox"
                onChange={inputCheckboxHandler}
              />

              <Label htmlFor="for-sucuk">Sucuk </Label>
              <Input
                id="for-sucuk"
                name="Sucuk"
                type="checkbox"
                onChange={inputCheckboxHandler}
              />
              <br/>

              <Label htmlFor="for-jambon">Kanada Jambonu </Label>
              <Input
                id="for-jambon"
                name="Jambon"
                type="checkbox"
                onChange={inputCheckboxHandler}
              />

              <Label htmlFor="for-Ananas">Ananas </Label>
              <Input
                id="for-Ananas"
                name="Ananas"
                type="checkbox"
                onChange={inputCheckboxHandler}
              />
              
              <Label htmlFor="for-tavuk">Tavuk Izgara </Label>
              <Input
                id="for-tavuk"
                name="TavukIzgara"
                type="checkbox"
                onChange={inputCheckboxHandler}
              />
              <br />
              
              <Label htmlFor="for-jalepeno">Jalepeno </Label>
              <Input
                id="for-jalepeno"
                name="Jalepeno"
                type="checkbox"
                onChange={inputCheckboxHandler}
              />

              <Label htmlFor="for-kabak">Kabak </Label>
              <Input
                id="for-kabak"
                name="Kabak"
                type="checkbox"
                onChange={inputCheckboxHandler}
              />
              
              <Label htmlFor="for-sogan">Soğan </Label>
              <Input
                id="for-sogan"
                name="Sogan"
                type="checkbox"
                onChange={inputCheckboxHandler}
              />
              <br />

              <Label htmlFor="for-sarimsak">Sarımsak </Label>
              <Input
                id="for-sarimsak"
                name="Sarimsak"
                type="checkbox"
                onChange={inputCheckboxHandler}
              />
            </div>
          </FormGroup>
          <br />
        </div>
        <br />

        <div className="name-input">
          <FormGroup>
          <Label htmlFor="name-text" style={{fontWeight:"bold"}}>Ad-Soyad: </Label>
          <br/>
          <Input
              id="name-input"
              name="name"
              type="textbox"
              placeholder="Lütfen isminizi giriniz!"
              style={{ width: "300px" }}
              onChange={inputChangeHandler}
            />

           </FormGroup>
           <br/>
        </div>
        <div className="not">
          <FormGroup>
            <Label htmlFor="special-text">Sipariş Notu: </Label>
            <br/>
            <Input
              id="special-text"
              name="note"
              type="textbox"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              style={{ width: "300px" }}
              onChange={inputChangeHandler}
            />
          </FormGroup>
        </div>
        <hr />
        <div className="siparis-sonu">
          <div className="conunter">
            <Counter/>
          </div>
          <div className="siparis-toplam">
            <div className="siparis-toplami">Sipariş Toplamı</div>

            <br />
          <Link id="order-button" to="/success">
            <Button id="order-button" type="submit">Sipariş Ver</Button>
          </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Forms;