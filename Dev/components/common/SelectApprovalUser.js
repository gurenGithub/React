import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Modal,Button} from 'react-bootstrap'
import List from './../ui/List.js'
import Row from './../ui/Row.js'
import Column from './../ui/Column.js'
import API from './../../Ajax/API.js'

export default class SelectApprovalUser extends Component{


 constructor(props){
 	super(props)
 	this.state={showModal:false,selectedUsers:[],isReject:false,isReload:false}
 }

 componentWillMount(){


 }

 fetchData(searchItems,page,pageSize,onSuccess){


 if(!this.state.isReject){
    var workflowid=this.props.workflowid
      API.workflow.getApprovalUser(workflowid,page,pageSize,function(data){
            if(data.Code==200)
            {
            	onSuccess(data.Data)
            }
      }.bind(this))
  }else{

  	var workflowid=this.props.workflowid
      API.workflow.getRejectApprovalUser(workflowid,page,pageSize,function(data){
            if(data.Code==200)
            {
            	onSuccess(data.Data)
            }
      }.bind(this))
  }
 }
	close() {
    this.setState({ showModal: false });

     if(this.props.onClose){
     	this.props.onClose(this.state.selectedUsers,this.state.isReject)
     }
  }
   open() {
    this.setState({ showModal: true });
  }



onSetRejectHandler(isReject){

 this.setState({isReject:isReject,isReload:true})
}
onSelectUserItem(e){

}
  renderUserItem(item,index){


var _selectItem= this.state.selectedUsers.find(function(selectItem){return selectItem.ApprovlUserName== item.ApprovlUserName});
item.isSelected=_selectItem?true:false;

  	return (<Row>	
  		<Column cols={2}><div  style={{height:'60px',lineHeight:'60px',borderRight:'1px solid #ccc',textAlign:'center'}}>
  		  <input type="checkbox" checked={item.isSelected} onChange={
  		  	(e)=>{

                var target = e.target;
  		  		item.isSelected= target.checked;
  		  		var selectedUsers= this.state.selectedUsers;
  		  		if(item.isSelected){
  		  			
  		  			selectedUsers.push(item)
  		  		}else{
                   for (var i = 0; i < selectedUsers.length; i++) {
                   	 var _item = selectedUsers[i];
                   	 if(_item.ApprovlUserID== item.ApprovlUserID){
                   	 selectedUsers=	selectedUsers.splice(i,0,0);
                   	 	break;
                   	 }
                   }
  		  		}

  		  		this.setState({selectedUsers:selectedUsers});
  		  	}.bind(this)

  		  }  className='vertical-middle'/></div></Column>
  	<Column cols={10}>
  	<div style={{height:'50px'}}>
  	    <h4>{item.ApprovlUserName}</h4>
  	    <div>{item.RoleName}</div>
  	    </div>
  	    </Column>
  	</Row>)
  	

  }

	renderButtonTitle() {
		var titles = [];
		var selectedUsers = this.state.selectedUsers;
		for (var i = 0; i < selectedUsers.length; i++) {
			var _item = selectedUsers[i];
			if (_item.isSelected == true) {
				titles.push(_item.ApprovlUserName);
				continue;
			}
		}
		if (titles.length > 0) {
			return titles.join(",");
		}
		return '选择审批人'
	}

	renderSelectButtons(){

if(this.props.isReject){

	return (<span style={{marginRight:'10px'}}>
		<Button onClick={()=>{this.onSetRejectHandler(true)}.bind(this)}>上一步骤审批人</Button>
        <Button onClick={()=>{this.onSetRejectHandler(false)}.bind(this)} style={{marginBottom:'10px'}}>下一步审批人</Button>
         
         </span>)
	}

return  
}

  render() {
  
    return (<div>
        <button type="button" className="btn btn-primary" style={{width:'100%'}} onClick={this.open.bind(this)}> {this.renderButtonTitle()}</button>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.isReject?'选择上一步骤审批人':'选择审批人'} </Modal.Title>
          </Modal.Header>
          <Modal.Body> 
          <div className='full'>
           <List className='list' onFetch={this.fetchData.bind(this)}  isReload={this.state.isReload} onRenderItem={this.renderUserItem.bind(this)} />
          </div>
          </Modal.Body>
          <Modal.Footer>

           {this.renderSelectButtons()}
           <Button onClick={this.close.bind(this)} style={{marginBottom:'10px'}}>确定</Button> 
          </Modal.Footer>
        </Modal>
      </div>)
}}

SelectApprovalUser.defaultProps={

	isReject:false,
	workflowid:null,
	onClose:null
}