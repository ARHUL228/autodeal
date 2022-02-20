import React, { Component } from 'react';
import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Car1 from '../assets/car1.jpg'
import Car2 from '../assets/car2.jpg'
import Car3 from '../assets/car3.jpg'

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <CarouselItem>
                    <img
                        className='d-block w-100'
                        src = {Car1}
                        alt = 'Car1'
                    />
                    <Carousel.Caption>
                         <h3>Машины Премиум Класса</h3>
                         <p>У нас только лучшие машины</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img
                        className='d-block w-100'
                        src = {Car2}
                        alt = 'Car2'
                    />
                    <Carousel.Caption>
                         <h3>Сотрудники</h3>
                         <p>Наши сотрудники лучшие в своем деле</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img
                        className='d-block w-100'
                        src = {Car3}
                        alt = 'Car3'
                    />
                    <Carousel.Caption>
                         <h3>Сдача в Аренду</h3>
                         <p>У нас вы можете не только арендовать машину, но и сдать свою</p>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        );
    }
}

export default CarouselBox;