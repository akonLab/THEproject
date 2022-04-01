import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Order extends React.Component {
    render() {
        const order = {
            id: "2y689",
            customer_name: "Herman Beck",
            status: "paid",
            price: 77.99,
            date: "May 15, 2015"
        }
        const table_content = () => {
            let content_list = []
            for (let i = 0; i < 7; i++) {
                content_list.push(
                    <tr>
                        <td className="py-1">
                            # {order.id}
                        </td>
                        <td> {order.customer_name} </td>
                        <td>
                            <label class="badge badge-success">paid</label>
                        </td>
                        <td> $ {order.price} </td>
                        <td> {order.date} </td>
                    </tr>
                )
            }
            return content_list;
        }

        return (
            <>
                <div class="row d-flex justify-content-between ml-1 mr-3 mb-3">
                    <h2>Orders</h2>
                    <div class="row justify-content-around">
                        <Form.Group>
                            <div className="input-group">
                                <Form.Control type="text" className="form-control" placeholder="Search orders.." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-sm btn-gradient-primary" type="button">Search</button>
                                </div>
                            </div>
                        </Form.Group>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">

                        <div class="row d-flex float-left mx-1 mb-2"> 
                               
                                    <button type="button" class="btn text-primary border-bottom">  All </button>
                             
                                    <button type="button" class="btn text-muted">  Paid </button>
                              
                                    <button type="button" class="btn text-muted">  Pending </button>
                           
                                    <button type="button" class="btn text-muted">  Cancelled </button>
                           
                                    <button type="button" class="btn text-muted">  Refunded </button>
                              
                        </div>

                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th> Order ID </th>
                                        <th> Customer name </th>
                                        <th> Status </th>
                                        <th> Amount </th>
                                        <th> Date </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {table_content()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Order
    ;