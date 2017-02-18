import React,{Component} from 'react'
import { Router, Route, browserHistory,Link  } from 'react-router';
export default class Back extends Component{
   
    constructor(props) {
     super(props);
     // Operations usually carried out in componentWillMount go here
   
   }

    handClick(e) {

        var target = e.target;

        if (this.props.onBack) {
            this.props.onBack(target);
        }
        if (this.props.history) {
            this.props.history.goBack();
        }
    }
  render(){
     return (<div className={'well title magginBottom2 well-sm center '+(this.props.isFixedTop?"navbar-fixed-top" :"")} >
     	<span className="glyphicon glyphicon-chevron-left glyphicon-custom"  onClick={this.handClick.bind(this)} style={{float:'left'}} ></span>
     	<span style={{textAlign:'center',display:'inlineBlock'}} className='title'>{this.props.title} </span>
     	<span  style={{float:'right'}} >{this.props.children}</span>
     	</div>)
    }
}

 Back.defaultProps = {
 	title: "",
 	onBack: null,
 	isFixedTop:true,
    history:null
 }
 Back.propTypes = {

 	title: React.PropTypes.string,
 	onBack: React.PropTypes.func
    
 }

