import React, { Component } from 'react';
import { Form } from 'react-bootstrap'; 
import { Editor } from "@tinymce/tinymce-react";
import { Link } from 'react-router-dom';


export class Product extends Component {
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

        const product = {
            title: "Product title",
            code: " 13t77fvtf4 ",
            imageUrl: "https://www.pngplay.com/wp-content/uploads/12/Joystick-Transparent-File-Clip-Art.png",
            price: 77.99,
            category: "Product category",
            amount: 245
        }
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
                    <div class="card-body">
                        <div class="row px-4 d-flex justify-content-between">
                            <div class="d-flex row">
                                <img style={styles.image} src={product.imageUrl} />
                                <div>
                                    <p>   <Link to="/all-product" class="text-muted">Products</Link> / Product details</p>
                                    <h3>{product.title}</h3>
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
                            <p className="card-description"> code:  {product.code}  </p>
                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Product Name</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="text"
                                                defaultValue={product.title} />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Price</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="number" defaultValue={product.price} />
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
                                            <Form.Control type="number" defaultValue={product.amount} />
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

export default Product;