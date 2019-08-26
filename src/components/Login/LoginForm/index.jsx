import React from 'react';
import '../../../assests/css/home.css';
import Form from '../../../views/Form';
import Button from '../../../views/Button';
import { validate } from '../../../utils/validate';
const content = require('../../../assests/content.json');

const {
    Login: {
        className = '',
        title = '',
        inputs = [],
        buttons = []
    } = {}
} = content;

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            submit: false
        }
    };

    onBlur = (event) => {
        const {
            target: {
                type = '',
                id = '',
                value = ''
            }
        } = event;
        let {
            errors = []
        } = this.state;

        const status = !validate({ type, value });
        errors = [...errors, { id, status }];

        for (let e of errors) {
            if (e.id === id) {
                e.status = status
            }
        }
        this.setState({
            errors
        }, this.checkSubmit())
    }

    checkSubmit = () => {
        let {
            errors = []
        } = this.state;
        console.log(errors);

        for (let e of errors) {
            if (e.status === false) {
                this.setState({
                    submit: true
                })
            }
        }

    }

    render() {
        const {
            errors = [],
            submit = false,
        } = this.state;

        return (
            <div className={className}>
                <h2>{title}</h2>
                <Form inputs={inputs} onBlur={this.onBlur} errors={errors} />
                <Button buttons={buttons} onClick={this.handleClick} disabled={!submit} />
            </div>
        )
    }
}

export default LoginForm;