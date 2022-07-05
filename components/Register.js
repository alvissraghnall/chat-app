import React, { Component } from "react";
import styles from '../styles/Register.module.css'


export default class Register extends Component {

    constructor () {
        this.state = {
            email: "",
            username: "",
            password: ""
        }
    }

    render() {
        return (
            <div className={styles.register}>
                <div className={styles.form}>
                    <h2 className={styles.header}> Register to Maxi! </h2>

                    
                </div>
            </div>
        );
    }
    
}