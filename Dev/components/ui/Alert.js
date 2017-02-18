import {Modal,Button} from 'react-bootstrap'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'


export default class Alert extends Component{


 constructor(props){
 	super(props)
 	this.state={showModal:this.props.show}
 }

 componentWillMount(){


 }

 close() {
    this.setState({ showModal: false });

     if(this.props.onClose){
     	this.props.onClose()
     }
  }
   open() {
    this.setState({ showModal: true });
  }


 render() {
   
    return (<div>
        <button type="button" id='bs_btn_alret' className="btn btn-primary" style={{width:'100%',display:this.props.isShowButton?'block':'none'}} onClick={this.open.bind(this)}>{this.props.buttonTitle}</button>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.content}
          </Modal.Body>
           {this.props.children}
        </Modal>
        </div>
      
    );
  }
}
Alert.defaultProps={title:'提示信息', content:"",show:true,isShowButton:true,buttonTitle:'提示按钮',onClose:null}