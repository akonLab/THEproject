import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Editor } from "@tinymce/tinymce-react";
import { Link } from 'react-router-dom';


export class AddProduct extends Component {
    state = {
        startDate: new Date()
    };
    render() {
        const categories_list = () => {
            let categories = []
            for (let i = 0; i < 6; i++) {
                categories.push(
                    <option>Category {i + 1}</option>
                )
            }
            return categories;

        }

        const type_list = () => {
            let types = []
            for (let i = 0; i < 6; i++) {
                types.push(
                    <option>Type {i + 1}</option>
                )
            }
            return types;

        }

        return (
            <>
                <div class=" card ">
                    <div class=" card-body row"> 
                            <p>   <Link to="/all-product" class="text-muted">Products</Link> / Add new product</p> 
                    </div>
                </div>

                <div className="card mt-3">
                    <div className="card-body">
                        <form className="form-sample">
                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Product Name</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="text"
                                            />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Price</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="number" />
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Category</label>
                                        <div className="col-sm-9">
                                            <select className="form-control">
                                                {categories_list()}
                                            </select>
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Type</label>
                                        <div className="col-sm-9">
                                            <select className="form-control">
                                                {type_list()}
                                            </select>
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Amount</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="number" />
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                            <p className="mt-2">Description</p>
                            <Editor
                                value={this.state.content}
                                init={{
                                    height: 400,
                                    menubar: false,
                                    branding: false 
                                }} 
                                onEditorChange={this.handleChange}
                            />
                        </form>
                    </div>
                </div>

            </>

        )
    }
}

export default AddProduct;