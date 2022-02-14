import React from 'react'
import '../index.css'

function Card() {
  return (
    <div className='card'>
        <div className='card-img'>
        </div>
        <div className='card-data'> 
        <h1 className='card-header'>Sahil Bakshi</h1>
        <p className='card-para'>Frontend Developer</p>
        <p className='card-link'>sahilbakshi.website</p>
        <div className='card-buttons'>
        <button className='card-email'>Email</button>
        <button className='card-linkedin'>LinkedIn</button>
        </div>
        <div>
        <h2 className='card-heading'>About</h2>
        <p className='card-content'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h2 className='card-heading'>Interests</h2>
        <p className='card-content'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        <div className='card-icon'>
          <div className='card-twitter'></div>
          <div className='card-facebook'></div>
          <div className='card-instagram'></div>
          <div className='card-github'></div>
        </div>
        </div>
        </div>
        </div>

  )
}

export default Card