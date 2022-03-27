import React from "react";
import { Link } from "react-router-dom";

import GenerallBanner from "./assets/banner";
import WeeklyDeals from "./assets/weekly_deals";


class Category extends React.Component  {
    render() {
        const product = {
            title: "product title",
            new_price: "100",
            old_price: "200",
            imgUrl: "./assets/img/product/p1.jpg"
        };
       
        const categories_filter = () => {
            let categories = []
            for (let i = 0; i < 12; i++) {
                categories.push(
                    <li class="main-nav-list"><a data-toggle="collapse" href={"#c" + i} aria-expanded="false" aria-controls={"c" + i}><span
                        class="lnr lnr-arrow-right"></span>Category<span class="number">({i + 1})</span></a>
                        <ul class="collapse" id={"c" + i} data-toggle="collapse" aria-expanded="false" aria-controls={"c" + i}>
                            {subcategory(i + 1)}
                        </ul>
                    </li>
                )
            }
            return categories;

        }

        const subcategory = (n) => {
            let subcategories = []
            for (let i = 0; i < 5; i++) {
                subcategories.push(
                    <li class="main-nav-list child"><a href="#">Subcategory<span class="number">({n + "," + i})</span></a></li>
                )
            }
            return subcategories;
        }

        const brands_filter = () => {
            let brands = []
            for (let i = 0; i < 5; i++) {
                brands.push(
                    <li class="filter-list"><input class="pixel-radio" type="radio" id="apple" name="brand" /><label for="apple">Brand<span>({i + 1})</span></label></li>
                )
            }
            return brands;
        }

        const color_filter = () => {
            let colors = []
            for (let i = 0; i < 5; i++) {
                colors.push(
                    <li class="filter-list"><input class="pixel-radio" type="radio" id="black" name="color" /><label for="black">Color<span>({i + 1})</span></label></li>
                )
            }
            return colors;
        }
        const products_area = () => {
            let products = []

            for (let i = 0; i < 6; i++) {
                products.push(
                    <div class="col-lg-4 col-md-6">
                        <div class="single-product">
                            <img class="img-fluid" src={product.imgUrl} alt="" />
                            <div class="product-details">
                                <h6>{product.title}</h6>
                                <div class="price">
                                    <h6>${product.new_price}</h6>
                                    <h6 class="l-through">${product.old_price}</h6>
                                </div>
                                <div class="prd-bottom">

                                    <a href="" class="social-info">
                                        <span class="ti-bag"></span>
                                        <p class="hover-text">add to bag</p>
                                    </a>
                                    <a href="" class="social-info">
                                        <span class="lnr lnr-heart"></span>
                                        <p class="hover-text">Wishlist</p>
                                    </a>

                                    <Link to="/product" class="social-info">
                                        <span class="lnr lnr-move"></span>
                                        <p class="hover-text">view more</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            return products;
        }
        
        return (
            <>

                {/* <!-- Start Banner Area --> */}
                <GenerallBanner title="Fashon Category" page_type="Category"/>
                
                
                < div class="container" >
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-5">
                            <div class="sidebar-categories">
                                <div class="head">Browse Categories</div>
                                <ul class="main-categories">
                                    {categories_filter()}
                                </ul>
                            </div>
                            <div class="sidebar-filter mt-50">
                                <div class="top-filter-head">Product Filters</div>
                                <div class="common-filter">
                                    <div class="head">Brands</div>
                                    <form action="#">
                                        <ul>
                                            {brands_filter()}
                                        </ul>
                                    </form>
                                </div>
                                <div class="common-filter">
                                    <div class="head">Color</div>
                                    <form action="#">
                                        <ul>
                                            {color_filter()}
                                        </ul>
                                    </form>
                                </div>
                                <div class="common-filter">
                                    <div class="head">Price</div>
                                    <div class="price-range-area">
                                        <div id="price-range"></div>
                                        <div class="value-wrapper d-flex">
                                            <div class="price">Price:</div>
                                            <span>$</span>
                                            <div id="lower-value"></div>
                                            <div class="to">to</div>
                                            <span>$</span>
                                            <div id="upper-value"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-9 col-lg-8 col-md-7">
                            {/* <!-- Start Filter Bar --> */}
                            <div class="filter-bar d-flex flex-wrap align-items-center">
                                <div class="sorting">
                                    <select>
                                        <option value="1">Default sorting</option>
                                        <option value="1">Default sorting</option>
                                        <option value="1">Default sorting</option>
                                    </select>
                                </div>
                                <div class="sorting mr-auto">
                                    <select>
                                        <option value="1">Show 12</option>
                                        <option value="1">Show 12</option>
                                        <option value="1">Show 12</option>
                                    </select>
                                </div>
                                <div class="pagination">
                                    <a href="#" class="prev-arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></a>
                                    <a href="#" class="active">1</a>
                                    <a href="#">2</a>
                                    <a href="#">3</a>
                                    <a href="#" class="dot-dot"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>
                                    <a href="#">6</a>
                                    <a href="#" class="next-arrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            {/* <!-- End Filter Bar --> */}

                            {/* <!-- Product Area --> */}
                            <section class="lattest-product-area pb-40 category-list">
                                <div class="row">
                                    {products_area()}
                                </div>
                            </section>

                            {/* <!-- Start Filter Bar --> */}
                            <div class="filter-bar d-flex flex-wrap align-items-center">
                                <div class="sorting mr-auto">
                                    <select>
                                        <option value="1">Show 12</option>
                                        <option value="1">Show 12</option>
                                        <option value="1">Show 12</option>
                                    </select>
                                </div>
                                <div class="pagination">
                                    <a href="#" class="prev-arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></a>
                                    <a href="#" class="active">1</a>
                                    <a href="#">2</a>
                                    <a href="#">3</a>
                                    <a href="#" class="dot-dot"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>
                                    <a href="#">6</a>
                                    <a href="#" class="next-arrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            {/* <!-- End Filter Bar --> */}
                        </div>
                    </div>
                </div >

                <WeeklyDeals />
            </>
        );
    }
}


export default Category;