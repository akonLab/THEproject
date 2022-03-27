import React from "react"; 
import WeeklyDeals from "./assets/weekly_deals";


class Home extends React.Component {
    render() {
        const project = {
            title: "Project title",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            imgUrl: "https://static.nc-img.com/pp/cms/coupons/images/coupons-hero.0a6dcbe28a5a24ac6964f35dedcaf3bb.svg",

            faetures: [
                {
                    title: "Return Policy",
                    description: "Free Shipping on all order",
                    imgUrl: "./assets/img/features/f-icon2.png",
                },
                {
                    title: "24/7 Support",
                    description: "Free Shipping on all order",
                    imgUrl: "./assets/img/features/f-icon3.png",
                },
                {
                    title: "Secure Payment",
                    description: "Free Shipping on all order",
                    imgUrl: "./assets/img/features/f-icon4.png",
                }
            ],
            product: {
                title: "product title",
                new_price: "100",
                old_price: "200",
                imgUrl: "./assets/img/product/p1.jpg"
            },
            carousel: {
                title: "Carousel Page ",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
        }

        const banner_area = () => {
            return (
                <div class="active-banner-slider owl-carousel">
                    <div class="row single-slide align-items-center d-flex">
                        <div class="col-lg-5 col-md-6">
                            <div class="banner-content">
                                <h1>{project.title}</h1>
                                {/* <h1>Nike New <br />Collection!</h1> */}
                                <p>{project.text}</p>
                                <div class="add-bag d-flex align-items-center">
                                    <a class="add-btn" href=""><span class="lnr lnr-cross"></span></a>
                                    {/* <span class="add-text text-uppercase">Add to Bag</span> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="banner-img">
                                <img class="img-fluid" src={project.imgUrl} alt="" />
                            </div>
                        </div>
                    </div>

                    <div class="row single-slide">
                        <div class="col-lg-5">
                            <div class="banner-content">
                                <h1>{project.title}</h1>
                                {/* <h1>Nike New <br />Collection!</h1> */}
                                <p>{project.text}</p>
                                <div class="add-bag d-flex align-items-center">
                                    <a class="add-btn" href=""><span class="lnr lnr-cross"></span></a>
                                    <span class="add-text text-uppercase">Add to Bag</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="banner-img">
                                <img class="img-fluid" src="img/banner/banner-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        const featurea_area = () => {
            return (
                <div class="row features-inner justify-content-around">

                    {project.faetures.map(
                        function (product, i) {
                            return (
                                <div class=" col-md-4 col-sm-6">
                                    <div class="single-features">
                                        <div class="f-icon">
                                            <img src={product.imgUrl} alt="" />
                                        </div>
                                        <h6>{product.title}</h6>
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                            )
                        }
                    )}

                </div>
            )
        }

        const category_area = () => {
            return (
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-12">
                        <div class="row">
                            <div class="col-lg-8 col-md-8">
                                <div class="single-deal">
                                    <div class="overlay"></div>
                                    <img class="img-fluid w-100" src="https://i.pinimg.com/originals/82/7d/41/827d41466a68d4e8a1026022e7666b6e.jpg" alt="" />
                                    <a href="" target="_blank">
                                        <div class="deal-details">
                                            <h6 class="deal-title">Category Title</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="single-deal">
                                    <div class="overlay"></div>
                                    <img class="img-fluid w-100 " src="https://media.istockphoto.com/vectors/purple-gradient-background-vector-wallpaper-smooth-gradient-texture-vector-id953441854?k=20&m=953441854&s=170667a&w=0&h=-d7kphBMRcDu0Op7IPMIYAzO64QGlqAZkJRyOzPV7V4=" alt="" />
                                    <a href="" target="_blank">
                                        <div class="deal-details">
                                            <h6 class="deal-title">Category Title</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="single-deal">
                                    <div class="overlay"></div>
                                    <img class="img-fluid w-100" src="https://media.istockphoto.com/vectors/purple-gradient-background-vector-wallpaper-smooth-gradient-texture-vector-id953441854?k=20&m=953441854&s=170667a&w=0&h=-d7kphBMRcDu0Op7IPMIYAzO64QGlqAZkJRyOzPV7V4=" alt="" />
                                    <a href="" target="_blank">
                                        <div class="deal-details">
                                            <h6 class="deal-title">Category Title</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-8">
                                <div class="single-deal">
                                    <div class="overlay"></div>
                                    <img class="img-fluid w-100" src="https://i.pinimg.com/originals/82/7d/41/827d41466a68d4e8a1026022e7666b6e.jpg" alt="" />
                                    <a href="" target="_blank">
                                        <div class="deal-details">
                                            <h6 class="deal-title">Category Title</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-deal">
                            <div class="overlay"></div>
                            <img class="img-fluid w-100" src="https://i.pinimg.com/originals/22/9b/ff/229bffb397d82122452bebaba86563fa.jpg" alt="" />
                            <a href="" target="_blank">
                                <div class="deal-details">
                                    <h6 class="deal-title">Category Title</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            )
        }

        const products_in_carousel = () => {
            let products = []

            for (let i = 0; i < 8; i++) {
                products.push(
                    <div class="col-lg-3 col-md-6">
                        <div class="single-product">
                            <img class="img-fluid" src={project.product.imgUrl} alt="" />
                            <div class="product-details">
                                <h6>{project.product.title}</h6>
                                <div class="price">
                                    <h6>${project.product.new_price}</h6>
                                    <h6 class="l-through">${project.product.old_price}</h6>
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

                                    <a href="" class="social-info">
                                        <span class="lnr lnr-move"></span>
                                        <p class="hover-text">view more</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            return products;
        }

        const carousel = () => {
            let carousel_pages = []

            for (let i = 1; i < 3; i++) {
                carousel_pages.push(
                    <div class="single-product-slider">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-6 text-center">
                                    <div class="section-title">
                                        <h1>{project.carousel.title + i}</h1>
                                        <p>{project.carousel.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                {products_in_carousel()}
                            </div>
                        </div>
                    </div>
                )
            }

            return carousel_pages;
        }

        const brands_area = () => {
            let brands = []
            for (let i = 1; i < 6; i++) {
                brands.push(
                    <a class="col single-img" href="#">
                        <img class="img-fluid d-block mx-auto" src={"./assets/img/brand/" + i + ".png"} alt="" />
                    </a>
                )
            }
            return brands;
        }
        
        return (
            <>
            {/* <Header/> */}
                {/* Banner Area */}
                <section class="banner-area">
                    <div class="container">
                        <div class="row fullscreen align-items-center justify-content-start">
                            <div class="col-lg-12">
                                {banner_area()}
                            </div>
                        </div>
                    </div>
                </section >

                {/* Project features as trigger card */}
                <section class="features-area section_gap">
                    <div class="container">
                        {featurea_area()}
                    </div>
                </section>

                {/* Category area  */}
                <section class="category-area">
                    <div class="container">
                        {category_area()}
                    </div>
                </section>

                {/* Product carousel  */}
                <section class="owl-carousel active-product-area section_gap">
                    {carousel()}
                </section>

                {/* Exlusive Block Area */}
                {/* <section class="exclusive-deal-area">
                    <div class="container-fluid">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-lg-6 no-padding exclusive-left">
                                <div class="row clock_sec clockdiv" id="clockdiv">
                                    <div class="col-lg-12">
                                        <h1>Exclusive Hot Deal Ends Soon!</h1>
                                        <p>Who are in extremely love with eco friendly system.</p>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="row clock-wrap">
                                            <div class="col clockinner1 clockinner">
                                                <h1 class="days">150</h1>
                                                <span class="smalltext">Days</span>
                                            </div>
                                            <div class="col clockinner clockinner1">
                                                <h1 class="hours">23</h1>
                                                <span class="smalltext">Hours</span>
                                            </div>
                                            <div class="col clockinner clockinner1">
                                                <h1 class="minutes">47</h1>
                                                <span class="smalltext">Mins</span>
                                            </div>
                                            <div class="col clockinner clockinner1">
                                                <h1 class="seconds">59</h1>
                                                <span class="smalltext">Secs</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="" class="primary-btn">Shop Now</a>
                            </div>
                            <div class="col-lg-6 no-padding exclusive-right">
                                <div class="active-exclusive-product-slider">
                                    <div class="single-exclusive-slider">
                                        <img class="img-fluid" src="img/product/e-p1.png" alt="" />
                                        <div class="product-details">
                                            <div class="price">
                                                <h6>$150.00</h6>
                                                <h6 class="l-through">$210.00</h6>
                                            </div>
                                            <h4>addidas New Hammer sole for Sports person</h4>
                                            <div class="add-bag d-flex align-items-center justify-content-center">
                                                <a class="add-btn" href=""><span class="ti-bag"></span></a>
                                                <span class="add-text text-uppercase">Add to Bag</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-exclusive-slider">
                                        <img class="img-fluid" src="img/product/e-p1.png" alt="" />
                                        <div class="product-details">
                                            <div class="price">
                                                <h6>$150.00</h6>
                                                <h6 class="l-through">$210.00</h6>
                                            </div>
                                            <h4>addidas New Hammer sole for Sports person</h4>
                                            <div class="add-bag d-flex align-items-center justify-content-center">
                                                <a class="add-btn" href=""><span class="ti-bag"></span></a>
                                                <span class="add-text text-uppercase">Add to Bag</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                */}

                {/* Brands or Companies Logo  */}
                <section class="brand-area section_gap">
                    <div class="container">
                        <div class="row">
                           {brands_area()}
                        </div>
                    </div>
                </section>

                {/* Weekly deals */}
               <WeeklyDeals />
            </>
        );
    }
}

export default Home;