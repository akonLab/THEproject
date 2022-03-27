import React from "react";
import { Link } from "react-router-dom";
// Banner Block 
class GenerallBanner extends React.Component {
    render() {

        return (
            <section class="banner-area organic-breadcrumb mb-5">
                <div class="container">
                    <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div class="col-first">
                            <h1>{this.props.title}</h1>
                            <nav class="d-flex align-items-center">
                                <a href="index.html">Home<span class="lnr lnr-arrow-right"></span></a>
                                {this.props.page_type === "Product" ? <Link to="/category">{this.props.category_type}<span class="lnr lnr-arrow-right"></span></Link> : ""}
                                
                                <a href="/product">{this.props.page_type}</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default GenerallBanner;