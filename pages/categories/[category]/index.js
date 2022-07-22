import React from 'react'
import { useRouter } from 'next/router'
import Container from '../../../components/Container';
import CategoriesProducts from '../../../components/CategoriesProducts';
import Head from 'next/head';


const CategoryPage = ({ error='', products=[], cat }) => {
    const router = useRouter();
    const { category } = router.query;
    const decodedCategory = decodeURI(category);
    const PageHead = <Head>
    <title>{decodedCategory} Products</title>
    <meta name="description" content={`${decodedCategory} Appear here.`} />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    if(router.isFallback) {
        return (
            <>
            {PageHead}
            <Container>
                <h1>Loading...</h1>
            </Container>
            </>
        )
    }
    
    return (
        <>
            {PageHead}
            <Container>
                    <div className='flex items-center justify-between py-8 w-full'>
                        <CategoriesProducts text={decodedCategory} showFilters={false} products={products} /> 
                    </div>
            </Container>
        </>
    )
}

export async function getStaticProps({ params }) {
    const category = params.category; 
    try {
        const response = await fetch('http://localhost:3000/api/db/data');
        if(!response.ok) throw Error('Something Went wrong! please refresh the page or try later.')
        const dataJson = await response.json();
        return {
            props: {
                dataJson,
                error: false,
                products: dataJson.products.filter( product => category === 'all' ? product : product.cat === category )
            }
        }
    } catch(err) {
        return {
            props: {
                error: true,
                errMsg: 'Something Went wrong! please refresh the page or try later.',
            }
        }
    }
}


export async function getStaticPaths() {
    const response = await fetch('http://localhost:3000/api/db/data');
    const dataJson = await response.json();

    const paths = dataJson.categories.map(path => ({ params: { 'category': path.cat },}));
    paths.unshift({ params: { 'category': 'all'}})
    return { paths, fallback: false }
}

export default CategoryPage