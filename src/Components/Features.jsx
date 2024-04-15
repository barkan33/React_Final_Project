import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { FaStar } from 'react-icons/fa';
import { Card, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'; // Assuming you have react-bootstrap installed

export default function Features() {
    const featuresData = [
        {
            title: 'Popular Series',
            items: ['Marvel Comics', 'DC Comics', 'Image Comics', 'Dark Horse Comics', 'Boom! Studios']
        },
        {
            title: 'New Releases',
            items: ['Spider-Man #1', 'Batman: Detective Comics #1000', 'The Walking Dead Deluxe #1', 'X-Men: Inferno #1', 'Justice League #59']
        },
        {
            title: 'Exclusive Variant Covers',
            items: ['Spider-Man #1 Exclusive Variant', 'Batman #100 Exclusive Variant', 'Superman #1 Exclusive Variant', 'Avengers #1 Exclusive Variant', 'Wonder Woman #1 Exclusive Variant']
        },
       
        {
            title: 'Special Collections',
            description: 'Hand-picked collections based on themes or genres.'
        }, 
        {
            title: 'Manga & Anime',
            items: ['Popular series from Japan and beyond.', 'Explore diverse genres and art styles.']
        }, 
        {
            title: 'Events & Signings',
            description: 'Meet your favorite creators and artists at our exciting events.'
        },
        {
            title: 'Reviews & Ratings',
            reviews: [
                { rating: 5, text: '"Great selection of comics and fast shipping!"' },
                {
                    rating: 5,
                    text: '"Wonderful store! I\'ve been collecting comics for years, and this place has everything I need. The selection is amazing, and the staff are always helpful. Shipping is fast and packaging is secure. Highly recommended!"'
                }
            ]
        }
    ];
    return (
        <Container sx={{ color: "#eeeeff", py: 5 }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
                Featured Comics
            </Typography>
            <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
                {featuresData.map((feature, index) => (
                    <Grid item xs={12} md={4} key={index} sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            borderRadius: '8px',
                            padding: '20px',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            textAlign: 'center',
                            boxShadow: "6px 5px 6px #00000037",
                            height: "250px",
                            overflow: "none"
                        }}>
                            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                                {feature.title}
                            </Typography>
                            {feature.items ? (
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {feature.items.map((item, itemIndex) => (
                                        <li key={itemIndex} sx={{ mb: 1 }}>
                                            <Typography variant="body1">{item}</Typography>
                                        </li>
                                    ))}
                                </ul>
                            ) : feature.description ? (
                                <Typography variant="body1">{feature.description}</Typography>
                            ) : feature.reviews ? (
                                <Carousel variant="dark" interval={null} controls={true} style={{ height: "200px" }} >
                                    {feature.reviews.map((review, reviewIndex) => (
                                        <Carousel.Item key={reviewIndex}>
                                            <Typography variant="body1" >
                                                {[...Array(review.rating)].map((_, starIndex) => (
                                                    <FaStar key={starIndex} color="gold" style={{ marginRight: '0.25rem' }} />
                                                ))}
                                                <br />
                                                {review.text}
                                            </Typography>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            ) : null}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>

    );
}


