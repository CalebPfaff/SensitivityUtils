import { useState } from 'react'

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center mt-16">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hey There!</h1>
          <p className="py-6">
            I wrote some tools to help you convert sensitivity values between different games, generate random
            sensitivities and more, check it out.
          </p>
          <p>
            If you're interested in how it was built, or want to give it a ⭐, check it out on
            <a href="https://github.com/Kalmarv/SensitivityUtils" className="link">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
