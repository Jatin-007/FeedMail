// adding users over here
import React, { Component } from 'react';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form'; // helps to communicate with the redux store to transfer the information
import SurveyField from './SurveyField';


const FIELDS = [
    {label: 'Survey Title', name:'Title'},
    {label: 'Subject Line', name: 'subject'},
    {label: 'Email Body', name:'body'},
    {label: 'Recipient List', name:'emails'},
];

class SurveyForm extends Component {

    renderFields() {
        return _.map(FIELDS, ({label, name})=> {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
        });
    }

    render () {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <button type="submit"> Submit </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm); // similar to connect helper