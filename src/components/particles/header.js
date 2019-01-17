import React, { Component, Fragment } from "react";
import Link from 'next/link';
import { withRouter } from "next/router";
import _ from 'underscore';

export default withRouter(class extends Component {
  componentDidMount() {
    // =====================================================
    var c,
      currentScrollTop = 0;
    $(window).on("scroll load", function() {
      if ($(window).scrollTop() >= 100) {
        $(".navbar").addClass("active");
      } else {
        $(".navbar").removeClass("active");
      }

      // Navbar functionality
      var a = $(window).scrollTop(),
        b = $(".navbar").height();

      currentScrollTop = a;
      if (c < currentScrollTop && a > b + b) {
        $(".navbar").addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        $(".navbar").removeClass("scrollUp");
      }
      c = currentScrollTop;
    });
  }

  render() {
    const { router: { route } } = this.props;

    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
                <i className="fa fa-bars"></i>
              </span>
            </button>
            <div id="navbarSupportedContent" className="collapse navbar-collapse">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  {" "}
                  <a href="/" className={`nav-link ${_.isEqual(route, '/') ? 'active' : ''}`}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a href="/roadmap" className={`nav-link ${_.isEqual(route, '/roadmap') ? 'active' : ''}`}>
                    Roadmap
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a href="/downloads" className={`nav-link ${_.isEqual(route, '/downloads') ? 'active' : ''}`}>
                    Downloads
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a href="/team" className={`nav-link ${_.isEqual(route, '/team') ? 'active' : ''}`}>
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a href="/pools" className={`nav-link ${_.isEqual(route, '/pools') ? 'active' : ''}`}>
                      Pools
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a href="/contact" className={`nav-link ${_.isEqual(route, '/contact') ? 'active' : ''}`}>
                    Contact
                  </a>
                </li>
                {/*
                  <li className="nav-item dropdown">
                    <a
                      id="pages"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="nav-link dropdown-toggle"
                    >
                      Rpc
                    </a>
                    <div className="dropdown-menu">
                      <Link href="/rpc/daemon">
                        <a className="dropdown-item">
                          Daemon RPC
                        </a>
                      </Link>
                      <Link href="/rpc/wallet">
                        <a className="dropdown-item">
                          Wallet RPC
                        </a>
                      </Link>
                    </div>
                  </li>
                  */}
              </ul>
              <a href="https://wallet.timmycoin.net" target="_blank" className="btn btn-sm btn-primary ml-3 mr-3">Web Wallet</a>
              <a href="https://explorer.timmycoin.net" target="_blank" className="btn btn-sm btn-primary">Explorer</a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
})
