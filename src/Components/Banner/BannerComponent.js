import React from 'react'
import './BannerComponent.css';
import background from '../../assets/background.jpg'
const BannerComponent = () => {
    return (

        <div className="bg-image"
          >
            <div className="row">
                <div className=" col-lg-6 col-sm-12">
                </div>
                <div className=" col-lg-6 col-sm-12">

                    <h1>Need Money?</h1>
                    <div className='btn-wrapper'>
                        <button type="button" className='bttn'>Button 1</button>
                        <button type="button" className="bttn ">Button 2</button>
                        <button type="button" className="bttn ">Button 3</button>
                        <button type="button" className="bttn ">Button 4</button>
                    </div>
                    <h3>Cash Loan  secured by real estate</h3>
                    <p>Cash Loan  secured by real estate</p>
                    <p>Cash Loan  secured by real estate</p>
                    <p>Cash Loan  secured by real estate</p>
                </div>
            </div>
        </div>
    )
}

export default BannerComponent