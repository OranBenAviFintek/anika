import React, {Component} from 'react';
import  './sign-in.styles.scss';
import FormInput from '../from-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
class SignIn extends Component {
    constructor(props){
      super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }
    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({ [name]: value})
    }


    render(){
      return(
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email or password</span>
            
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    label="email"
                    handleChange={this.handleChange}
                    requried="true"
                />
                <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    label="password"
                    handleChange={this.handleChange}
                    requried="true"
                />
                <div className="buttons">
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </div>
      );
    }
}

export default SignIn;