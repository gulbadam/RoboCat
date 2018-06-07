import React from 'react';
import "../styles/Card.css"
const Card= ({name, email, id}) => (
    <div className="tc bg-light-green grow dib  mw5 f5-ns  black-95 pa3 ph2 ma2 ba b--light-silver shadow-3 br2 pointer">
        <img alt="photo" src={`https://robohash.org/${id}.png?set=set4`} />
    <div>
    <h2>{name}</h2>
    <p>{email}</p>
  
    </div>
    </div>)
 
export default Card;