import React from "react"
import Helmet from "react-helmet"

import Layout from "../layout"
import config from "../../data/SiteConfig"

const ContactPage = () => {
  return (
    <Layout>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <div className="container contact">
        <h1>Get in touch</h1>
        <p>
          Being in Software Development for quite some time, I find Javascript,
          Designing Back-ends and a few DevOps stuff to be in my comfort zone.
        </p>
        <div className="form">
          <div className="full-form">
            <div className="column first">
              <p>
                If you&rsquo;d like to make an enquiry, please feel free to send
                me a message and I&rsquo;ll get back to you as soon as possible.
              </p>
              <p>
                If you prefer to contact directly, send me an email on{" "}
                <a href="mailto:skarif2@gmail.com">skarif2@gmail.com</a>
              </p>
            </div>
            <form className="column last">
              <div className="field">
                <input className="input" placeholder="Name" />
              </div>
              <div className="field">
                <input className="input" placeholder="Email" />
              </div>
              <div className="field">
                <textarea className="input" placeholder="Message" />
              </div>
              <button className="button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <p>You can also find me on:</p>
        <div className="web-link">
          <p>
            <strong>GitHub</strong>:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/skarif2"
            >
              github/skarif2
            </a>
          </p>
          <p>
            <strong>Facebook</strong>:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.com/skarif2"
            >
              fb/skarif2
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
