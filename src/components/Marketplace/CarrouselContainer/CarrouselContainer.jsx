import React, { useState } from 'react'
import Carrousel from '../../Carrousel/Carrousel'
import { ProductService } from '../../service/ProductService'
function CarrouselContainer() {

  const [product, setProduct] = useState(ProductService.getProductsData().slice(0,15))
  return (
    <Carrousel product={product}/>
  )
}

export default CarrouselContainer