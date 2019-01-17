import React, { Component, Fragment } from "react";
import Link from "next/link";

export default class extends Component {
  render() {
    return (
      <section className="hero">
        <div className="container text-center">
          <nav
            aria-label="breadcrumb"
            className="d-flex justify-content-center"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">
                  <a className="animsition-link">
                    Home
                  </a>
                </Link>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                {this.props.title}{" "}
              </li>
            </ol>
          </nav>
          <h1 className="hero-heading">{this.props.label}</h1>
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <p className="lead text-muted mt-2">{this.props.desc}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
