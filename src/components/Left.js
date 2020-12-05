import React from 'react'
import "./left.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Left = () => {
    return (
        <div className="app__left">
        <div className="header col">
        <h1 className="app__left__heading">Aesop</h1>
        </div>
        <div className="app__image col">
        <img data-aos="fade-left" className="image__one" src="https://images-na.ssl-images-amazon.com/images/I/71t8IWeFXUL._SL1500_.jpg" alt="Aesop" />
        </div>
        <div data-aos="fade-zoom-in"
             data-aos-easing="ease-in-back"
             data-aos-delay="200"
             data-aos-offset="0" 
             className="app__text col">
            <p>Body & Hand | Body</p>
            <h1>Redemption Body Scrub</h1>
            <h5>A bracing blend of finely milled Pumice, Bamboo Stem and aromatic Pine Needle oil that sloughs away tired cells to leave skin polished and refreshed, perfectly prepared for hydration.</h5>
            <hr className="invisible" />
            <p >Skin feel</p>
            <h4 >Soft, smooth, refreshed</h4>
            <hr className="invisible" />
            <p>Aroma</p>
            <h4>Fresh, alpine, camphoric</h4>
            <hr className="invisible" />
            <p>Key ingredients</p>
            <h4>Bamboo Stem, Sage Leaf, Pine Needle</h4>
            <button className="long__button" type="submit">Add to your cart - $260.00</button>
        </div>
        </div>
    )
}

export default Left
