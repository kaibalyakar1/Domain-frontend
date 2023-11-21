import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../index.css";
import { validEmail, validPassword, validPhoneNo } from "../common/Regex";
const Signup = () => {
  const history = useHistory();
  const [InvalidErr, setInvalidErr] = useState(false);
  const [InvalidErrMsg, setInvalidErrMsg] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [nameErr, setFnameErr] = useState(false);
  const [nameErrMsg, setFnameErrMsg] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [phoneNoErr, setPhoneNoErr] = useState(false);
  const [phoneNoErrMsg, setPhoneNoErrMsg] = useState("");
  const [pwdErr, setPwdErr] = useState(false);
  const [pwdErrMsg, setPwdErrMsg] = useState("");
  const [addressErr, setAddressErr] = useState(false);
  const [addressErrMsg, setAddressErrMsg] = useState("");
  const [stateErr, setStateErr] = useState(false);
  const [stateErrMsg, setStateErrMsg] = useState("");
  const [cityErr, setCityErr] = useState(false);
  const [cityErrMsg, setCityErrMsg] = useState("");
  const [postalCodeErr, setPostalCodeErr] = useState(false);
  const [PostalCodeErrMsg, setPostalCodeErrMsg] = useState("");

  const backToHome = () => {
    history.push("/");
  };
  const signup = () => {
    setFnameErr(false);

    setEmailErr(false);
    setPhoneNoErr(false);
    setPwdErr(false);
    setAddressErr(false);

    if (role == "" || role.length == 0) {
      alert("Please enter Role");
    } else if (name.length == 0) {
      setFnameErr(true);
      setFnameErrMsg("please enter name");
      alert("please enter first name");
    } else if (email.length === 0) {
      setEmailErr(true);
      setEmailErrMsg("please enter email");
      alert("please enter email");
    } else if (!validEmail.test(email)) {
      setEmailErr(true);
      setEmailErrMsg("please enter valid email");
      alert("please enter valid email");
    } else if (password.length === 0) {
      setPwdErr(true);
      setPwdErrMsg("please enter password");
      alert("please enter password");
    } else if (phoneNo.length === 0) {
      setPhoneNoErr(true);
      setPhoneNoErrMsg("please enter phone number");
      alert("please enter phone number");
    } else if (!validPhoneNo.test(phoneNo)) {
      setPhoneNoErr(true);
      setPhoneNoErrMsg("please enter valid phone number");
      alert("please enter valid phone number");
    } else if (address.length === 0) {
      setAddressErr(true);
      setAddressErrMsg("please enter address");
      alert("please enter address");
    } else if (city.length === 0) {
      alert("please enter city");
    } else if (state.length === 0) {
      alert("please enter state");
    } else if (postalCode.length === 0) {
      alert("please enter postal code");
    } else if (postalCode.length > 6) {
      alert("Postal Code Cannot be greater than 6");
    } else if (postalCode.length < 6) {
      alert("Postal Code Cannot be less than 6");
    } else {
      const body = {
        name: name,
        role: role,
        email: email,
        password: password,
        phoneNo: phoneNo,
        address: address,
        city: city.toUpperCase(),
        state: state,
        postalCode: postalCode,
      };

      if (role == "CUSTOMER") {
        console.log("role " + role);
        axios
          .post(`http://localhost:8080/customer`, body)
          .then((response) => {
            const result = response.data;
            if (result) {
              alert("succcess");
              history.push("/Signin");
            } else {
              alert("error");
            }
          })
          .catch((err) => {
            setInvalidErr(true);
            setInvalidErrMsg("enter input is not valid input");
          });
      } else {
        console.log("role " + email);
        console.log("role " + role);
        axios
          .post(`http://localhost:8080/vendor`, body)
          .then((response) => {
            const result = response.data;
            if (result) {
              alert("succcess");
              history.push("/Signin");
            } else {
              alert("error");
            }
          })
          .catch((err) => {
            setInvalidErr(true);
            setInvalidErrMsg("enter input is not valid input");
          });
      }
    }
  };
  return (
    <div className="container">
      <div>
        <div className="mb-3 sign">
          <h1>SignUp</h1>
          <br></br>
          <div className="mb-3">
            <label>
              <h5>Join Us As</h5>
            </label>
            <select
              className="form-select"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option>select</option>
              <option value="CUSTOMER">customer</option>
              <option value="VENDOR">vendor</option>
            </select>
          </div>
          <h5>Name: </h5>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
            type="text"
            placeholder="Enter Name"
          />
          <br></br>
          <h5>Email: </h5>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            type="email"
            placeholder="Enter Email"
          />
          <br></br>
          <h5>password: </h5>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            type="password"
            placeholder="Enter Password"
          />
          <br></br>
          <h5>Phone Number: </h5>
          <input
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
            className="form-control"
            type="text"
            placeholder="Enter Phone Number"
          />
          <br></br>
          <h5>Address:</h5>
          <input
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className="form-control"
            type="text"
            placeholder="Enter Address"
          />
          <br></br>
          <h5>City:</h5>
          <input
            onChange={(e) => {
              setCity(e.target.value);
            }}
            className="form-control"
            type="text"
            placeholder="Enter City"
          />
          <br></br>
          <h5>State:</h5>
          <input
            onChange={(e) => {
              setState(e.target.value);
            }}
            className="form-control"
            type="text"
            placeholder="Enter State"
          />
          <br></br>
          <h5>Postal Code:</h5>
          <input
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
            className="form-control"
            type="text"
            placeholder="Enter Postal Code"
          />
          <br></br>
          <button onClick={signup} className="btn btn-success">
            <i class="fa fa-user-plus" aria-hidden="true"></i>&nbsp;Sign Up
          </button>{" "}
          &nbsp;
          <button onClick={backToHome} className="btn btn-outline-info">
            <i class="fa fa-home fa-lg" aria-hidden="true"></i>&nbsp; Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
