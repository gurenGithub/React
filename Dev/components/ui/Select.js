import React, {	Component} from 'react'
import {FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap'
export const CssError="error";
export const CssSuccess="success"
export const CssWarning="warning"
export default class Select extends Component {

	constructor(props){
		super(props)
		this.state={value:''}
	}
	getValidationState() {
		const length = this.state.value.length;
		if (this.props.isRequired == true) {
			return length > 0 ? CssSuccess : CssError;
		} else if (this.props.onValid == null || this.props.onValid == undefined) {
			return CssSuccess;
		} else if (this.props.onValid(this.state.value) == true) {
			return CssSuccess
		} else if (this.props.onValid(this.state.value) == false) {
			return CssError;
		} else {
			return this.onValid(this.state.value)
		}
	}

	handleChange(e) {


		var obj = e.target;
		var index = obj.selectedIndex; // 选中索引
		var value = obj.options[index].value;
		this.setState({
			value: value
		});
		if (this.props.onChange) {
			this.props.onChange(value);
		}
	}


isJson(obj) {

		return typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length
	}
renderItems(){

	return this.props.options.map((item,index)=>{


        
		return (<option key={index} checked={(this.isJson(item) ?item.value:item)==this.state.value} value={this.isJson(item) ?item.value:item}>{this.isJson(item) ?item.text:item}</option>)
	}.bind(this))


}
  
   renderValidSelect(){

return ( <FormGroup
          controlId="formBasicText" 
          validationState={ this.getValidationState()}
        >
        {this.props.isShowTitle? <ControlLabel className='padding-left-10'> {this.props.title}</ControlLabel> :null}  
          

          <FormControl componentClass="select" placeholder="select"  value={this.state.value} onChange={this.handleChange.bind(this)}>
        {
        	this.renderItems()
        }
      </FormControl>
        </FormGroup>
    )
   }
   renderSelect(){


return (  <FormGroup
          controlId="formBasicText" >
        {this.props.isShowTitle? <ControlLabel className='padding-left-10'>{this.props.title}</ControlLabel> :null}  
         <FormControl {...this.props} componentClass="select" placeholder="select"  value={this.state.value} onChange={this.handleChange.bind(this)}>
           {
        	this.renderItems()
        }
      </FormControl>
        </FormGroup>
      )
   }
  render() {

  	return  (<div>{(this.props.onValid || this.props.isRequired) ?this.renderValidSelect(): this.renderSelect()}</div>)
	}
}
Select.defaultProps = {
	title:"",
	isShowTitle:true,
	placeholder:"Enter text",
    value:null,
    onValid:null,
    isRequired:false,
    onChange:null,
    type:'text',
    options:[]
   

}
Select.propTypes = {
	
}