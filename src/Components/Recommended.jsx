import React from 'react';

import { Container, Typography, CardContent, CardMedia, Card } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';

export default function Recommended({ products }) {


    const printProductPerPage = (products) => {
        const indexOfFirstProduct = 0
        const indexOfLastProduct = 5
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

        const productElements = [];
        currentProducts.forEach(product => {
            const { title, author, artist, publisher, genre, coverImage, } = product;

            productElements.push(
                <Carousel.Item key={product.id} className='mt-1' style={{ paddingBottom: 15 }} >
                    <Card sx={{ width: "800px", maxWidth: "90vw", margin: "auto", boxShadow: "6px 5px 6px #00000037" }}>
                        <CardMedia
                            component="img"
                            height="500px"
                            image={coverImage}
                            alt={title}
                            onError={(e) => { e.target.src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg" }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>
                                {title}
                            </Typography>
                            <Typography component="div" variant="h5" color="text.secondary" >
                                <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }} >
                                    By: {author} {artist && `(${artist})`}
                                </div>
                                Publisher: {publisher}
                                <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }} >
                                    Genre: {genre.join(", ")}
                                </div>
                            </Typography>
                        </CardContent>
                    </Card>
                </Carousel.Item>
            )
        });

        return productElements;
    };




    return (
        <Container className='mt-4'>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: "var(--white)" }}>Recommended Comics</Typography>
            <Carousel variant="dark">
                {printProductPerPage(products)}
            </Carousel>
        </Container>
    );
}
