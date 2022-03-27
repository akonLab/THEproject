import React from 'react';


class FooterBlock {
    render() {
        let content = {
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
        }
        return (
            <>
            <footer class="footer-area section_gap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3  col-md-6 col-sm-6">
                            <div class="single-footer-widget">
                                <h6>About Us</h6>
                                <p>
                                    {content.text}
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            {/* <!-- <div class="col-lg-4  col-md-6 col-sm-6"> --> */}
                            <div class="single-footer-widget">
                                <h6>Newsletter</h6>
                                <p>Stay update with our latest</p>
                                <div class="" id="mc_embed_signup">

                                    <form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" class="form-inline">

                                        <div class="d-flex flex-row">

                                            <input class="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '" required="" type="email" />
                                            <button class="click-btn btn btn-default">
                                                <i class="fa fa-long-arrow-right"
                                                    aria-hidden="true"></i>
                                            </button>
                                            <div style="position: absolute; left: -5000px;">
                                                <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
                                            </div>

                                            {/* <!-- <div class="col-lg-4 col-md-4">
                          <button class="bb-btn btn"><span class="lnr lnr-arrow-right"></span></button>
                        </div>  --> */}
                                        </div>
                                        <div class="info"></div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-2 col-md-6 col-sm-6">
                            <div class="single-footer-widget">
                                <h6>Follow Us</h6>
                                <p>Let us be social</p>
                                <div class="footer-social d-flex align-items-center">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-dribbble"></i></a>
                                    <a href="#"><i class="fa fa-behance"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>

    <script src="./assets/js/vendor/jquery-2.2.4.min.js"></script>
    <script src="./assets/https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous">
    </script>
    <script src="./assets/js/vendor/bootstrap.min.js"></script>
    <script src="./assets/js/jquery.ajaxchimp.min.js"></script>
    <script src="./assets/js/jquery.nice-select.min.js"></script>
    <script src="./assets/js/jquery.sticky.js"></script>
    <script src="./assets/js/nouislider.min.js"></script>
    <script src="./assets/js/countdown.js"></script>
    <script src="./assets/js/jquery.magnific-popup.min.js"></script>
    <script src="./assets/js/owl.carousel.min.js"></script>
    {/* <!--gmaps Js--> */}
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE"></script>
    <script src="./assets/js/gmaps.min.js"></script>
    <script src="./assets/js/main.js"></script>
    </>
        )
    }
}
export default FooterBlock;