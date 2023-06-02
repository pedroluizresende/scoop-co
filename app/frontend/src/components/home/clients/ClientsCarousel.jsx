import Carousel from 'react-bootstrap/Carousel';

function ClientsCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
          alt=" one"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
          alt="Two"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ClientsCarousel;
