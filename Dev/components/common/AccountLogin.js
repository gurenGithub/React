import React,{Component} from 'react'
 

export default class AccountLogin extends Component{
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      password: ""
    }
  }
   
  submitHandler(e) {
    e.preventDefault();

    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);

    }
    return false;

  }

  changeHandler(event) {


    var target = event.target;

    var name = target.name;
    var value = target.value;

    var opts = {};
    opts[name] = value;

    this.setState(opts);

  }
      render(){
        var userName=this.state.userName;
        var passworld=this.state.password;

         return  (
    		<form method='post' style={{margin:'20px'}} onSubmit={this.submitHandler.bind(this)}>
    		  <div className="form-group"> 
                <input type="text" className="form-control" onChange={this.changeHandler.bind(this)} 
                      value={this.state.userName}
                name='userName'   
                placeholder="账户"/>
              </div>
              <div className="form-group">    
                <input type="password" className="form-control"  onChange={this.changeHandler.bind(this)}  name='password' 
                value={this.state.password}
                placeholder="密码"/>
              </div>
                <div className="checkbox">
                  <label>
                  <input type="checkbox" />记住密码
                  </label>
                  </div>
                <button type="submit" className="btn btn-primary" style={{width:'100%'}}>登录</button>
    	  	</form>

    	
         	)

      }

 }
AccountLogin.defaultProps = {
  onSubmit: null
}
AccountLogin.propTypes = {
  onSubmit: React.PropTypes.func

}