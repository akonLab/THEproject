import React from "react";
import GenerallBanner from "./assets/banner";
import WeeklyDeals from "./assets/weekly_deals";


class Product extends React.Component {
    render() {
        const product_details = {
            title: "Product title",
            price: 100,
            category: "Category type",
            avaiability: true,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imgUrl: "./assets/img/category/s-p1.jpg",
            full_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et dui rutrum, iaculis purus nec, commodo turpis. Morbi convallis dui metus, sit amet lobortis tellus fermentum malesuada. Nunc dictum metus sed mauris bibendum dictum. Integer ultrices dictum massa, ut interdum urna elementum eget. Curabitur non odio lacus. Praesent in ornare ipsum. Nunc eu egestas justo, faucibus bibendum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc maximus purus ut quam fermentum, vitae pellentesque lectus vehicula. Suspendisse elementum feugiat arcu ac sollicitudin. Quisque consectetur, dolor sit amet tincidunt dapibus, nulla urna dictum elit, sit amet porta justo leo eu elit. Pellentesque varius, tortor at porta consequat, augue lectus ultricies mauris, nec consequat dui eros vel velit. Nullam justo dolor, tristique ac lorem eget, pellentesque semper metus. Quisque sollicitudin elementum fermentum. Donec vel blandit metus, quis lacinia neque. Phasellus ac velit dapibus, rhoncus neque ornare, condimentum lorem.",
            comment: {
                user_name: "User Name",
                comment_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                imgUrl: "./assets/img/product/review-3.png"
            },
            rating: 4.3,
            review_count: 3,

        }

        const comments_for_review = () => {
            let comments = []
            for (let i = 0; i < 3; i++) {
                comments.push(
                    <div class="review_item">
                        <div class="media">
                            <div class="d-flex">
                                <img src={product_details.comment.imgUrl} alt="" />
                            </div>
                            <div class="media-body">
                                <h4>{product_details.comment.user_name}</h4>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                        <p>{product_details.comment.comment_text}</p>
                    </div>
                )
            }
            return comments;
        }
        return (
            <> 
                <GenerallBanner page_type="Product" category_type={product_details.category} title={product_details.title} />
             
                {/* <!--================Single Product Area =================--> */}
                <div class="product_image_area">
                    <div class="container">
                        <div class="row s_product_inner">
                            <div class="col-lg-6">
                                <div class="s_Product_carousel">
                                    <div class="single-prd-item">
                                        <img class="img-fluid" src={product_details.imgUrl} alt="" />
                                    </div>
                                    <div class="single-prd-item">
                                        <img class="img-fluid" src={product_details.imgUrl} alt="" />
                                    </div>
                                    <div class="single-prd-item">
                                        <img class="img-fluid" src={product_details.imgUrl} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5 offset-lg-1">
                                <div class="s_product_text">
                                    <h3>{product_details.title}</h3>
                                    <h2>${product_details.price}</h2>
                                    <ul class="list">
                                        <li><a class="active" href="#"><span>Category</span> : {product_details.category}</a></li>
                                        <li><a href="#"><span>Availibility</span> : {product_details.avaiability ? 'in stock' : 'sold out'}</a></li>
                                    </ul>
                                    <p>
                                        {product_details.description}
                                    </p>
                                    <div class="product_count">
                                        <label for="qty">Quantity:</label>
                                        <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty" />
                                        <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                            class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                                        <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                            class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                                    </div>
                                    <div class="card_area d-flex align-items-center">
                                        <a class="primary-btn" href="#">Add to Cart</a>
                                        {/* <a class="icon_btn" href="#"><i class="lnr lnr lnr-diamond"></i></a> */}
                                        <a class="icon_btn" href="#"><i class="lnr lnr lnr-heart"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--================Product Description Area =================--> */}
                <section class="product_description_area">
                    <div class="container">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Description</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review"
                                    aria-selected="false">Reviews</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <p>{product_details.full_description}</p>
                            </div>

                            <div class="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="row total_rate">
                                            <div class="col-6">
                                                <div class="box_total">
                                                    <h5>Overall</h5>
                                                    <h4>{product_details.rating}</h4>
                                                    <h6>({product_details.review_count} Reviews)</h6>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="rating_list">
                                                    <h3>Based on 3 Reviews</h3>
                                                    <ul class="list">
                                                        <li><a href="#">5 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                            class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
                                                        <li><a href="#">4 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                            class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
                                                        <li><a href="#">3 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                            class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
                                                        <li><a href="#">2 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                            class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
                                                        <li><a href="#">1 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                            class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review_list">
                                            {comments_for_review()}

                                        </div>
                                    </div>

                                    {/* Form to add new review  */}
                                    <div class="col-lg-6">
                                        <div class="review_box">
                                            <h4>Add a Review</h4>
                                            <p>Your Rating:</p>
                                            <ul class="list">
                                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            </ul>
                                            <p>Outstanding</p>
                                            <form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" id="name" name="name" placeholder="Your Full name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Full name'" />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'" />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" id="number" name="number" placeholder="Phone Number" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Phone Number'" />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <textarea class="form-control" name="message" id="message" rows="1" placeholder="Review" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Review'"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 text-right">
                                                    <button type="submit" value="submit" class="primary-btn">Submit Now</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <WeeklyDeals />
            </>
        );
    }
}

export default Product;