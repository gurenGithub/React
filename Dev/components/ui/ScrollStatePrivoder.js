import React,{Component} from 'react'
export default class ScrollStatePrivoder extends Component{


ScrollStatePrivoder(props)
{
  super(props);
  this.state={isShowChild:this.props.isShowChild}
}
 componentDidMount() 
 {
 // 恢复所有HTML的状态信息

 }
 componentWillReceiveProps(nextProps) {
 	
 	if(nextProps.isShowChild!=this.props.isShowChild){
 		
 		this.setState({isShowChild:nextProps.isShowChild})
 	}
 },
render() {
	return (
		<div ref='StatePrivoder'  className='scroll'> 
          {this.state.isShowChild?this.props.children:null}
       </div>
     
	);
}

}

ScrollStatePrivoder.defaultProps={

	isShowChild:true
}

