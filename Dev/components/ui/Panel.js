import React,{Component} from 'react'

export default class Panel extends Component{


render() {
	return (
		<div className="panel panel-default" style={{'margin':'2px'}}>
        <div className="panel-body">
          {this.props.children}
       </div>
     </div>
	);
}

}
