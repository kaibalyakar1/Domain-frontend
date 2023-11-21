import React, { Component } from "react";

import "./styles/Home.css";
import bgimg from "./img/truck-home-2.jpg";
import OurTeam from "./OurTeam";
import logo from "./img/cutmlogo.png";

export class Home extends Component {
  singnUpHandler = () => {
    this.props.history.push("/signup");
  };
  singnInHandler = () => {
    this.props.history.push("/signin");
  };

  render() {
    const bg = "srccomponentsimg\truck-home-2.jpg";
    return (
      <>
        <div>
          <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top ">
              <div className="container-fluid">
                <a href="#" className="navbar-brand mb-0 h1 font-weight-bold">
                  <img src={logo} width="40" height="40" alt="logo" />
                  &nbsp;CentroShipping
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  aria-controls="navbarCollapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" aria-current="page" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#aboutus">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#services">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#ourteam">
                        Our Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#contact" tabIndex={-1}>
                        Contact Us
                      </a>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <button
                      className="btn btn-warning font-weight-bold"
                      onClick={this.singnInHandler}
                      type="submit"
                    >
                      <i
                        className="fa fa-user-circle fa-lg "
                        aria-hidden="true"
                      />{" "}
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </header>
          <main>
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
               
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <svg
                    className="bd-placeholder-img"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    focusable="false"
                  >
                    <rect
                      width="100%"
                      height="100%"
                      fill="rgb(177, 190, 202)"
                    />
                  </svg>
                  <img src={bgimg} classname="img-fluid img-responsive" alt />

                  <div className="container">
                    <div className="carousel-caption">
                      <h1>CentroShipping</h1>
                      <h3>Start Your Business Now!!</h3>
                      <p>
                        <a
                          className="btn btn-lg btn-info"
                          onClick={this.singnUpHandler}
                          role="button"
                        >
                          {" "}
                          Sign Up Now &nbsp;
                          <i className="fa fa-truck fa-flip-horizontal fa-lg" />{" "}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* START THE FEATURETTES */}
            <div className="container marketing">
              <div className="row featurette text-secondary" id="aboutus">
                <h1 className>Who We Are ?</h1>
                <h4>
                  We connect people, We help business to grow, we provide
                  transportation Services. We provide an instant affordable Auto
                  Transport On this platform you can join as Service provider to
                  grow your business
                </h4>
                <h4>
                  {" "}
                  We do not only provide customized storage solutions that
                  aligns with your business, but also provide a range of other
                  warehousing services, which includes fulfilment,logistic
                  support, distribution, door-to-door transport, pick and pack
                  operations, and so on.
                </h4>
                <h4>
                  Apart from the regular warehousing services, we provide a
                  range of value added customer specific services to help them
                  with their business, order fulfilment, packaging, assembly and
                  kitting requirements
                </h4>
              </div>
              <hr className="featurette-divider" />
              <span id="services" />
              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading">
                    Expand Your Business{" "}
                    <span className="text-muted">
                      Register As a Service Provider
                    </span>
                  </h2>
                  <p className="lead">
                    Here, On this platform Service provider can reach out to
                    many customers and will able to provide transport service.
                  </p>
                </div>
                <div className="col-md-5">
                  <img
                    className="img-thumbnail"
                    src="https://source.unsplash.com/500x500/?logistics"
                    alt
                  />
                </div>
              </div>
              <hr className="featurette-divider" />
              <div className="row featurette">
                <div className="col-md-7 order-md-2">
                  <h2 className="featurette-heading">
                    Transport Service At Your Door{" "}
                    <span className="text-muted">Join Us As a Customer</span>
                  </h2>
                  <p className="lead">
                    Here, you can reach out to various transport service
                    provider, Your goods our responsibility!!
                  </p>
                </div>
                <div className="col-md-5 order-md-1">
                  <img
                    className="img-thumbnail"
                    src="https://source.unsplash.com/500x500/?delivery"
                    alt
                  />
                </div>
              </div>
              <hr className="featurette-divider" />
            </div>
            {/* /.container */}
          </main>
          <span className="text-secondary text-center" id="ourteam">
            <h1>OUR TEAM</h1>
          </span>

          <div className="container-fluid row">
            <OurTeam />
          </div>
          {/* footer */}
          <footer className="container-fluid text-center" id="contact">
            <div className="row">
              <div className="col-sm-3">
                <h3>Contact Us</h3>
                <h4>Our address and contact info here</h4>
              </div>
              <div className="col-sm-3">
                <h3>Connect</h3>
                <a href="#">
                  <i className="fa fa-facebook fa-2x" aria-hidden="true" />
                </a>
                &nbsp;
                <a href="#">
                  <i className="fa fa-twitter fa-2x" aria-hidden="true" />
                </a>
                &nbsp;
                <a href="#">
                  <i className="fa fa-google fa-2x" aria-hidden="true" />
                </a>
                &nbsp;
                <a href="#">
                  <i className="fa fa-linkedin fa-2x" aria-hidden="true" />
                </a>
              </div>
              <div className="col-sm-3">
                <h3>Address</h3>
                <h5>
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  &nbsp;Main building, centurion university, 752050
                </h5>
              </div>
              <div className="col-sm-3">
                <h3>Reach To Us</h3>
                <h5>
                  <i className="fa fa-envelope" aria-hidden="true" />{" "}
                  CentroShipping@gmail.com
                </h5>
                <h5>
                  <i className="fa fa-phone-square" aria-hidden="true" />{" "}
                  8888898520
                </h5>
              </div>
            </div>
          </footer>
          <div className="copyright text-center text-secondary">
            © Copyright{" "}
            <strong>
              <span>CentroShipping</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </>
    );
  }
}

export default Home;
