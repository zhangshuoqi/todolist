import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import UploadScreen from './UploadScreen'
import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
        this.loginChange = this.loginChange.bind(this);
        this.pwChange = this.pwChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    loginChange(e,newValue){
        this.setState(
            {
                username:newValue
            }
        )
    }
    pwChange(e,newValue){
        this.setState(
            {
                password:newValue
            }
        )
    }
    handleClick(e){
        var apiBaseUrl = "http://localhost:4000/api/";
        var self = this;
        var payload = {
            'email':this.state.username,
            'password':this.state.password
        }
        axios.post(apiBaseUrl+'login',payload)
        .then(function(response){
            console.log(response);
            if(response.data.code == 200){
                console.log('Login successfull');
                var uploadScreen = [];
                uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
                self.props.appContext.setState({
                    loginPage:[],
                    uploadScreen:uploadScreen
                })
            }else if(response.data.code == 204){
                console.log('Username password do not match');
                alert('username password do not match!')
            }else{
                console.log('username does not exists');
                alert('Username does not exist');
            }
        })
        .catch(function(error){
            console.log(error);
        });
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title='login'/>
                        <TextField 
                        hintText='Enter your username' 
                        floatingLabelText='Username'
                        onChange = {this.loginChange}/>
                        <br/>
                        <TextField 
                        type='password'
                        hintText='Enter your password' 
                        floatingLabelText='Password'
                        onChange = {this.pwChange}/>
                        <br/>
                        <RaisedButton 
                        label='Submit'
                        primary={true}
                        style={style}
                        onClick={this.handleClick}/>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}
const style = {
    margin: 15,
};
export default Login