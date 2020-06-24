import React, { useState, FormEvent } from 'react'
import { Segment, Form, TextArea, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import { act } from 'react-dom/test-utils';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    activity: IActivity | null;
}

export const ActivityForm: React.FC<IProps> = ({ setEditMode, activity: initialFormState }) => {

    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState;
        } else {
            return {
                id: '',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue: ''
            }
        }
    };

    const [activity, setActivity] = useState<IActivity>(initializeForm);

    const handleSubmit = () => {
        console.log(activity);
    }

    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setActivity({ ...activity, [name]: value });
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input onChange={handleInputChange} name='title' placeholder='Title' value={activity.title} />
                <Form.Input onChange={handleInputChange} control={TextArea} name='description' placeholder='Description' value={activity.description} />
                <Form.Input onChange={handleInputChange} placeholder='Category' name='category' value={activity.category} />
                <Form.Input onChange={handleInputChange} type='date' name='date' placeholder='Date' value={activity.date} />
                <Form.Input onChange={handleInputChange} placeholder='City' name='city' value={activity.city} />
                <Form.Input onChange={handleInputChange} placeholder='Venue' name='venue' value={activity.venue} />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={() => setEditMode(false)} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}
