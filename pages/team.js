import React, { Component, Fragment } from "react";

import Layout from "../src/components/layout";

const DEVELOPERS = [
  {
    name: 'Timmy',
    title: 'CEO',
    avatar: '/static/images/avatars/timmy.jpg',
    socials: [
      'https://github.com/tmycoin',
      'https://www.linkedin.com/in/tmycoin',
      'https://twitter.com/tmycoin'
    ]
  },
  {
    name: 'Yaşar İçli',
    title: 'Core Developer',
    avatar: '/static/images/avatars/yasar.jpeg',
    socials: [
      'https://github.com/yasaricli',
      'https://www.linkedin.com/in/yasaricli',
      'https://twitter.com/yasaricli'
    ]
  },
  {
    name: 'Onur Bayraktaroğlu',
    title: 'Sr. Frontend Developer',
    avatar: '/static/images/avatars/onur.jpeg',
    socials: [
      'https://github.com/onurbayraktaroglu',
      'https://www.linkedin.com/in/onur-bayraktaroglu-52286229/',
      'https://twitter.com/mrbayraktaroglu'
    ]
  },
  {
    name: 'Ahmet Emre Kırgıl',
    title: 'Sr. Frontend Developer',
    avatar: '/static/images/avatars/ahmet.jpeg',
    socials: [
      'https://github.com/aekirgil',
      'https://www.linkedin.com/in/aekirgil',
      'https://twitter.com/QIRGIL'
    ]
  }
]

export default class extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
        <div className="team-section padding80">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <div className="sec-title">
                  <h2 className="pb-3">Timmycoin Team</h2>
                  <h3>Timmycoin team own experts in every field.</h3>
                </div>
                <div className="divider-line text-center" />
              </div>
            </div>
            <div className="row text-center">
              {DEVELOPERS.map((developer, i) => {
                const [github, linkedin, twitter] = developer.socials;

                return (
                  <div className="col-auto mb-5" key={i}>
                    <div className="team-box">
                      <div className="team-img">
                        <img src={developer.avatar} />
                      </div>
                      <div className="team-title">
                        <h3>{developer.name}</h3>
                        <h4>{developer.title}</h4>
                        <div className="team-title__socials">
                          <a href={github} target="_blank">
                            <i className="fa fa-github" aria-hidden="true"></i>
                          </a>
                          <a href={linkedin} target="_blank">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                          </a>
                          <a href={twitter} target="_blank">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        </div>
      </Layout>
    );
  }
}
