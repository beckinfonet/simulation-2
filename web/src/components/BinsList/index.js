import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'

const BinsList = ({ bins, shelf }) => ['1', '2', '3', '4'].map((num, index) => {
  const existsInBins = bins.indexOf(num) !== -1

  const name = existsInBins ? `Bin ${num}` : '+ Add inventory to bin'
  const backgroundColor = existsInBins ? 'red' : '#ffb8af'

  return (
    <Button
      key={`LANDING_BUTTON_${index}`}
      name={name}
      backgroundColor={backgroundColor}
      color='white'
      redirectTo={`/shelf/${shelf}/${num}`}
    />
  )
})

BinsList.propTypes = {
  shelf: PropTypes.string.isRequired,
  bins: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default BinsList
