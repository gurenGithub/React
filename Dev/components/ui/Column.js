import React,{Component} from 'react'
export default class Column extends Component{

render() {
	return (
		<div  className={"col-xs-"+this.props.cols+" col-sm-"+ this.props.cols}> 
          {this.props.children}
       </div>
     
	);
}

}

Column.defaultProps={
  cols:3

}