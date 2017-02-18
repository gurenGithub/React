import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import List from './../../components/ui/Pages/ListPage.js'
import { Router, Route, browserHistory,Link  } from 'react-router';
import {getList} from '../../actions/CommonAction.js'
import Back from './../../components/ui/Back.js'
import Row from './../../components/ui/Row.js'
import Column from './../../components/ui/Column.js'
export default class ViewPage extends Component {


	constructor(props) {
		super(props);

		

        
	}

	onItemClick(item){

	}
	onRenderItem(item){

		
	}
	onBack() {


		if (this.props.onBack) {
			this.props.onBack();
		}
	}


renderItems(){

	
	return this.props.fields.map((obj,index)=>{

if(!obj.IsViewShow){

	return;
}
		return  <span   key={index} style={{marginBottom:'10px',display:'block' }}>
		<Row ><Column  cols="6"><div className='textRight textEllipsis'>{obj.title}：</div></Column><Column cols="6">
		<div className='textEllipsis'>{this.props.item[obj.name]}</div></Column>
		 </Row></span>
	})
}
	render() {
 

  return  <div>
  <div> <Back title={this.props.title}  onBack={this.onBack.bind(this)} ></Back></div>
    
  <div className='list' style={{marginTop:'50px'}}>
       {this.renderItems()}   
       </div>  
  </div>
	}
}


ViewPage.defaultProps={
	onBack:null,
	title:"",
	fields:[],
	item:{}
}


