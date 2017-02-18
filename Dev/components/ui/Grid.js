import React,{Component} from 'react'
import { Router, Route, browserHistory,Link  } from 'react-router';

export default class Grid extends Component{
 



handClick(e){

var target =e.target;
var href =target.getAttribute('href')




if(this.props.onClick){

this.props.onClick()
}
}

 renderRow(items,index){

  return (<div className="row" key={index}>
  { 

  	items.map((item,index)=>{


     return <div key={index} className={"col-xs-"+parseInt(12/this.props.cols)+" col-sm-"+ parseInt(12/this.props.cols)}
      style={{padding:'8px'}}
     >
     <Link to={item.href}>
          <img  className='img-circle' href={"/"+item.href}  onClick={this.handClick.bind(this)} src={item.src} title={item.title} width={this.props.width} height={this.props.height} />
     </Link>
     </div>
   })
 }
 </div>)
 }
	render() {


		var cols = this.props.cols;
		var rows = [];
		var rowIndex = 0;
		for (var i = 0; i < this.props.menus.length; i += this.props.cols) {
			if (rows[rowIndex] === undefined) {
				rows[rowIndex] = [];
			}
			for (var j = i; j <(i+cols); j++) {
				if (j >= this.props.menus.length) {
					continue;
				}

				rows[rowIndex].push(this.props.menus[j])
			}
			rowIndex++;

		}
		return (

			<div className="container-fiuled " style={{padding:'15px'}} >
			
			{
				rows.map((item, index) => {

					return this.renderRow(item, index)
				})
			}
			 </div>
			
		);


	}
}
Grid.defaultProps = {
	menus:[],
	cols:3,
	row:3,
	height:100,
	width:100,
	onClick:null
}

Grid.propTypes = {


onClick:React.PropTypes.func

}