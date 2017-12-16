import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class Product extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: this.props.binInfo.name,
      price: `$${this.props.binInfo.price}`,
      isEdit: false
    }
  }

  handleState = type => ({ target: { value } }) => {
    const newState = (type === 'price' && this.state.price.length === 0)
      ? `$${value}`
      : value

    this.setState({ [type]: newState })
  }

  deleteBin = () => axios.delete(`/shelf/${this.props.shelf}/${this.props.binInfo.bin}`)
    .then(console.log)
    .catch(console.log)

  save = () => axios.put(`/shelf/${this.props.shelf}/${this.props.binInfo.bin}`)
    .then(console.log)
    .catch(console.log)

  render () {
    const { name, price } = this.state
    const { binInfo } = this.props

    return (
      <div>
        <h1>Bin {binInfo.bin}</h1>

        <div>
          <p>Name</p>

          <input type='text' value={name} onChange={this.handleState('name')} />
        </div>

        <div>
          <p>Price</p>

          <input type='text' value={price} onChange={this.handleState('price')} />
        </div>

        <button onClick={this.deleteBin}>Delete</button>
        <button onClick={this.save}>Save</button>
        {/*
          {this.props.isEdit
            ? <button onClick={this.edit}>Edit</button>
            : <button onClick={this.save}>Save</button>
          }
        */}
      </div>
    )
  }
}

Product.propTypes = {
  binInfo: PropTypes.shape({
    bin: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  shelf: PropTypes.string.isRequired
}

Product.defaultProps = {
  binsInfo: {
    name: '',
    price: ''
  }
}

export default Product
