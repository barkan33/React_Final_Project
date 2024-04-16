import { useEffect, useState } from 'react';

import {Card,CardContent,CardMedia,Typography,Button} from '@mui/material';

export default function ProductCard({ addToCart, product, }) {
    const [soldOut, setSoldOut] = useState(false);

    useEffect(() => {
        setSoldOut(product.stock === 0);
    }, [product])

    const { id, title, author, artist, publisher, genre, price, coverImage, stock } = product;

    const handleAddToCart = () => {
        if (product.stock > 0)
            addToCart(id);
    }

    return (
        <Card sx={{ maxWidth: 270, margin: "auto", boxShadow: "6px 5px 6px #00000037" }}>
            <CardMedia
                component="img"
                height="180"
                image={coverImage}
                alt={title}
                onError={(e) => { e.target.src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg" }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>
                    {title}
                </Typography>
                <Typography component={'div'} variant="body2" color="text.secondary" >
                    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }} >
                        By: {author} {artist && `(${artist})`}
                    </div>
                    Publisher: {publisher}
                    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }} >
                        Genre: {genre.join(", ")}
                    </div>
                    Price: ${price} <br />
                    Stoke: {stock > 0 ? stock : "Sold Out"}
                </Typography>
                { <Button onClick={handleAddToCart} disabled={soldOut} variant="contained" sx={{ mt: 2, backgroundColor: 'var(--sectionBG)', color: 'white' }}>
                    {soldOut == false ? "Add to Cart" : "Sold Out"}
                </Button>}
            </CardContent>
        </Card >
    );
}