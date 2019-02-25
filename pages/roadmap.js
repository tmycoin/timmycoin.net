import React, { Component, Fragment } from "react";

import Layout from "../src/components/layout";

export default class extends Component {
  render() {
    return (
      <Layout>
        <div className="container-fluid">
          <div className="container pb-5">
            <h2 className="pb-3 pt-2">Roadmap</h2>
            <p>
              Roadmap of Timmycoin development for year 2018/2020 including long
              term plans and vision.
            </p>

            <div className="row align-items-center how-it-works mt-5">
              <div className="col-2 text-center bottom">
                <div className="circle">1</div>
              </div>
              <div className="col-6">
                <h5>20.12.2018 - Launched</h5>
                <p>
                  Timmycoin Has Been Launched Based on Original CryptoNote Code
                  Base
                </p>
              </div>
            </div>

            <div className="row timeline">
              <div className="col-2">
                <div className="corner top-right" />
              </div>
              <div className="col-8">
                <hr />
              </div>
              <div className="col-2">
                <div className="corner left-bottom" />
              </div>
            </div>
            <div className="row align-items-center justify-content-end how-it-works">
              <div className="col-6 text-right">
                <h5>01.01.2019 - Web Wallet, Explorer, Website</h5>
                <p>
                  An optimistic wallet and a special Explorer to keep track of
                  transactions.
                </p>
              </div>
              <div className="col-2 text-center full">
                <div className="circle">2</div>
              </div>
            </div>

            <div className="row timeline roadmap-disabled">
              <div className="col-2">
                <div className="corner right-bottom" />
              </div>
              <div className="col-8">
                <hr />
              </div>
              <div className="col-2">
                <div className="corner top-left" />
              </div>
            </div>
            <div className="row align-items-center how-it-works">
              <div className="col-2 text-center top">
                <div className="circle">3</div>
              </div>
              <div className="col-6">
                <h5>25.01.2019 - Mobile Ios, Android Wallet</h5>
                <p>
                  Send tmy using mobile, buy, pay, see details. Using Mobile Web
                  api.
                </p>
              </div>
            </div>

            <div className="row timeline roadmap-disabled">
              <div className="col-2">
                <div className="corner top-right" />
              </div>
              <div className="col-8">
                <hr />
              </div>
              <div className="col-2">
                <div className="corner left-bottom" />
              </div>
            </div>

            <div className="row align-items-center justify-content-end how-it-works">
              <div className="col-6 text-right">
                <h5>26.02.2019 - First Exchange Listing</h5>
                <p>You can exchange timmycoin with <b>bitexlive</b> ;)</p>
              </div>
              <div className="col-2 text-center full">
                <div className="circle">4</div>
              </div>
            </div>

            <div className="row timeline roadmap-disabled">
              <div className="col-2">
                <div className="corner right-bottom" />
              </div>
              <div className="col-8">
                <hr />
              </div>
              <div className="col-2">
                <div className="corner top-left" />
              </div>
            </div>
            <div className="row align-items-center how-it-works roadmap-disabled">
              <div className="col-2 text-center top">
                <div className="circle">5</div>
              </div>
              <div className="col-6">
                <h5>Windows Desktop Wallet</h5>
                <p>
                  It will be your desktop wallets for all your environments
                  specially.
                </p>
              </div>
            </div>

            <div className="row timeline roadmap-disabled">
              <div className="col-2">
                <div className="corner top-right" />
              </div>
              <div className="col-8">
                <hr />
              </div>
              <div className="col-2">
                <div className="corner left-bottom" />
              </div>
            </div>
            <div className="row align-items-center justify-content-end how-it-works roadmap-disabled">
              <div className="col-6 text-right">
                <h5>Payment Gateways</h5>
                <p>
                  Payment methods for <b>TimmyPay</b> will be developed. Will work
                  on Pos devices.
                </p>
              </div>
              <div className="col-2 text-center full">
                <div className="circle">6</div>
              </div>
            </div>
          </div>

          <div className="mt-5 text-center">
            <div className="mb-3">
              This roadmap is fluid and subject to change based on business
              priorities.
            </div>
            <h4>
              “The community will take the lead and will define new features and
              the direction of Timmycoin.”
            </h4>
          </div>
        </div>
      </Layout>
    );
  }
}
