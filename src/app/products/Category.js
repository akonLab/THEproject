import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Editor } from "@tinymce/tinymce-react";
import { Link, withRouter } from 'react-router-dom';


export class Category extends Component {
    state = {
        startDate: new Date()
    };

    render() {
        const styles = {
            image: {
                height: 70,
                marginRight: 20
            },

        };

        const category = {
            title: "Category title",
            code: " 13t77fvtf4 ",
            imageUrl: "https://www.pngplay.com/wp-content/uploads/12/Joystick-Transparent-File-Clip-Art.png", 
            category: "Product category",
            amount: 245
        }
         
        return (
            <>
                <div class=" card ">
                    <div class="card-body">
                        <div class="row px-4 d-flex justify-content-between">
                            <div class="row"> 
                                <div>
                                    <p>   <Link to="/all-category" class="text-muted">Categories</Link> / Category details</p>
                                    <h3>{category.title}</h3>
                                </div>
                            </div>

                            <div class="float-right">
                                <button type="button" class="btn btn-outline-danger btn-icon my-auto mx-2">
                                    <i class="mdi mdi-delete"></i>
                                </button>
                                <button type="button" class="btn btn-outline-success btn-icon my-auto mx-2">
                                    <i class="mdi mdi-pencil"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mt-3">
                    <div className="card-body">
                        <h4 className="card-title">Product Information</h4>
                        <form className="form-sample">
                            <p className="card-description"> code:  {category.code}  </p>
                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Product Name</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="text"
                                                defaultValue={category.title} />
                                        </div>
                                    </Form.Group>
                                </div>
                              
                            </div>
 
                               
                        </form>
                    </div>
                </div>

            </>

        )
    }
}

export default Category;