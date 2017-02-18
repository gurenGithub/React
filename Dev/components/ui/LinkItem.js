
import React,{Component} from 'react'
import Link from 'react-router'

export default class LinkItem extends Component{



        render(){


        	return (<Link to={this.props.path}>
        	          <span className={this.props.className}>{ this.props.title}
        	       </span></Link>)
             

        }

}

LinkItem.defaultProps={
	className:'pull-right ',
	title:"",
	path:""
}