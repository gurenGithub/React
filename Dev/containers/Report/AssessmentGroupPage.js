import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import List from './../../components/ui/Pages/ListPage.js'
import { Router, Route, browserHistory,Link  } from 'react-router';
class AssessmentGroupPage extends Component {


	constructor(props) {
		super(props);

	}

	onItemClick(item){

	}
	onRenderItem(item){

		return <Link to={item.href}><div>{item.title}</div></Link>

	}
	onBack() {
		this.props.history.push('/report')
	}
	onFetch(searchItems,page,pageSize,onSuccess){

      var reports=[
         {title:'室分分析报表',href:'/SFReportGroup'},
         {title:'及时率报表',href:'/List/GetRPTimelyRateReport/及时率报表'},
         {title:'合同签订阶段报表',href:'/ConstractGroup'},
         {title:'派单清单',href:'/List/GetRPProjectAssignReport/派单清单'},
         {title:'施工阶段报表',href:'/AsConstructorGroup'},
         {title:'送审归档阶段报表',href:'/SubmitGroup'},
         {title:'验收阶段报表',href:'/AcceptGroup'},
         {title:'暂估阶段报表',href:'/ZGGroup'}
      ]
      var data={List:reports,TotalCount:2};
      onSuccess(data)
	}

	render() {
		
		return <div><List 
		         onBack={this.onBack.bind(this)}
                 title="报表"
                 onItemClick={this.onItemClick.bind(this)}
                 onRenderItem={this.onRenderItem.bind(this)}
                 onFetch={this.onFetch.bind(this)}
                 isShowSearch={false}
		></List></div>
	}
}

export default AssessmentGroupPage