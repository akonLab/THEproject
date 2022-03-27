import React from "react";

// Weekly Deals Block
class WeeklyDeals extends React.Component {
    render() {
        const deal = {
            title: "deal title",
            new_price: "100",
            old_price: "200",
            imgUrl: "./assets/img/r1.jpg"
        };

        const fill_weekly_deals = () => {
            let deals = []

            for (let i = 0; i < 9; i++) {
                deals.push(
                    <div class="col-lg-4 col-md-4 col-sm-6 mb-20">
                        <div class="single-related-product d-flex">
                            <a href="#"><img src={deal.imgUrl} alt="" /></a>
                            <div class="desc">
                                <a href="#" class="title">{deal.title}</a>
                                <div class="price">
                                    <h6>${deal.new_price}</h6>
                                    <h6 class="l-through">${deal.old_price}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            return deals;
        }

        return (
            <section class="related-product-area section_gap_bottom">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 text-center">
                            <div class="section-title">
                                <h1>Deals of the Week</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-9">
                            <div class="row">
                                {fill_weekly_deals()}
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="ctg-right">
                                <a href="#" target="_blank">
                                    <img class="img-fluid d-block mx-auto" src="./assets/img/category/c5.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WeeklyDeals;