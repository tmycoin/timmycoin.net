import React, { Component, Fragment } from "react";

import Layout from "../src/components/layout";

export default class extends Component {
  render() {
    return (
      <Layout>
        <div className="container mt-5 mining-pools">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2 className="divider-heading">Mining Pools</h2>
              <div className="row mb-4">
                <div className="col-lg-12">
                  <p className="lead mt-2 text-muted">You can mining using the following pools.</p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12 col-md-12 col-xl-6 mb-4">
                  <a href="https://cnpool.cc/TMY" className="btn btn-primary mr-3" target="_blank">
                    Go to the <b>cnpool</b>
                  </a>
                </div>
                <div className="col-12 col-md-12 col-xl-6 mb-4">
                  <a href="http://youpool.io/TMY" className="btn btn-primary mr-3" target="_blank">
                    Go to the <b>youpool</b>
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
