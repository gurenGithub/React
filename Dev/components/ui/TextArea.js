import React, {	Component} from 'react'
import {FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap'
export const CssError="error";
export const CssSuccess="success"
export const CssWarning="warning"
export default class Text extends Component {

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
		this.setState({
			value: e.target.value
		});
		if (this.props.onChange) {
			this.props.onChange(this.state.value);
		}
	}


   renderValidText(){

return ( <FormGroup
          controlId="formBasicText" 
          validationState={ this.getValidationState()}
        >
        {this.props.isShowTitle? <ControlLabel className='padding-left-10'> {this.props.title}</ControlLabel> :null}  
          <FormControl {...this.props}
            componentClass="textarea"
            value={this.state.value}
            placeholder={this.props.placeholder}
            onChange={this.handleChange.bind(this)}
          />
        </FormGroup>
    )
   }
   renderText(){


return (  <FormGroup
          controlId="formBasicText" >
        {this.props.isShowTitle? <ControlLabel className='padding-left-10'>{this.props.title}</ControlLabel> :null}  
          <FormControl {...this.props}
            componentClass="textarea"
            value={this.state.value}
            placeholder={this.props.placeholder}
            onChange={this.handleChange.bind(this)}
          />
        </FormGroup>
      )
   }
  render() {


  	return  (<div>{(this.props.onValid || this.props.isRequired) ?this.renderValidText(): this.renderText()}</div>)
	}
}
Text.defaultProps = {
	title:"",
	isShowTitle:true,
	placeholder:"Enter text",
    value:null,
    onValid:null,
    isRequired:false,
    onChange:null
   

}
Text.propTypes = {
	
}