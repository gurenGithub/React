import React, {Component} from 'react'
import Text from  './Text.js'
import Select from './Select.js'
import TextArea from  './TextArea.js'
import Row from './../ui/Row.js'
import Column from './../ui/Column.js'
import Icon from './../ui/Icon.js'

const keyWorkType='keyWork';

export default class Search extends Component {




setFields(_fields){
		var item = {};
		var key = this.props.key;
		if (!key && _fields && _fields.length > 0) {
			 var field=_fields.find((obj) => {
				return obj.name == key
			});
			 if(field!=null){
			 	item= field;
			 }else{
			 	item = _fields[0];
			 
			 }
			 

		} else {
			item.name = key;
			_fields.push(item)

		}
		item.type = keyWorkType;

		return _fields;

}
	constructor(props) {
		super(props);

		

		this.state = {
			isShowMore: false,
			fields: this.setFields(this.props.fields),
			isShowModal:true

		}
	}

onItemChange(item,value){

	item.value=value
}
renderItem(item,index){


switch(item.type){


    case keyWorkType:
    return null;
	case "select" :
	return <Select key={index} name={item.name} title={item.title} value={item.value} 
	 options={item.options}  onChange={(value)=>{ this.onItemChange(item,value) }.bind(this)}></Select>;

	default:

	return <Text key={index} name={item.name} title={item.title} value={item.value}  
     
	 onChange={(value)=>{ this.onItemChange(item,value) }.bind(this)}/> 
   }
}
renderItems()
{

	if(!this.state.isShowMore){
		return false
	}
	return (<div> {this.state.fields.map((item,index)=>{
		return  this.renderItem(item,index);
	}.bind(this))}</div>)
}


onSearchHander(e)
{
  if(this.props.onSearch){

var newFields=[];

  	for (var i = 0; i < this.state.fields.length; i++) {
  		var field= this.state.fields[i];
  		if(field.value){
  			newFields.push(field);
  		}
  	}
     this.props.onSearch(newFields);
  }
  this.close()
}
close(){

	this.setState({isShowModal:false})
}

open(){

	this.setState({isShowModal:true})
}

componentWillReceiveProps(nextProps) {
      if (this.props.fields.length !=nextProps.fields.length) {
      // disabled这个属性改变了
      this.setState({
        fields: this.setFields(nextProps.fields)
      })
    return false;
      //this.props.isReload=false;
    }
  }
renderKeyWordText(){



var item= this.state.fields.find((obj)=>{return obj.type==keyWorkType});

return (<Text name={item.name}  

         value={item.value}  
     placeholder={item.title}
	    onChange={(value)=>{ this.onItemChange(item,value) }.bind(this)}

		isShowTitle={false} prefix={<span onClick={this.showMoreHander.bind(this)

		}>
			 <Icon style={{fontSize:'15px'}}   name='search'/></span>}
			 stuffix ={<span 
			  >Go</span>} onStuffixClick={this.onSearchHander.bind(this)}
			 ></Text>)


	
}
showMoreHander(e){

var isShowMore= this.state.isShowMore;
 this.setState({isShowMore:!isShowMore});
}

	render() {

const  renderHtml=
		 (<div>  <div >
			 {this.renderKeyWordText()}
             </div>
               <div>
			 {this.renderItems()}
			 </div>
			  </div>)



		 if(this.props.isIcon){

		 	return <Icon name='search' onClick={this.open.bind(this)} isShowModal={this.state.isShowModal} modalTitle='搜索' >{
               this.state.isShowModal ?renderHtml :null}</Icon>
		 }
		
		return renderHtml;
		
	}
}
Search.defaultProps = {
	fields: [{title:'姓名', type:'text',name:'Name'},{title:'年龄', type:'select' ,options:[10,20,30]}],
	key:"",
	isIcon:false,
	onSearch:null

}
Search.propTypes = {
	fields: React.PropTypes.array,
	onSearch:React.PropTypes.func
}