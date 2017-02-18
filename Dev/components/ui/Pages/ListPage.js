import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Back from './../Back.js'
import List from './../List.js'
import Icon from './../Icon.js'
import Search from './../Search.js'
 

 export default class ListPage extends Component {


 	constructor(props) {
 		super(props)
 		this.state = {
 			fields: this.props.fields,
 			isReload: false
 		}

 	}


    getSearchItems(list){

     return  this.state.fields;
   }
   setSearchItems(fields)
   {
    this.setState({fields:fields,isReload:true});
   

   }

   onRenderItem(item){


return this.props.onRenderItem(item);
   }
   onItemClick(item,index){

return this.props.onItemClick(item,index);
    
   }

   getTitle(){

   	return this.props.title;
   }
   onBackClick()
   {
     return this.props.onBack();
   }

   onFetch(searchItems,page,pageSize,onSuccess){
      this.props.onFetch(searchItems,page,pageSize,onSuccess)

   }

   renderSearch()
   {
       return this.props.isShowSearch  ?(<Search fields={this.state.fields} isIcon={true}  onSearch={this.setSearchItems.bind(this)}></Search> ) :null;
   }

componentWillReceiveProps(nextProps) {
    if (this.props.fields.length !=nextProps.fields.length && nextProps.fields.length>0) {
      // disabled这个属性改变了
      this.setState({
        fields: nextProps.fields
      })
    
    return false;
      //this.props.isReload=false;
    }
  }
	render()
	{
	return (<div>
             <Back title={this.getTitle()}
                 isFixedTop={false} onBack={this.onBackClick.bind(this)}>
                 {this.renderSearch()}
               <span>{this.props.onTitleChildren}</span>
             </Back>
             <div>
			  <List isReload={this.state.isReload} 
			        setSearchItems={this.getSearchItems.bind(this)} 
			        onRenderItem={this.onRenderItem.bind(this)}  
			        onItemClick={this.onItemClick.bind(this)} pageSize={this.props.pageSize}
                    onFetch={this.onFetch.bind(this)}></List>
			</div>
		</div>)

	}
   
 }

 ListPage.defaultProps={

 	 fields:[],
 	 title:[],
 	 onRenderItem:null,
 	 onBack:null,
 	 onFetch:null,
 	 onItemClick:null,
   onTitleChildren:null,
   isShowSearch:true,
   pageSize:15
 }