import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { Form } from 'react-bootstrap';


export class Rigth extends Component {
    render() {

        const table_content = () => {
            let contents = [];
            for (let i = 0; i < 5; i++) {
                contents.push(
                    <tr>
                        <td className="py-2">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="user icon" />
                        </td>
                        <td> User fullname </td>
                        <td> user@gmail.com </td>
                        <td>
                            product manager
                        </td>
                        <td> Comppany name if user == role.manager else none</td>
                        <td class="float-right">
                            <Link to="/editrigth">
                                <Trans>
                                    <button type="button" class="btn btn-outline-primary btn-icon">
                                        <i class="mdi mdi-pencil"></i>
                                    </button>
                                </Trans>
                            </Link>
                        </td>
                    </tr>
                )
            }
            return contents;
        }

        return (
            <>
                <div class="row d-flex justify-content-between ml-1 mr-3 mb-3">
                    <h2>Manage Rigths</h2>
                    <div class="row justify-content-around">
                        <Form.Group>
                            <div className="input-group">
                                <Form.Control type="text" className="form-control" placeholder="Search user" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-sm btn-gradient-primary" type="button">Search</button>
                                </div>

                            </div>
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th> User </th>
                                                <th> User name </th>
                                                <th> Email </th>
                                                <th> Role </th>
                                                <th> Company </th>
                                                <th> Edit rights </th>
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

export default Rigth;