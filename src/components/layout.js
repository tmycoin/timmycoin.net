import React, { Component, Fragment }  from 'react'

// STYLES
import '../../node_modules/bootstrap/scss/bootstrap.scss';
import '../../sass/templates/style.default.scss';
import '../../sass/styles.scss';

// Particles
import Header from './particles/header';
import Footer from './particles/footer';
import Hero from './particles/hero';

if (process.browser) {
  const jQuery = require('jquery');
  window.$ = jQuery;

  // popper and bootstrap
  require('popper.js');
  require("bootstrap");
}

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <section>
          {this.props.children}
        </section>
        <Footer />
      </Fragment>
    )
  }
}

export class SafeLayout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {this.props.children}
        <Footer />
      </Fragment>
    )
  }
}
