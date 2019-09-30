import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
             username:'',
             password:''
        };
    }
    async submitUser(){
        let user={
            username:this.state.username,
            password:this.state.password
        };
         await window.JF.userLogin(user, ()=>window.JF.getForms(function (response) {
             for (let i = 0; i < response.length; i++) {
                 document.writeln(response[i])
             }
         }),(err)=>console.log(err));
    }
    onChangeUserName = (e) => {
        this.setState({
            username: e.target.value,
        });
    };
    onChangePassword = (e) => {
        this.setState({
            password: e.target.value,
        });
    };
    render() {
        return (

            <div>
                <input className="UserName" placeholder="UserName"  onChange={e => this.onChangeUserName(e)}/>
                <input className="password" placeholder="password" type="password" onChange={e => this.onChangePassword(e)} />
                <button className="submitButton" onClick={()=> this.submitUser()}>Login</button>
                </div>
        )
    }
}
export default LoginPage;