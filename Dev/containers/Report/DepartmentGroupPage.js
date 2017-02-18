import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import List from './../../components/ui/Pages/ListPage.js'
import { Router, Route, browserHistory,Link  } from 'react-router';
class DepartmentGroupPage extends Component {


	constructor(props) {
		super(props);

	}

	onItemClick(item){

	}
	onRenderItem(item){

		return <Link to={item.href}><div>{item.title}</div></Link>

	}
	onBack() {
		this.props.history.push('/AnalysisGroup')
	}
	onFetch(searchItems,page,pageSize,onSuccess){

      var reports=[
         {title:'单点验收',href:'List/GetRPAnalysDepartmentAccept/一体化中心-单点验收'},
         {title:'项目合同',href:'List/GetRPAnalysDepartmentProjectContractReport/一体化中心-项目合同'}
      ]
      var data={List:reports,TotalCount:2};
      onSuccess(data)
	}

	render() {
 
		return <div><List 
		         onBack={this.onBack.bind(this)}
                 title="一体化中心"
                 onItemClick={this.onItemClick.bind(this)}
                 onRenderItem={this.onRenderItem.bind(this)}
                 onFetch={this.onFetch.bind(this)}
                 isShowSearch={false}
		></List></div>
	}
}

export default DepartmentGroupPage