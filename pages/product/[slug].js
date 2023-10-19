import React from 'react'
import {client, urlForImage } from '@/sanity/lib/image'

const ProductDetails = ({product, products}) => {
  return(
    <div>
          <div className='product-detail-container'>
                <div>
                    <div className='image-container'>
                    <img 
                        src=''
                    />
                    </div>
                </div>
            </div>
    </div>
  )
}

export const getStaticProps = async({params:{slug}}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    const product = await client.fetch(query)
    const products = await client.fetch(productsQuery)
  
    return{
      props: {products, product} 
    }
  }
  

export default ProductDetails
