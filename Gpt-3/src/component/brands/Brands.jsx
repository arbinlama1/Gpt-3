import React from 'react'
import './brands.css'
import { google, slack, atlassian, dropbox, shopify } from './import';
const Brands = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropdox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brands
