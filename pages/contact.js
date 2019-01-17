import React, { Component, Fragment } from "react";

import Layout from "../src/components/layout";

export default class extends Component {
  render() {
    return (
      <Layout>
        <div className="contact container mt-5">
          <div className="row align-items-center">
            <div className="col-lg-4 contact-details mt-lg-0">
              <div className="box pt-0">
                <div className="icon d-flex align-items-end">
                  <img
                    src="/static/images/chat.svg"
                    alt
                    className="img-fluid"
                  />
                </div>
                <h5>Community resources</h5>
                <a
                  href="https://t.me/tmycoin"
                  target="_blank"
                  className="text-small mb-1 mr-3"
                >
                  <i className="fa fa-telegram" aria-hidden="true" /> Telegram
                </a>
                <a
                  href="https://www.facebook.com/tmycoin"
                  target="_blank"
                  className="text-small mb-1"
                >
                  <i className="fa fa-facebook" aria-hidden="true" /> Facebook
                </a>
                <a
                  href="https://twitter.com/tmycoin"
                  target="_blank"
                  className="text-small d-block mb-1"
                >
                  <i className="fa fa-twitter" aria-hidden="true" /> Twitter
                </a>
                <a
                  href="https://www.instagram.com/tmycoin"
                  target="_blank"
                  className="text-small d-block"
                >
                  <i className="fa fa-instagram" aria-hidden="true" /> İnstagram
                </a>
              </div>
            </div>
            <div className="col-lg-4 contact-details mt-lg-0">
              <div className="box pt-0">
                <div className="icon d-flex align-items-end">
                  <img
                    src="/static/images/idea.svg"
                    alt
                    className="img-fluid"
                  />
                </div>
                <h5>Community Management</h5>
                <p className="text-small font-weight-light">
                  Timmycoin,
                  <br />
                  The creators of <b>Frontekip</b>.
                </p>
                <a href="mailto:hi@timmycoin.net" className="text-small">
                  hi@timmycoin.net
                </a>
              </div>
            </div>

            <div className="col-lg-4 contact-details mt-lg-0">
              <div className="box pt-0">
                <div className="icon d-flex align-items-end">
                  <img src="/static/images/pen.svg" alt className="img-fluid" />
                </div>
                <h5>Customer support</h5>
                <p className="text-small font-weight-light">
                  You can contact Timmycoin project development team:
                </p>

                <a href="mailto:support@timmycoin.net" className="text-small">
                  support@timmycoin.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
