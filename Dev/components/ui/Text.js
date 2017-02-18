import React, {	Component} from 'react'
import {FormGroup,ControlLabel,FormControl,HelpBlock,InputGroup} from 'react-bootstrap'
export const CssError="error";
export const CssSuccess="success"
export const CssWarning="warning"
export default class Text extends Component {

	constructor(props){
		super(props)
		this.state={value:(this.props.value && this.props.value.toString()!="0") ?this.props.value:''}
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

		e.target.placeholder="Text";
		if (this.props.onChange) {
			this.props.onChange(e.target.value);
		}
	}




renderAddon(obj,_onClick){

	if(!obj){return null}

	return <InputGroup.Addon onClick={_onClick}>{obj}</InputGroup.Addon>
}
renderInput(){



 const text= (<FormControl {...this.props}
            type={this.props.type}
            value={this.state.value}
            placeholder={this.props.placeholder}
            onChange={this.handleChange.bind(this)}/>);

if(this.props.prefix || this.props.stuffix){

return (<InputGroup>
	      {this.renderAddon(this.props.prefix)}
         {text}
         {this.renderAddon(this.props.stuffix,this.props.onStuffixClick)}
      </InputGroup>)
}
return text;
}

   renderValidText(){

return ( <FormGroup
          controlId="formBasicText" 
          validationState={ this.getValidationState()}
        >
        {(this.props.isShowTitle&& this.props.title) ? <ControlLabel className='padding-left-10 labelMin'> {this.props.title}</ControlLabel> :null}  
          
          {this.renderInput()}
        </FormGroup>
    )
   }
   renderText(){


return (  <FormGroup
          controlId="formBasicText" >
        {this.props.isShowTitle? <ControlLabel className='padding-left-10 labelMin'>{this.props.title}</ControlLabel> :null}  
          
          {this.renderInput()}
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
	placeholder:'Text',
    value:null,
    onValid:null,
    isRequired:false,
    onChange:null,
    prefix:null,
    stuffix:null,
    onStuffixClick:null

   

}
Text.propTypes = {
	
}