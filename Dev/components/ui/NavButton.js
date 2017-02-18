import React,{Component} from 'react'
import {Link} from 'react-router';
export default class NavButton extends Component {



iconClickHangler(e){
     var menu= this.refs.menu
     menu.style.display =menu.style.display!="block" ?"block":"none";

}
	render() {
	   return (
		<span className="dropdown">
		  <span className={"glyphicon-custom dropdown-toggle glyphicon glyphicon-"+this.props.icon} onClick={this.iconClickHangler.bind(this)} > {this.props.title}</span>
		    <ul ref="menu" className="dropdown-menu pull-right" role="menu" aria-labelledby="dropdownMenu1">        
              {
                  this.props.menus.map((menu,index)=>{
                return ( <li role="presentation"  key={index}>
                	<Link activeClassName="active"  to={menu.href}>{menu.title}</Link>
                         
                        </li>)
                       })
              }
             
            </ul>
		</span>
	)
}

}

NavButton.defaultProps=
{
     menus:[{title:"主页",href:"/home"},{title:"退出登录",href:"/Login"}],
     icon:"list",
     title:""
}