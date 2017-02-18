import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import List from './../../components/ui/Pages/ListPage.js'
import { Router, Route, browserHistory,Link  } from 'react-router';
class SFReportGroupPage extends Component {


	constructor(props) {
		super(props);

	}

	onItemClick(item){

	}
	onRenderItem(item){

		return <Link to={item.href}><div>{item.title}</div></Link>

	}
	onBack() {
		this.props.history.push('/AssessmentGroup')
	}
	onFetch(searchItems,page,pageSize,onSuccess){

      var reports=[
         {title:'施工单位',href:'List/GetRPSFProgressConstructorReport/室分分析报表-施工单位'},
         {title:'建维网格',href:'List/GetRPSFProgressNetworkGridReport/室分分析报表-建维网格'}
      ]
      var data={List:reports,TotalCount:2};
      onSuccess(data)
	}

	render() {

		
		return <div><List 
		         onBack={this.onBack.bind(this)}
                 title="室分分析报表"
                 onItemClick={this.onItemClick.bind(this)}
                 onRenderItem={this.onRenderItem.bind(this)}
                 onFetch={this.onFetch.bind(this)}
                 isShowSearch={false}
		></List></div>
	}
}

export default SFReportGroupPage