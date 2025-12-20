'use client';
import ProductPage from '../components/ProductPage';
import { Suspense } from 'react';

const Product = () => {

    return (
        <div>
            <Suspense>
                <ProductPage/>   
            </Suspense>
        </div>
    );
};


export default Product;