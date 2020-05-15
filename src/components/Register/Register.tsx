import React, { ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { registerAction } from '../../actions';

interface RegisterProps {
    register(id: string, password: string): void;
}

interface RegisterState {
    id: string;
    password: string;
}

class _Register extends React.Component<RegisterProps, RegisterState> {
    state: RegisterState = {
        id: '',
        password: '',
    }

    render() {
        const {id, password} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <input name="id" value={id} onChange={this.handleInputChange} placeholder="enter id..." required/>
                <input name="password" value={password} onChange={this.handleInputChange} type="password" placeholder="enter password..." required/>
                <button type="submit">REGISTER</button>
            </form>
        );
    }

    handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        this.setState({
            [name]: value,
        } as any);
    }

    onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const {id, password} = this.state;
        const {register} = this.props;
        register(id, password);
    }
}

const mapDispatchToProps = {
    register: registerAction,
}

export const Register = connect(null, mapDispatchToProps)(_Register);