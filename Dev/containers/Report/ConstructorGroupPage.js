import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import List from './../../components/ui/Pages/ListPage.js'
import { Router, Route, browserHistory,Link  } from 'react-router';
class ConstructorGroupPage extends Component {


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
         {title:'单点施工',href:'List/GetStationConstructorConstructionReport/施工单位-单点施工'},
         {title:'单点验收',href:'List/GetStationConstructorAcceptReport/施工单位-单点验收'},
         {title:'合同送审',href:'List/GetRPAnalysConstructorDevolveReport/施工单位-合同送审'},
         {title:'档案移交',href:'List/GetConstructorConstractReport/施工单位-档案移交'}
      ]
      var data={List:reports,TotalCount:2};
      onSuccess(data)
	}

	render() {
		return <div><List 
		         onBack={this.onBack.bind(this)}
                 title="施工单位"
                 onItemClick={this.onItemClick.bind(this)}
                 onRenderItem={this.onRenderItem.bind(this)}
                 onFetch={this.onFetch.bind(this)}
                 isShowSearch={false}
		></List></div>
	}
}

export default ConstructorGroupPage