import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { Form } from 'react-bootstrap';


export class AllProducts extends Component {
    render() {
        const styles = {
            image: {
                height: 30, 
            },

        };

        const table_content = () => {
            let contents = [];
            for (let i = 0; i < 5; i++) {
                contents.push(
                    <tr>
                        <td> 13t77fvtf4 </td>

                        <Link to="/product">
                            <Trans>
                                <td>
                                    <p>
                                        <span><img style={styles.image} class="mr-3" src="https://www.pngplay.com/wp-content/uploads/12/Joystick-Transparent-File-Clip-Art.png" /></span>
                                        Product titile
                                    </p>
                                </td>
                            </Trans>
                        </Link>

                        <td>
                            product type
                        </td>
                        <td> 245 </td>
                        <td> $ 77.99  </td>
                    </tr>
                )
            }
            return contents;
        }

        return (
            <>
                <div class="row d-flex justify-content-between ml-1 mr-3 mb-3">
                    <h2>All Products</h2>
                    <div class="row justify-content-around">
                        <Form.Group>
                            <div className="input-group">
                                <Form.Control type="text" className="form-control" placeholder="Search product.. " aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-sm btn-gradient-primary" type="button">Search</button>
                                </div>
                                <Link to="/add-product">
                                    <button type="button" className="btn btn-gradient-primary btn-lg">+ Add Product</button>
                                </Link>
                            </div>
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th> Product code </th>
                                                <th> Item </th>
                                                <th> Type </th>
                                                <th> Amount </th>
                                                <th> Price </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {table_content()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default AllProducts;