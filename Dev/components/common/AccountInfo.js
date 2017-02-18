import React,{Component} from 'react'
import Row  from './../ui/Row.js';
import Column from './../ui/Column.js'
export default class AccountInfo extends Component{



    render(){
     
      

      var me=this;

       return ( <div className='padding8'>
       	<Row style={{padding:'8px'}}>
       	<Column cols="3">
           <img  className='img-circle' height="100" width="100" src={me.props.img} />
       	</Column>
       	<Column cols="9">
       	<div style={{ paddingLeft:'15px'}}>
       	   <h3>{me.props.userName}</h3>
           <h5 className='textEllipsis'>{me.props.roleName}</h5>
           </div>
        	</Column>
        	</Row>
       	
        	</div>
       	)

         
    }

}

AccountInfo.defaultProps={


    img:null,
    userName:null,
    roleName:null
}