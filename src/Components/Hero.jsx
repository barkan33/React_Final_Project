import Carousel from 'react-bootstrap/Carousel';
import Recommended from './Recommended';

const headingStyle = {
  color: 'white',
  textShadow: '5px 5px 8px #000000',
  fontFamily: 'Raleway, sans-serif',
  fontWeight: 'bold',
  textTransform: 'uppercase',
};

export default function Hero({ products }) {

  return (
    <>
      <Carousel className='heroCarousel'>
        <Carousel.Item>
          <img
            className="carouselImage d-block "
            src="https://pbs.twimg.com/media/GC4xy_lWgAAAY4F.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 style={headingStyle}>Special Event!</h1>
            <h4 style={headingStyle}>Join us for Comic Week! We have plenty of exciting events, special discounts, and exclusive offers.</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImage d-block "
            src="https://bleedingcool.com/wp-content/uploads/2020/06/comic-store-future-1200x900.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 style={headingStyle}>Exclusive Offer!</h1>
            <h4 style={headingStyle}>Don't miss out on the chance to get the latest comics at a discounted price! Only at our store!</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImage d-block "
            src="https://i.pinimg.com/originals/3f/ee/e0/3feee00303674b32ec9cbed63371a7c7.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 style={headingStyle}>Unusual Event!</h1>
            <h4 style={headingStyle}>
              Join us for an evening of autographs with renowned comic book authors! Exciting conversations and signatures await!
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Recommended products={products} />
    </>

  );
}
