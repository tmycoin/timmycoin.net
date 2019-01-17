import React, { Component, Fragment } from "react";

import Layout from "../src/components/layout";

export default class extends Component {
  render() {
    return (
      <Layout>
        <div className="container mt-5">
          <div className="row text-center">
            <div className="col-12 col-md-12 col-xl-6 mb-5">
              <h2 className="divider-heading">Timmycoin Desktop (Stable)</h2>
              <h4 className="text-lightv">version 0.0.1</h4>
              <div className="row">
                <div className="col-12">
                  <p className="lead divider-subtitle mt-2 text-muted">The easiest way to store your funds. Manage your money from any device.</p>
                </div>
                <div className="col-12">
                  <a href="https://github.com/tmycoin/timmywallet/releases/download/0.0.1/timmywallet-0.0.1-macosx.zip" className="btn btn-primary mr-2">
                    <i class="fa fa-apple" aria-hidden="true"></i> Download
                  </a>
                  <a href="https://wallet.timmycoin.net" className="btn btn-primary disabled">
                    <i class="fa fa-windows" aria-hidden="true"></i> Download
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-xl-6">
              <h2 className="divider-heading">Timmycoin Daemons (Stable)</h2>
              <h4 className="text-lightv">version 0.0.1</h4>
              <div className="row">
                <div className="col-12">
                  <p className="lead divider-subtitle mt-2 text-muted">
                    Willing to accept Timmycoin? Check out our robust daemonized console RPC wallet designed for e-commerce projects.
                  </p>
                </div>
                <div className="col-12">
                  <a href="https://github.com/tmycoin/timmy/releases/download/0.0.1/timmycoin-0.0.1-macosx64.zip" className="btn btn-primary mr-2">
                    <i class="fa fa-apple" aria-hidden="true"></i> Download
                  </a>
                  <a href="https://github.com/tmycoin/timmy/releases/download/0.0.1/timmycoin-0.0.1-linux64.tar.gz" className="btn btn-primary">
                    <i class="fa fa-linux" aria-hidden="true"></i> Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
