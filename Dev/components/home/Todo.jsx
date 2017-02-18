import React,{Component} from 'react'
import { Router, Route, browserHistory,Link  } from 'react-router';
import Back from './../ui/Back.jsx'
import Icon from './../ui/Icon.jsx'
import List from './../ui/List.jsx'
import LinkItem from './../ui/LinkItem.jsx'
import TodoActions from  './../../actions/TodoActions.jsx'

 export default class Todo extends Component
 {
    

    render(){
       

       TodoActions.create('1')
      var data=[]
       for (var i = 0; i < 30; i++) {
       	
       	data.push({title:"A"+i,value:"1"})
       }

       return (
               <div  className='full'>
                  <div>
                 <Back title='我的代办' isFixedTop={false}><Icon name='search'></Icon></Back>
                 </div>
                 <div className='list'>
                 <List  data={data} onRenderItem={
                 	(item)=>
                 	{  
                 		return  (<div style={{height:'30px'}}><span>{item.title}|{item.value}</span></div>)
                    }}>
                    
                 </List>
                 </div>
              </div>
       	)

    }
   
 }