import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';



export class AllCategory extends Component {
    render() {
        return (
            <>
                <div class="row d-flex justify-content-between ml-1 mr-3 mb-3">
                    <h2>Categories</h2>
                    <div class="row justify-content-around">
                        <Form.Group>
                            <div className="input-group">
                                <Form.Control type="text" className="form-control" placeholder="Search category.." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-sm btn-gradient-primary" type="button">Search</button>
                                </div>
                                <Link to="/add-category">
                                    <button type="button" className="btn btn-gradient-primary btn-lg">+ Add Category</button>
                                </Link>
                            </div>
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 stretch-card grid-margin">
                    <div className="card bg-gradient-primary card-img-holder text-white">

                        <Link to="/category">
                                <div className="card-body text-light">
                                    <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                                    <h4 className="font-weight-normal mb-3"> Category title</h4>
                                    <h2 className="mb-5">Category title</h2>
                                    <h6 className="card-text">34 products</h6>
                                </div>
                        </Link>
                        </div>

                    </div>
                    <div className="col-md-4 stretch-card grid-margin">
                        <div className="card bg-gradient-primary card-img-holder text-white">
                            <div className="card-body">
                                <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                                <h4 className="font-weight-normal mb-3">Category title</h4>
                                <h2 className="mb-5">23 products</h2>
                                <h6 className="card-text">120 variance</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 stretch-card grid-margin">
                        <div className="card bg-gradient-primary card-img-holder text-white">
                            <div className="card-body">
                                <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                                <h4 className="font-weight-normal mb-3">23 products</h4>
                                <h2 className="mb-5">Category title</h2>
                                <h6 className="card-text">120 variance</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AllCategory;