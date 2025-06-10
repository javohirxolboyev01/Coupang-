import React, { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import InfoSection from '../../components/InfoSection/InfoSection'
import Category from '../../components/Category/Category'
// import CategoryPage from '../../components/CategoriesPage/CategoryPage'
import { setProducts } from '../../redux/productSlice/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { mocData } from '../../mock/categorys'
import ProductCard from '../../components/ProductCard/ProductCard'
const Home = () => {
  const dispatch =useDispatch()
  const product = useSelector(state=>state.product)


  useEffect(()=>{
    dispatch(setProducts(mocData))
  }, [])

  return (
    <div className=' px-4 md:px-16 lg:px-24'>
      <div>
        <Hero/>
        {/* <CategoryPage/> */}
        <InfoSection/>
        <Category/>
        <div className='container mx-auto py-12'>
          <h1 className='text-2xl font-bold mb-6 text-center'>Top Products</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
           {
            product.products.slice(0,5).map(((product)=>(
              <ProductCard product = {product}/>
            )))
           }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
