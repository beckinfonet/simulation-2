import React, { Component } from 'react'
import axios from 'axios'
import ld from 'lodash'

import BinsList from 'components/BinsList'
import Loading from 'components/Loading'
import Product from 'components/Product'

class Shelf extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true,
      bins: []
    }
  }

  componentDidMount () {
    const { shelf } = this.props.match.params

    axios.get(`http://localhost:4000/shelf/${shelf}`)
      .then(({ data }) => {
        const bins = ld.uniqBy(data, 'bin')

        this.setState({ isLoading: false, bins })
      })
  }

  render () {
    const { isLoading, bins } = this.state
    const { shelf, bin } = this.props.match.params

    if (isLoading) return <Loading />
    return (
      <div>
        <h1>Shelf {shelf}</h1>

        {bin
          ? (
            <Product
              binInfo={bins[bins.findIndex(val => val.bin === bin)]}
              shelf={shelf}
            />
          )
          : (
            <BinsList bins={bins.map(({ bin }) => bin)} shelf={shelf} />
          )
        }
      </div>
    )
  }
}

export default Shelf
