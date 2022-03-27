import React, { useState, useMemo } from 'react'

import GenerallBanner from "./assets/banner";


class Cart extends React.Component {
    render() {


        let total_count = 0;
        const cart_content = () => {
            let items = []
            for (let i = 0; i < 3; i++) {
                total_count += 200;
                items.push(
                    <tr>
                        <td>
                            <div class="media">
                                <div class="d-flex">
                                    <img src="./assets/img/cart.jpg" alt="" />
                                </div>
                                <div class="media-body">
                                    <p>Product Title</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <h5>$100</h5>
                        </td>
                        <td>
                            <div class="product_count">
                                <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:"
                                    class="input-text qty" />
                                <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                    class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                                <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                    class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                            </div>
                        </td>
                        <td>
                            <h5>$200</h5>
                        </td>
                    </tr>
                )
            }
            return items;
        }

        const countryList = () => {
            let countries = []
            for (let i = 0; i < 3; i++) {
                countries.push(
                    <option value={"Country " + (i + 1)}>Country {i + 1}</option>
                )
            }
            return countries;
        }
        const stateList = () => {
            let states = []
            for (let i = 0; i < 3; i++) {
                states.push(
                    <option value={"State" + (i + 1)}>State {i + 1}</option>
                )
            }
            return states;
        }
        return (
            <>
                <GenerallBanner title="Shopping Cart" page_type="Cart" />

                <section class="cart_area">
                    <div class="container">
                        <div class="cart_inner">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart_content()}
                                        <tr class="bottom_button">
                                            <td>
                                                <a class="gray_btn" href="#">Update Cart</a>
                                            </td>

                                            <td></td>

                                            <td>
                                                <div class="cupon_text d-flex align-items-center">
                                                    <input type="text" placeholder="Coupon Code" />
                                                    <a class="primary-btn" href="#">Apply</a>
                                                    <a class="gray_btn" href="#">Close Coupon</a>
                                                </div>
                                            </td>

                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>

                                            </td>
                                            <td>

                                            </td>
                                            <td>
                                                <h5>Subtotal</h5>
                                            </td>
                                            <td>
                                                <h5>${total_count}</h5>
                                            </td>
                                        </tr>
                                        <tr class="shipping_area">
                                            <td>

                                            </td>
                                            <td>

                                            </td>
                                            <td>
                                                <h5>Shipping</h5>
                                            </td>
                                            <td>
                                                <div class="shipping_box">
                                                    <ul class="list">
                                                        <li><a href="#">Flat Rate: $5.00</a></li>
                                                        <li><a href="#">Free Shipping</a></li>
                                                        <li><a href="#">Flat Rate: $10.00</a></li>
                                                        <li class="active"><a href="#">Local Delivery: $2.00</a></li>
                                                    </ul>
                                                    <h6>Calculate Shipping <i class="fa fa-caret-down" aria-hidden="true"></i></h6>
                                                    <select class="shipping_select">
                                                        {countryList()}
                                                    </select>
                                                    <select class="shipping_select">
                                                        {stateList()}
                                                    </select>
                                                    <input type="text" placeholder="Postcode/Zipcode" />
                                                    <a class="gray_btn" href="#">Update Details</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="out_button_area">
                                            <td>

                                            </td>
                                            <td>

                                            </td>
                                            
                                            <td>
                                                <div class="checkout_btn_inner d-flex align-items-center">
                                                    <a class="gray_btn" href="#">Continue Shopping</a>
                                                    <a class="primary-btn" href="#">Proceed to checkout</a>
                                                </div>
                                            </td><td>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default Cart;