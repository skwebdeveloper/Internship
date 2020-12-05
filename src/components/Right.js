import React from 'react'
import "./right.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
// ============================================
// Here I am using AOS library for animation 
// ============================================

const Right = () => {
    return (
        <div className="app__body__right">
        <div className="app__image">
        <img data-aos="fade-left" className="image__one" src="https://images-na.ssl-images-amazon.com/images/I/71t8IWeFXUL._SL1500_.jpg" alt="Aesop" />
        </div>
{/* =========================================== */}
{/* Here we can even Create a Component but for now I directly push data  */}
{/* =========================================== */}
        <div data-aos="fade-zoom-in"
             data-aos-easing="ease-in-back"
             data-aos-delay="300"
             data-aos-offset="0" 
        className="app__text">
            <p>Body & Hand | Body</p>
            <h1>Redemption Body Scrub</h1>
            <p style={{ letterSpacing:'0.2px', lineHeight:'20px' }}>A bracing blend of finely milled Pumice, Bamboo Stem and aromatic Pine Needle oil that sloughs away tired cells to leave skin polished and refreshed, perfectly prepared for hydration.</p>
            <hr />
            <p>Skin feel</p>
            <h4>Soft, smooth, refreshed</h4>
            <hr />
            <p>Aroma</p>
            <h4>Fresh, alpine, camphoric</h4>
            <hr />
            <p>Key ingredients</p>
            <h4>Bamboo Stem, Sage Leaf, Pine Needle</h4>
            <button className="long__button" type="submit">Add to your cart - $260.00</button>
        </div>
        </div>
    )
}

export default Right
