import React from "react";
import GenerallBanner from "./assets/banner";


class LogIn extends React.Component {
    render() {
        let isLogin = true;
        return (
            <>
                <GenerallBanner title="Login/Registe" page_type="Login/Registe" />

                <section class="login_box_area section_gap">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="login_box_img">
                                    <img class="img-fluid" src="./assets/img/login.jpg" alt="" />
                                    <div class="hover">
                                        <h4>New to our website?</h4>
                                        <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                                        <a class="primary-btn" href="registration.html">Create an Account</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="login_form_inner">
                                    <h3>Log in to enter</h3>
                                    <form class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                        <div class="col-md-12 form-group">
                                            <input type="text" class="form-control" id="name" name="name" placeholder="Username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'" />
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <input type="text" class="form-control" id="name" name="name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'" />
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <div class="creat_account">
                                                <input type="checkbox" id="f-option2" name="selector" />
                                                <label for="f-option2">Keep me logged in</label>
                                            </div>
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <button type="submit" value="submit" class="primary-btn">Log In</button>
                                            <a href="#">Forgot Password?</a>
                                        </div>
                                    </form>
                                    <sup><b>Login with your social media account</b></sup>
                                    <div>

                                        <a href="#" class="genric-btn danger medium radius mx-2">Google <span class="fa fa-google-plus"></span></a>
                                        <a href="#" class="genric-btn info medium radius mx-2">Facebook <span class="fa fa-facebook"></span></a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default LogIn;