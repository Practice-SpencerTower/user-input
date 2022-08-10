import React from "react";
import Card from '../UI/Card';
import './AddUser.module.css';

const AddUser = props => {
    const addUserHandler = (e) => {
        e.preventDefault();
    };

    return (
    <Card>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" className={classes.input}/>
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" className={classes.input}/>
        <button type="submit">Add User</button>
    </form>
    </Card>
    );
}

export default AddUser;