import React,{Component} from 'react'

export default class Title extends Component {


	render() {



return (
	   <div style={{marginBottom:'2px'}} className={'well title well-sm center '+(this.props.isFixedTop?"navbar-fixed-top" :"")} >{this.props.title} <span className='pull-right'>{this.props.children}</span></div>
	)
	}

}

Title.defaultProps=
{
	title:"",
	isFixedTop:true
}
