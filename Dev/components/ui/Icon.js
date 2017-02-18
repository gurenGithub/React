import React,{Component} from 'react'
import {Modal,Button} from 'react-bootstrap'
import Row from './../ui/Row.js'
import Column from './../ui/Column.js'

export default class Icon extends Component{


  constructor(props){
  	super(props)
  	this.state={showModal:false}
  }
	handClick(e) {

		var target = e.target;

if(this.props.isShowModal){
	this.open();
}
		if (this.props.onClick) {
			this.props.onClick(target);
		}
	}
	close() {
		this.setState({
			showModal: false
		});

		if (this.props.onClose) {
			this.props.onClose()
		}
	}
	open() {
		this.setState({
			showModal: true
		});
	}


renderModalTitleItem(obj){

if(obj){

	return <Modal.Header  closeButton>{this.props.modalTitle}</Modal.Header>
}
return null
}
	renderModalItem(){



if(this.props.isShowModal){

	return <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
	      {this.renderModalTitleItem(this.props.modalTitle)}
          <Modal.Body> 
           {this.props.children}
           </Modal.Body>
          </Modal>
}
	return <span>{this.props.children}</span>
	}
	render(){

      return (
          <span><span {...this.props}  onClick={this.handClick.bind(this)} 
           className={"glyphicon-custom glyphicon glyphicon-"+this.props.name} >
            {this.props.title}
           </span>
           {this.renderModalItem()}
           </span>
         )
	}
}

Icon.defaultProps = {
	name: "",
	onClick: null,
	title: null,
	onClose:null,
	isShowModal:false,
	modalTitle:null,
	fontSize:18
}
Icon.propTypes = {

	onClick: React.PropTypes.func,
	name: React.PropTypes.string,
	title: React.PropTypes.string
}