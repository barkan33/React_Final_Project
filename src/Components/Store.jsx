import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import ProductCard from './ProductCard';

export default function Store({ addToCart, products }) {

    const [sortBy, setSortBy] = useState('title');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(8);

    const handleSortChange = (event) => {
        setSortBy(event.target.value);

        const sortProperty = event.target.value;
        products.sort((a, b) => {
            if (a[sortProperty] < b[sortProperty]) return -1;
            if (a[sortProperty] > b[sortProperty]) return 1;
            return 0;
        });
    };
    const handleProductsPerPage = (event) => {
        setProductsPerPage(event.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const printProductPerPage = (products) => {
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

        const productElements = [];
        currentProducts.forEach(product => {
            productElements.push(<Grid item xs={12} sm={6} md={3} key={product.id}><ProductCard addToCart={addToCart} product={product} /></Grid>)
        });

        return productElements;

    };



    return (
        <div style={{ maxWidth: "1000px", margin: "auto" }}>
            {/* Sorting Select */}
            <h5 style={{ display: "inline", color: "white" }} >Sort by:</h5>
            <Select value={sortBy} onChange={handleSortChange} style={{ height: "35px", margin: "10px 0px 25px 15px", color: "white" }} >
                <MenuItem value="title">Name</MenuItem>
                <MenuItem value="price">Price</MenuItem>
                <MenuItem value="genre">Category</MenuItem>
            </Select>
            <h5 style={{ marginLeft: 25, display: "inline", color: "white" }} >Item per Page:</h5>
            <Select value={productsPerPage} onChange={handleProductsPerPage} style={{ height: "35px", margin: "10px 0px 25px 15px", color: "white" }} >
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="16">16</MenuItem>
                <MenuItem value="32">32</MenuItem>
                <MenuItem value="64">64</MenuItem>
            </Select>


            {/* Product Grid */}
            <Grid container spacing={2} className='mb-4'>
                {printProductPerPage(products)}
            </Grid>

            {/* Pagination */}
            <Grid container justifyContent="center" className='mb-3'>
                <Pagination
                    count={Math.ceil(products.length / productsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            </Grid>
        </div>
    );
}

