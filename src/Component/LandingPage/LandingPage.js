import './LandingPage.css';
import Circle from './circle';
import downImage from '../Assets/downpartImage.png';
import middleImage1 from '../Assets/middleImage1.png';
import middleImage2 from '../Assets/middleImage2.png';

const LandingPage = () => {

    const test = () => {
        console.log('test');
    }
    return (
        <div className='background-container'>
            <div className='background-top-container'>
                <div className="navbar-top">
                    <div className="navbar-circle"><Circle /></div>
                    <div className='navbar-top-right-side'>
                        <button type="button" onClick={test} className="btn"><h4 className='font-beauty'>Home</h4></button>
                        <button type="button" onClick={test} className="btn"><h4 className='font-beauty'>Shop</h4></button>
                        <button type="button" onClick={test} className="btn">
                            <h4><svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="white" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                            </h4>
                        </button>
                    </div>    
                </div>
                <div className='background-middle-part'>
                    <div className='description-style'>
                        <h2 className='font-beauty mt-5 mb-3'> From humans to</h2>
                        <h2 className='font-beauty mt-3 mb-3'> earth, with love</h2>
                        <p className='font-beauty'> At earthy we care for our beloved humans and <br />
                            our sweet little earth alike . We create a bunch of< br />
                            sustainable  products which are not just <br />
                            harmless and healthy to use for us but are also<br /> 
                            lite on our mother earth. Joining hands with us is,<br />
                            literally a step towards a healthy and better <br />
                            planet .
                        </p>
                        <div className='description-button-container'>
                            <button type="button" onClick={test} className="btn description-button description-button1"><h5>Explore Products</h5></button>
                            <button type="button" onClick={test} className="btn description-button description-button2"><h5>Know More</h5></button>
                        </div>
                    </div>
                    <div className="image-container1">
                        <img src={middleImage1} alt="there is problem in upload" className='image1'/>
                        <div className='img-shadow img-shadow-position1'></div>
                    </div>
                    <div className= "image-container2">
                        <img src={middleImage2} alt="there is problem in upload" className='image2'/>
                        <div className='img-shadow img-shadow-position2'></div>
                    </div>   
                </div>
            </div>
            <div className='background-down-container'>
                <div className="down-image-container">
                    <img src={downImage} className="image3" alt="there is problem in upload"/>
                </div>
            </div>            
       </div>
    );   
}
export default LandingPage;