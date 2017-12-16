import React from 'react'

import Button from 'components/Button'

const Landing = () => (
  <div>
    {['A', 'B', 'C', 'D'].map((letter, index) => (
        <Button
          key={`LANDING_BUTTON_${index}`}
          name={`Shelf ${letter}`}
          backgroundColor='red'
          color='white'
          redirectTo={`/shelf/${letter}`}
        />
    ))}
  </div>
)

export default Landing
