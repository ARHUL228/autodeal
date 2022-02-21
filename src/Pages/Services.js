import React, { Component } from 'react';
import './Services.css'

class Services extends Component {
    render() {
        return (
            <div>
                <div className="product-item">
                    <div className="product-img">
                        <a href="">
                            <img src="https://kimuracars.com/img/autocatalog/periods2/toyota_supra_172.jpg" />
                        </a>
                    </div>
                    <div className="product-list">
                        <h3>Toyota Supra</h3>
                        <span className="price">$ 200</span>
                        <div className="actions">
                            <div className="add-to-cart">
                                <a href="" className="cart-button">Арендовать</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <div className="product-img">
                        <a href="">
                            <img src="https://www.pngplay.com/wp-content/uploads/13/Nissan-GTR-35-No-Background.png" />
                        </a>
                    </div>
                    <div className="product-list">
                        <h3>Gtr r35</h3>
                        <span className="price">$ 300</span>
                        <div className="actions">
                            <div className="add-to-cart">
                                <a href="" className="cart-button">Арендовать</a>
                            </div>
                        </div>
                    </div>
                </div>  <div className="product-item">
                    <div className="product-img">
                        <a href="">
                            <img src="http://tuninga.ru/upload/iblock/dce/aut_45_iz0286_01p.jpg" />
                        </a>
                    </div>
                    <div className="product-list">
                        <h3>Porche</h3>
                        <span className="price">$ 250</span>
                        <div className="actions">
                            <div className="add-to-cart">
                                <a href="" className="cart-button">Арендовать</a>
                            </div>
                        </div>
                    </div>
                </div>  <div className="product-item">
                    <div className="product-img">
                        <a href="">
                            <img src="https://kimuracars.com/img/autocatalog/periods2/toyota_supra_172.jpg" />
                        </a>
                    </div>
                    <div className="product-list">
                        <h3>Toyota Supra</h3>
                        <span className="price">$ 200</span>
                        <div className="actions">
                            <div className="add-to-cart">
                                <a href="" className="cart-button">Арендовать</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Services;