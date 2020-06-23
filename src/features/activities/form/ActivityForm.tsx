import React from 'react'
import { Segment, Form, TextArea } from 'semantic-ui-react'

export const ActivityForm = () => {
    return (
        <Segment>
            <Form>
                <Form.Input placeholder='Title' />
                <Form.Input control={TextArea} placeholder='Description' />
                <Form.Input placeholder='Category' />
                <Form.Input type='date' placeholder='Date' />
                <Form.Input placeholder='City' />
                <Form.Input placeholder='Venue' />
            </Form>
        </Segment>
    )
}