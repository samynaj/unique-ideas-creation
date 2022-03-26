import './footer.css'

const FooterComponent = () => {
  return (
    <div className='footer'>
      <div className="footer-left">
        <img src='assets/logo.jpg' alt='logo' className="footer-logo" />
      </div>
      <div className="footer-center">
        <div className="footer-navbar">
          <span className="footer-navbar-item">Home</span>
          <span className="footer-navbar-item">Products</span>
          <span className="footer-navbar-item">About Us</span>
          <span className="footer-navbar-item">Contact</span>
        </div>
      </div>
      <div className="footer-right">
        <span className="footer-navbar-item">Privacy policy</span>
        <span className="footer-navbar-item">Terms and conditions</span>
      </div>
    </div>
  )
}

export default FooterComponent