import React from 'react'

export default function Intro() {
  return (
    <div className='intro'>
      <h1>Laura Smith</h1>
      <p>Frontend Developer</p>
      <span>laurasmith.website</span>

      <div className='btns'>
        <button>
          <img src="Icon.png" alt="" />
          <span>Email</span>
        </button>
        <button>
        <img src="Vector.png" alt="" />
          <span>LinkedIn</span>
        </button>
      </div>
    </div>
  )
}
