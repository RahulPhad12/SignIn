import logo from '../assets/logo.png'
import {MdOutlineMail} from 'react-icons/md';
import {BsGithub} from 'react-icons/bs'
import {FaFacebook}from 'react-icons/fa'
import '../styles/footer.css';

function footer (){
    return(
        <footer>

        <div className="footer-top">
          <div className="container-foot">
    
            <div className="footer-brand">
    
              <a href="#logo" className="logo">
                <img src={logo} alt="Funel logo"/>
              </a>
    
              <p className="footer-text">Follow us on</p>
    
              <ul className="social-list">
    
                <li>
                  <a href="https://github.com/RahulPhad12" className="social-link">
                    
                    <BsGithub size={25}/>
                  </a>
                </li>
    
                <li>
                  <a href="https://mail.google.com " className="social-link">
                   
                    <MdOutlineMail size={25}/>
                  </a>
                </li>
    
    
                <li>
                  <a href="https://www.facebook.com/rahul.phad.902" className="social-link">
                    
                    <FaFacebook size={25}/>
                  </a>
                </li>
    
              </ul>
    
            </div>
    
            <div className="footer-link-box">
    
              <ul className="footer-link-list">
    
                <li>
                  <h3 className="h4 link-title">Company</h3>
                </li>
    
                <li>
                  <a href='#footer' className="footer-link">About Us</a>
                </li>
    
                <li>
                  <a href="#footer" className="footer-link">Features</a>
                </li>
    
                <li>
                  <a href="#footer" className="footer-link">Pricing</a>
                </li>
    
              </ul>
    
              <ul className="footer-link-list">
    
                <li>
                  <h3 className="h4 link-title">Products</h3>
                </li>
    
                <li>
                  <a href="#footer" className="footer-link">Blog</a>
                </li>
    
                <li>
                  <a href="#footer" className="footer-link">Help Center</a>
                </li>
    
                <li>
                  <a href="#footer" className="footer-link">Contact</a>
                </li>
    
              </ul>
    
              <ul className="footer-link-list">
    
                <li>
                  <h3 className="h4 link-title">Resources</h3>
                </li>
    
                <li>
                  <a href="#footer" className="footer-link">FAQ’S</a>
                </li>
    
                <li>
                  <a href="#footer" className="footer-link">Testimonial</a>
                </li>
    
                <li>
                  <a href="#footer" className="footer-link">Terms & Conditions</a>
                </li>
    
              </ul>
    
              <ul className="footer-link-list">
    
                <li>
                  <h3 className="h4 link-title">Relevent</h3>
                </li>
    
                <li>
                  <a href="#footer" className="footer-link">Why</a>
                </li>
    
                <li>
                  <a href="#products" className="footer-link">Products</a>
                </li>
    
                <li>
                  <a href="#customer" className="footer-link">Customers</a>
                </li>
    
              </ul>
    
            </div>
    
          </div>
        </div>
    
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2022 <a href="#RahulPhad">@Rahul Phad</a> All right reserved
          </p>
        </div>
    
      </footer>
    )
}

export default footer;