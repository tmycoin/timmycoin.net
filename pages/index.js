import React, { Component, Fragment }  from 'react';

import { Api } from '../src/utils/api';

import { formatTimestamp, formatBytes, getReadableCoins, getReadableDifficultyString } from '../src/utils/shortcuts';

import Layout, { SafeLayout } from '../src/components/layout';

export default class extends Component {
  static async getInitialProps({ req }) {
    const info = await Api.getInfo();
    const supply = parseFloat(info.already_generated_coins);

    return {
      supply
    }
  }
  render() {
    return (
      <SafeLayout>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-7 col-md-7 mx-auto mt-1 mb-5 text-center">
                <img src="/static/images/logo.png" />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-xl-8 text-center">
                <h2>Timmycoin (TMY) is Private, Untraceable, a CryptoCurrency.</h2>
                <p className="lead text-muted mt-4 mb-5">A Private Untraceable CryptoCurrency , Based on CryptoNote Technology.</p>
                <div className="row">
                  <div className="col-12 header-socials">
                    <a href="https://t.me/tmycoin" target="_blank">
                      <i className="fa fa-telegram" aria-hidden="true"></i>
                    </a>
                    <a href="https://twitter.com/tmycoin" target="_blank">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com/tmycoin" target="_blank">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div className="col-12">
                    <div className="mt-5 text-center">
                      <button type="button" className="btn btn-secondary btn-lg btn-block w-break">
                        Total Available Supply: <b>{this.props.supply.toFixed(2)} TMY</b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white">
          <div className="container">
            <div className="text-center">
              <h2>About Timmycoin (TMY)</h2>
              <div className="row">
                <div className="col-12 col-md-9 col-xl-9 mx-auto">
                  <p className="lead text-white mt-2">
                    Timmycoin (TMY) is a decentralized peer-to-peer exchange network and medium, that does not have centralized management or issuer and ensures privacy and anonymity of operations without intermediaries and regulators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="text-center">
              <h2>Timmycoin Features You Will Love</h2>
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <p className="lead text-muted mt-2">
                    Some of The Timmycoin (TMY) Features as a CryptoCurrency
                  </p>
                </div>
              </div>
            </div>
            <div className="integrations mt-5">
              <div className="row">
                <div className="col-lg-4">
                  <div className="box-bio text-center">
                    <h3 className="h4 mb-3">OpenSource</h3>
                    <p className="text-small font-weight-light lh-30">
                      Timmycoin is a decentralized Open Source project, released under the GPLv3 license, anyone can take a part in development process. Source Code is Available on GitHub.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box-bio active text-center">
                    <h3 className="h4 mb-3">Secure</h3>
                    <p className="text-small font-weight-light lh-30">
                      Untraceable truly anonymous Timmycoin transactions and encrypted information transfers in decentralized p2p network so All of your TMY transactions are unlinkable.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box-bio text-center">
                    <h3 className="h4 mb-3">Anonymous</h3>
                    <p className="text-small font-weight-light lh-30">
                      The anonymity of payments without the ability to track them, resistance to the blockchain analysis is provided by technology CryptoNote. Privacy is mandatory for all operations, in order for it to be effective.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SafeLayout>
    )
  }
}
