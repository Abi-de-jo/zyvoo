import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const Fandom = () => {

    const { products } = useContext(ShopContext);

    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {

        const bestSeller = products.filter((item) => (item.bestseller))

        setBestSeller(bestSeller.slice(5, 10))
    }, [])
    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8 '>

                <Title text1={"SHOP"} text2={"COMICON"} />

                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-gray-700'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, amet?

                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 md:grid-cols-4 gap-4 gap-y-7'>

                {
                    bestSeller.map((item, index) => (
                        <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))
                }

            </div>


        </div>
    )
}

export default Fandom