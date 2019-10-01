import React from 'react';

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
             username:null,
             password:null,
             userNameError:false,
             passwordError:false,
             Error:false
        };
    };
    async submitUser(){
        let user={
            username:this.state.username,
            password:this.state.password
        };
         if(user.username===''||user.username===null){
             document.getElementsByClassName("UserName")[0].style.backgroundColor="red";
             this.setState({userNameError:true})
            return ;
         }
         else{
             document.getElementsByClassName("UserName")[0].style.backgroundColor="white";
             this.setState({userNameError:false})
         }
         if(user.password===''||user.password===null){
             document.getElementsByClassName("password")[0].style.backgroundColor="red";
             this.setState({passwordError:true})
            return ;
         }
         else{
             document.getElementsByClassName("password")[0].style.backgroundColor="white";
             this.setState({passwordError:false})
         }
        await window.JF.userLogin(user, ()=>window.JF.getForms(function (response) {
            for (let i = 0; i < response.length; i++) {
                document.writeln(response[i].title)
            }
        }),(err)=>this.setState({Error:true}));

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
                <div>
                <input className="UserName" placeholder="UserName"  onChange={e => this.onChangeUserName(e)}/>
                <span  id="errorMsg1" className="userNameErrorMsg" style={{visibility: this.state.userNameError ? 'visible' : 'hidden' }} >Bu alan boş bırakılamaz</span>
                </div>
                <div>
                <input className="password" placeholder="password" type="password" onChange={e => this.onChangePassword(e)} />
                <span className="passwordErrorMsg" style={{visibility: this.state.passwordError ? 'visible' : 'hidden' }} >Bu alan boş bırakılamaz</span>
                </div>
                <button className="submitButton" onClick={()=> this.submitUser()}>Login</button>
                <span className="Error"style={{visibility: this.state.Error ? 'visible' : 'hidden' }} >hatalı girdi</span>
            </div>
        )
    }
}
export default LoginPage;