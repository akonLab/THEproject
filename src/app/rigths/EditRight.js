import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export class EditRight extends Component {
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

        const user = {
            username: "User Fullname",
            id: " 13t77fvtf4 ",
            imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
            company: "Company name"
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
                    <div class=" card-body row">
                        <div class="">
                            <img style={styles.image} src={user.imageUrl} alt="user icon" class="rounded-circle" />
                        </div>
                        <div>
                            <p> <Link to="/rigth" class="text-muted">Manage Rights</Link> / User details</p>
                            <h3>{user.username} / {user.company}</h3>
                        </div>
                    </div>
                </div>

                <div className="card mt-3">
                    <div className="card-body">
                        <h4 className="card-title">User Information</h4>
                        <form className="form-sample">
                            <p className="card-description"> id:  {user.id}  </p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" />
                                                <i class="input-helper"></i>Manager rights (product: read/add/edit/remove) (order: read)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" />
                                                <i class="input-helper"></i>Admin rights (user: read/edit)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </>

        )
    }
}

export default EditRight;