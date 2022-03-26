import { Children } from 'react'
import './layout.css'
import FooterComponent from '../footer/FooterComponent'
import HeaderComponent from '../header/HeaderComponent'

const LayoutComponent = ({children}) => {
  return (
    <div className='layout'>
        <HeaderComponent />
        <div className="layout-categories">
            <span className="layout-categories-item">Women wears</span>
            <span className="layout-categories-item">Men wears</span>
            <span className="layout-categories-item">Children</span>
            <span className="layout-categories-item">Two pieced</span>
            <span className="layout-categories-item">Special Acessories</span>
        </div>
        {children}
        <FooterComponent />
    </div>
  )
}

export default LayoutComponent