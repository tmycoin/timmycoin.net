import React, { Component, Fragment } from "react";
import Link from 'next/link';

export default class extends Component {
  render() {
    return (
      <Fragment>
        <footer className="main-footer">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-3 col-xl-3 col-md-3 mb-5 pb-5 mb-lg-0">
                <div className="footer-logo">
                  <img src="/static/images/how.svg" width="100" height="120" className="img-fluid" />
                </div>
              </div>
              <div className="col-12 col-sm-3 col-xl-3 col-md-3 mb-5 mb-lg-0">
                <h5 className="footer-heading">Usefull Links</h5>
                <ul className="list-unstyled">
                  {/*
                    <li>
                      {" "}
                      <Link href="/wiki">
                        <a className="footer-link">
                          Wiki
                        </a>
                      </Link>
                    </li>
                  */}
                  <li>
                    {" "}
                    <a href="/downloads" className="footer-link">
                      Downloads
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/mining" className="footer-link">
                      Mining
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-3 col-xl-3 col-md-3 mb-5 mb-lg-0">
                <h5 className="footer-heading">Github</h5>
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <Link href="https://github.com/tmycoin/timmy">
                      <a className="footer-link">
                        Timmycoin
                      </a>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="https://github.com/tmycoin/web-timmywallet">
                      <a className="footer-link">
                        Wallet
                      </a>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="https://github.com/tmycoin/explorer">
                      <a className="footer-link">
                        BlockChain Explorer
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-3 col-xl-3 col-md-3">
                <h5 className="footer-heading">Social Media</h5>
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <Link href="https://t.me/tmycoin">
                      <a className="footer-link">
                        <i className="fa fa-telegram" aria-hidden="true"></i> Telegram
                      </a>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="https://twitter.com/tmycoin">
                      <a className="footer-link">
                        <i className="fa fa-twitter" aria-hidden="true"></i> Twitter
                      </a>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="https://www.instagram.com/tmycoin">
                      <a className="footer-link">
                      <i className="fa fa-instagram" aria-hidden="true"></i> Instagram
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyrights">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 text-center text-lg-left">
                  <p className="copyrights-text mb-3 mb-lg-0">
                    © All rights reserved.{" "}
                    <a
                      href="https://github.com/tmycoin"
                      className="external footer-link"
                    >
                      Timmycoin
                    </a>
                    .
                  </p>
                </div>
                <div className="col-lg-6 text-center text-lg-right">
                  Developed by{" "}
                  <a
                    href="https://github.com/frontekip"
                    className="external footer-link"
                  >
                    Frontekip{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}
