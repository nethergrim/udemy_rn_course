import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';




class EmployeeCreate extends Component {



    render() {


        return (
            <Card>
                <CardSection>
                    <Input
                    label="Name"
                    placeholder="Jane"
                    >
                    </Input>


                </CardSection>
                <CardSection>
                <Input
                    label="Phone"
                    placeholder="555-555-5555"
                    >
                    </Input>
                </CardSection>
                <CardSection></CardSection>
                <CardSection>

                <Button>
                    Save
                </Button>

                </CardSection>
            </Card>
        );
    }
}



export default EmployeeCreate;