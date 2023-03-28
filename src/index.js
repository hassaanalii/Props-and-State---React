import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'
import Form from "./Form";


function Contacts(props){
  return(<div>
    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.number}</p>
    <p>{props.email}</p>
  </div>)
}
Contacts.propTypes = {name: PropTypes.string, img: PropTypes.string, number: PropTypes.string, email:PropTypes.string}
Contacts.defaultProps = {
  name: "Enter name",
  img: "Enter image",
  number: "Enter their phone number",
  email: "Enter their email"
}


ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Contacts name="Weeknd" number="+1232312" email="weeknd@gmail.com" img="https://people.com/thmb/wC-jG2lRY0jbzEm-tZ6GPVOTwho=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x372:961x374)/the-weeknd-eb983ab7d996467181d87471ae48fd3d.jpg"/>
    
    <Contacts name="Joji" number="+123123" email="joji@gmail.com" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36xHOlBM2df8KimPcJDarByYCUOEU1D2oHgvedgALKI1_m2WXHFuJnV59haEPAg_4awI&usqp=CAU" />


    <Form />

  </div>,
  document.getElementById("root")
);

