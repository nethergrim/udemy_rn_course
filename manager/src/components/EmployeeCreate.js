import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';




class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    >
                    </Input>
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    >
                    </Input>
                </CardSection>
                <CardSection>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday"></Picker.Item>
                        <Picker.Item label="Tuesday" value="Tuesday"></Picker.Item>
                        <Picker.Item label="Wednesday" value="Wednesday"></Picker.Item>
                        <Picker.Item label="Thursday" value="Thursday"></Picker.Item>
                        <Picker.Item label="Friday" value="Friday"></Picker.Item>
                        <Picker.Item label="Saturday" value="Saturday"></Picker.Item>
                        <Picker.Item label="Sunday" value="Sunday"></Picker.Item>
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button>
                        Save
                    </Button>
                </CardSection>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};


export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);