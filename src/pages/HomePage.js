import React from 'react'
import ProductListing from '../features/ProductListing'

import data from '../data/products.json'

const HomePage = props => (
  <div>
    <h2>Homepage</h2>
    <ProductListing products={data.products} />
  </div>
)

export default HomePage