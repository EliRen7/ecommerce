import React from 'react'
import {client } from '../../sanity/lib/client'
import {urlForImage} from '../../sanity/lib/image'
import {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ProductDetails = ({product, products}) => {
  const {image, name, details, price} = product
  const [index, setIndex] = useState(0);
  return(
    <div> 
          <div className='product-detail-container'>
                <div>
                    <div className='image-container'>
                    <img 
                        src={urlForImage(image && image[index])}
                        className='product-detail-image'
                    />
                    </div>
                    {/* <div className='small-images-container'>
                      {image?.map((item, i) => (
                        <img 
                          src={urlForImage(item)}
                          className=''
                        />
                      ))}
                    </div> */}
                    <div className='product-details-desc'>
                        <h1>{name}</h1>
                        <div className='review'>
                          <div>
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiOutlineStar />
              
                          </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}


export const getStaticPaths = async() => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current 
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
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
