import './home.css'
import CarouselComponent from '../../components/carousel/CarouselComponent'
import LayoutComponent from '../../components/layout/LayoutComponent'
import CategoryComponent from '../../components/category/CategoryComponent'

const Home = () => {
  return (
    <LayoutComponent>
        {/* <CarouselComponent /> */}
        <div className="image-container">
          <img src="assets/carousel-6.png" alt="" className="carousel-img" />
          <img src="assets/carousel-2.png" alt="" className="carousel-img" />
          <img src="assets/carousel-4.png" alt="" className="carousel-img" />
        </div>
        <CategoryComponent />

    </LayoutComponent>
  )
}

export default Home