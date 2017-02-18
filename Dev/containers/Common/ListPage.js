import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import List from './../../components/ui/Pages/ListPage.js'
import { Router, Route, browserHistory,Link  } from 'react-router';
import {getList} from '../../actions/CommonAction.js'
import Row from './../../components/ui/Row.js'
import Column from './../../components/ui/Column.js'
import View from './ViewPage.js'
class ListPage extends Component {


	constructor(props) {
		super(props);
        this.state={fields:[],viewFields:[],isView:false,item:{}};        
        
	}

	onItemClick(item,index)
	{
		if(!index){index=""}
		var url =('/view/'+index+'/'+this.props.params.title+'明细信息');
        //window.open(url);


     this.setState({isView:true,item:item});
        
	}
	onRenderItem(item){


var list=[];
      for (var i = 0; i < this.state.fields.length; i++) 
        {
        	var field1=this.state.fields[i];
        	var field2={Title:'',FieldName:''}
        	if((++i)<this.state.fields.length){
               field2= this.state.fields[i];
        	}
         list.push(  
         	<Row key={i}>
         	  <Column cols={6}>{field1.Desc} : {item[field1.FieldName]}</Column>
         	  <Column cols={6}> {field2.Desc?(field2.Desc+":"+item[field2.FieldName]):null}</Column>
           </Row> ) 	
        }
		
		return list;

	}

	parseFiels(_Fields){

  
   var fields=[];
       if(!_Fields){

    return ;
       }
       _Fields.map((obj)=>
       {
        	obj.name=obj.FieldName;
            obj.title=obj.Desc;
       	if(obj.IsListShow){
       		
       		fields.push(obj);    
       	}
       })

       return fields;
       
	}
	onBack() {
		this.props.history.goBack(-1)
	}
	onFetch(searchItems,page,pageSize,onSuccess)
  {
      var module=this.props.params.module;
      this.props.getList(module,searchItems, page, pageSize, function(data) {
      if (data.Code == 200) {

				var _fields = this.parseFiels(data.Data.Fields);
				if (this.state.fields.length != _fields.length) {
					this.setState({
						fields: _fields,
						orgFields:data.Data.Fields
					});
				}
			 return	onSuccess(data.Data)
			}
    }.bind(this));
	}


renderView(){
if(this.state.isView){

 	return <View onBack={()=>
 		{
 			this.setState({isView:false})
 	}.bind(this)} fields={this.state.orgFields} title={'('+this.props.params.title+')明细'} item={this.state.item} />
 }

}
	render() {
 

 
		return <div>
      {this.renderView()}
      <div style={{display: this.state.isView? 'none' : ' block'}}>
		<List 
		         onBack={this.onBack.bind(this)}
                 title={this.props.params.title}
                 onItemClick={this.onItemClick.bind(this)}
                 onRenderItem={this.onRenderItem.bind(this)}
                 onFetch={this.onFetch.bind(this)}
                 isShowSearch={true}
                 fields={this.state.fields}
                 ></List></div></div>
	}
}
ListPage.defaultProps=
{
   list:[],totalCount:0,fields:[]
}
function mapStateToProps(state) 
{
	return {list:state.commonReducer.list,totalCount:state.commonReducer.totalCount,fields:state.commonReducer.fields}
}
export default connect(mapStateToProps, {
   getList
})(ListPage)