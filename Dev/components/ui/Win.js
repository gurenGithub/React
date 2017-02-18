
import {Modal,Button} from 'react-bootstrap'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {loadding} from './Images.js'
import Alert from './Alert.js'

var Win={


       alert:function(content,onClose,title='提示信息'){

     var mountNode = document.querySelector("#mountNodeAlert");
		if (!mountNode || mountNode.length < 1) {


			mountNode = document.createElement("div");
			mountNode.id = "mountNodeAlert";
			document.body.appendChild(mountNode);
		}
		ReactDOM.render(<Alert title={title} onClose={onClose} content={content} show={false} isShowButton={false}/>, mountNode);
		document.querySelector("#bs_btn_alret").click();
	},
       loadding:function(title){
          
const modalInstance = (
  <div className="static-modal modal-backdrop fade in">
    <Modal.Dialog>
     
      <Modal.Body>
      <span className='loadding'>{title?title:'Loadding...'} </span> 
      </Modal.Body>
      
    </Modal.Dialog>
  </div>
);


		var mountNode = document.querySelector("#mountNodeloadding");
		if (!mountNode || mountNode.length < 1) {


			mountNode = document.createElement("div");
			mountNode.id = "mountNodeloadding";
			document.body.appendChild(mountNode);
		}
		ReactDOM.render(modalInstance, mountNode);

	}, closeLoadding: function() {
		var mountNode = document.querySelector("#mountNodeloadding");
		if (mountNode) {
			document.body.removeChild(mountNode)
		}
	}
}

module.exports=Win;
