import React from 'react'
import'./Hero.css'

const Hero = () => {
  return (
    <div className='hcontainer'>
        <div className="maintext">
            <h1 className='heading1'>hello! Its Meows and Woofs</h1>
            <br />
            <p>Owners of dogs will have noticed that, if you provide them with food and water and shelter and affection, they will think you are God.</p>
            <p>-Crystopher Hychens</p>
            <p>"Cats and humans have been partners for over ten thousand years. And what you realize when you've lived with a cat for a long time is that we may think we own them, but that's not the way it is. They simply allow us the pleasure of their company. "</p>
            <p>-Genki Kawamura</p>
        </div>
        <div className="hero">
            <img src="./dogs-images/hero1.avif" alt="" />
        </div>
    </div>
  )
}

export default Hero
