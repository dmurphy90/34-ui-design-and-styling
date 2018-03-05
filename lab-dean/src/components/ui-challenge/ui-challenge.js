import React from 'react';
import ReactDom from 'react-dom';
import FormInput from './ui-components/text/text';
import Button from './ui-components/button/button';
import CheckBox from './ui-components/checkbox/checkbox';
import RadioButton from './ui-components/radio/radio';
import SelectBox from './ui-components/select/select';

class UiChallenge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      dropDown: '',
      checkbox: false,
      radio: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }


  render() {
    return (
      <div className="application">
        <h1>UI Challenge</h1>
  
        <div className="form-container">
          <form onSubmit={this.handleSubmit} noValidate>

            <h4>Text Input</h4>
            <FormInput 
              config={({
                className: 'validated-input',
                name: 'title',
                value: this.state.title,
                type: 'text',
                placeholder: 'Your Text Here',
                id:'form-box',
              })}
              onChange={this.handleChange}/>


            <h4>Select Box</h4>
            <SelectBox  
              config={({
                menuName: this.state.dropDown || 'Select',
                item1: 'Option 1',
                item2: 'Option 2',
                item3: 'Option 3',
                item4: 'Option 4',
              })}
              onChange={this.handleChange} />


            <h4>Radio</h4>
            <RadioButton
              config={({
                name: 'group1',
                divName: 'radio-btn-div',
                labelName: 'radio-btn-label',
                id: 'radio-btn',
              })} />

            <RadioButton
              config={({
                name: 'group1',
                divName: 'radio-btn-div',
                labelName: 'radio-btn-label',
                id: 'radio-btn2',
              })}/>


            <h4>Check Box</h4>
            <CheckBox
              config={({
                divName: 'checkbox-div',
                labelName: 'checkbox-label',
                id: 'check-box',
                name: 'checkbox',
              })}/>

            <h4>Button</h4>
            <Button
              config={({
                className: 'submit_button',
                name: 'button-one',
                buttonText: 'click here',
              })}/>

          </form>
        </div>
      </div>
    );
  }
}

export default UiChallenge;