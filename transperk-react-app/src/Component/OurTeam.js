import './styles/team.css'
import React, { Component } from 'react'
import userlogo from './img/user.jpg'

export class OurTeam extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
                  <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>KAIBALYA KAR</h2>
                            <p>SWEAPER AND CEO</p>

                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;kanhe@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;7777777907</i></h5>


                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>NAYABRATA SWAIN</h2>
                            <p>MANAGER AND CHAIRMAN</p>
                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;vicky@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;8249974573</i></h5>


                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>AMIT KUMAR CHHAPRI</h2>
                            <p>DRIVER</p>
                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;AMITMIYA@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;7979797979</i></h5>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item offset-md-2">
                    <div className="row">
                      <div className="col-md-4 ">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>SIDHARTH BEHERA</h2>
                            <p>HEAD GUARD</p>
                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;sIDU@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;9591477598</i></h5>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="fa-style"><i className="fa fa-chevron-left" aria-hidden="true" /></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="fa-style"><i className="fa fa-chevron-right" aria-hidden="true" /></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div></div></div>

      </>
    )
  }
}

export default OurTeam
