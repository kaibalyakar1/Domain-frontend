
import { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'

const Editvendorprofile = () => {


  const [vendor, setVendor] = useState(JSON.parse(sessionStorage.getItem('vendor')))
  console.log(vendor);


  const EditProfile = () => {
   
    console.log(vendor.id);


    axios.put(`http://localhost:8080/vendor/update`, vendor).then((response) => {
      const result = response.data

      if (result) {
        alert("success")
        console.log(result)
        sessionStorage.setItem('vendor', JSON.stringify(result))
        sessionStorage.setItem('city', result.city)
        // history.push('/Vendor')

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
              <input type="text" className="form-control" value={vendor.name} onChange={(e) => {
                setVendor(prevState => ({
                  ...prevState,
                  name: e.target.value
                }))
              }} defaultValue={vendor.name} /><br />

              <label >email</label>
              <input type="email" className="form-control" value={vendor.email} onChange={(e) => {
                setVendor(prevState => ({
                  ...prevState,
                  email: e.target.value
                }))
              }} defaultValue={vendor.email} /><br />

              <label >password  </label>
              <input type="text" className="form-control" value={vendor.password} onChange={(e) => {
                setVendor(prevState => ({
                  ...prevState,
                  password: e.target.value
                }))
              }} defaultValue={vendor.password} /><br />

              <label >address</label>
              <input type="text" className="form-control" value={vendor.address} onChange={(e) => {
                setVendor(prevState => ({
                  ...prevState,
                  address: e.target.value
                }))
              }} defaultValue={vendor.address} /><br />

              <label>phone Number</label>
              <input type="text" className="form-control" value={vendor.phoneNo} onChange={(e) => {
                setVendor(prevState => ({
                  ...prevState,
                  phoneNo: e.target.value
                }))
              }} defaultValue={vendor.phoneNo} /><br />

              <label>city</label>
              <input type="text" className="form-control" value={vendor.city} onChange={(e) => {
                setVendor(prevState => ({
                  ...prevState,
                  city: e.target.value
                }))
              }} defaultValue={vendor.city} /><br />

              <label>state</label>
              <input type="text" className="form-control" value={vendor.state} onChange={(e) => {
                setVendor(prevState => ({
                  ...prevState,
                  state: e.target.value
                }))
              }} defaultValue={vendor.state} /><br />

              <label>Postal Code</label>
              <input type="text" className="form-control" value={vendor.postalCode} onChange={(e) => {
                setVendor(prevState => ({
                  ...prevState,
                  postalCode: e.target.value
                }))
              }} defaultValue={vendor.postalCode} /><br />


              <input type="hidden" className="form-control" value={vendor.id} onChange={(e) => {
                setVendor(prevState => ({
                  ...prevState,
                  id: e.target.value
                }))
              }} defaultValue={vendor.id} /><br />


              <button type="submit" className="btn btn-primary" onClick={() => { EditProfile(vendor.id) }}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>





  );
}
export default Editvendorprofile
