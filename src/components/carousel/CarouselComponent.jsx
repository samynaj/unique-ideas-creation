import {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'

const data = [
    {
     image: 'assets/carousel-1.jpg', 
     caption:"Caption",
     description:"Description Here"
    },
    {
      image: 'assets/carousel-2.png', 
      caption:"Caption",
      description:"Description Here"
     },
     {
      image: 'assets/carousel-3.jpg', 
      caption:"Caption",
      description:"Description Here"
     } 
  ]

const CarouselComponent = () => {
    const [index, setIndex] = useState(0)

    const handleSelect = (e, selectedIndex) => {
        setIndex(selectedIndex)
    }
  return (
    <Carousel id='carousel' activeIndex={index} onSelect={handleSelect} >
        {data.map((slide, i) => {
            return (
            <Carousel.Item>        
                <img
                    className="d-block w-100 h-50"
                    src={slide.image}
                    alt="slider"
                />
                <Carousel.Caption>
                    <h3>{slide.caption}</h3>
                    <p>{slide.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            )
        })}
    </Carousel>
  )
}

export default CarouselComponent