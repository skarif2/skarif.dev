import React from "react"
import { FacebookProvider, ShareButton } from "react-facebook"

const Newslatter = () => {
  const appId = process.env.FB_APP_ID
  console.log(appId)
  return (
    <div className="newsletter">
      <div className="top-section">
        <div className="column first">
          <h3>Join my Newsletter</h3>
          <p>Subscribe to the newsletter and get my latest content.</p>
          <p className="spam-message">
            I won&rsquo;t send you any spam, ads or affiliate links.
          </p>
        </div>
        <form className="column last">
          <div className="field">
            <input className="input" placeholder="Name" aria-label="name" />
          </div>
          <div className="field">
            <input className="input" placeholder="Email" aria-label="email" />
          </div>
          <button className="button" type="submit">
            Subscribe
          </button>
        </form>
      </div>
      <div className="bottom-section">
        <img
          className="newsletter-selfie"
          alt="profile"
          src="../../images/profile.jpeg"
        />
        <div className="details">
          <h2>Sk Arif</h2>
          <p>Node.js Dev, Loves Elixir, FP & Open Source</p>
        </div>
        <FacebookProvider appId="701450546994086">
          <ShareButton data-href="https://skarif.dev/">Share</ShareButton>
        </FacebookProvider>
      </div>
    </div>
  )
}

export default Newslatter
