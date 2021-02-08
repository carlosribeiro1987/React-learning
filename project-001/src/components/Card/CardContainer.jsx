import React from 'react';
import CardItem from './CardItem';
import './Card.css'
import imgWaterfall from './../../../public/images/img-9.jpg';
import imgIslands from './../../../public/images/img-2.jpg';
import imgAtlantic from './../../../public/images/img-3.jpg';
import imgHimalaya from './../../../public/images/img-4.jpg';
import imgSahara from './../../../public/images/img-8.jpg';
function CardContainer() {
    return (
        <div className='card'>
            <h1>Check out these EPIC destinations</h1>
            <div className="card-container">
                <div className="card-wrapper">
                    <ul className="card-items">
                        <CardItem
                            src={imgWaterfall}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label='Adventure'
                            path='/services'
                        />                       
                        <CardItem
                            src={imgIslands}
                            text="Travel through the Islands od Bali in a Private Cruise"
                            label='Luxury'
                            path='/services'
                        />                        
                    </ul>
                    <ul className="card-items">
                        <CardItem
                            src={imgAtlantic}
                            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                            label='Mystery'
                            path='/services'
                        />                       
                        <CardItem
                            src={imgHimalaya}
                            text="Experience Football on Top of the Himilayan Mountains"
                            label='Adventure'
                            path='/services'
                        />      
                        <CardItem
                            src={imgSahara}
                            text="Ride through the Sahara Desert on a guided camel tour"
                            label='Adrenaline'
                            path='/services'
                        />                   
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardContainer
