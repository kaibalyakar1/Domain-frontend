import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
const url = 'http://localhost:8080'
const Editprofile = () => {

  const [customer, setCustomer] = useState(JSON.parse(sessionStorage.getItem('customer')))
  console.log(customer);


  const EditProfile = () => {
    
    console.log('in edit profile()');
    console.log(customer);


    axios.put(`http://localhost:8080/customer/update`, customer).then((response) => {
      const result = response.data

      if (result) {
        alert("success")
        console.log(result)
        sessionStorage.setItem('customer', JSON.stringify(result))
        sessionStorage.setItem('city', result.city)
        // history.push('/Customer')
  
      }
     
      else {
        alert('error')
      }
    })
  }
  return (
    <div>
      <h1 className="page-title">EDIT PROFILE INFORMATION</h1>
      <div className="container mt-3">
        <div className="row">
          <div className=" col-md-6 offset-md-2" style={{ width: "50rem" }}>
            <div className="card-body sign1">
              <h2>Edit Form</h2> <hr />


              <label >Name </label>
              <input type="text" className="form-control" value={customer.name} onChange={(e) => {
                setCustomer(prevState => ({
                  ...prevState,
                  name: e.target.value
                }))

              }} /><br />

              <label >email</label>
              <input type="email" className="form-control" value={customer.email} onChange={(e) => {
                setCustomer(prevState => ({
                  ...prevState,
                  email: e.target.value
                }))
              }} /><br />

              <label >password  </label>
              <input type="text" className="form-control" value={customer.password} onChange={(e) => {
                setCustomer(prevState => ({
                  ...prevState,
                  password: e.target.value
                }))
              }} /><br />

              <label >address</label>
              <input type="text" className="form-control" value={customer.address} onChange={(e) => {
                setCustomer(prevState => ({
                  ...prevState,
                  address: e.target.value
                }))
              }} /><br />

              <label>phone Number</label>
              <input type="text" className="form-control" value={customer.phoneNo} onChange={(e) => {
                setCustomer(prevState => ({
                  ...prevState,
                  phoneNo: e.target.value
                }))
              }} /><br />

              <label>city</label>
              <input type="text" className="form-control" value={customer.city} onChange={(e) => {
                setCustomer(prevState => ({
                  ...prevState,
                  city: e.target.value
                }))
              }} /><br />

              <label>state</label>
              <input type="text" className="form-control" value={customer.state} onChange={(e) => {
                setCustomer(prevState => ({
                  ...prevState,
                  state: e.target.value
                }))
              }} /><br />

              <label>Postal Code</label>
              <input type="text" className="form-control" value={customer.postalCode} onChange={(e) => {
                setCustomer(prevState => ({
                  ...prevState,
                  postalCode: e.target.value
                }))
              }} /><br />


              <input type="hidden" className="form-control" value={customer.id} onChange={(e) => {
                setCustomer(prevState => ({
                  ...prevState,
                  id: e.target.value
                }))
              }} /><br />


              <button type="submit" className="btn btn-primary" onClick={() => { EditProfile() }}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}
export default Editprofile
