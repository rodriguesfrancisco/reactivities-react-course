import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import { ActivityList } from './ActivityList'
import { ActivityDetails } from '../details/ActivityDetails'
import { ActivityForm } from '../form/ActivityForm'

interface IProps {
    activities: IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity: IActivity | null;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (activity: IActivity | null) => void;
}

export const ActivityDashboard: React.FC<IProps> = (
    { activities, selectActivity, selectedActivity, editMode, setEditMode, setSelectedActivity }
) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <List>
                    <ActivityList activities={activities} selectActivity={selectActivity} />
                </List>
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode &&
                    (<ActivityDetails
                        activity={selectedActivity}
                        setEditMode={setEditMode}
                        setSelectedActivity={setSelectedActivity}
                    />)}
                {editMode && <ActivityForm setEditMode={setEditMode} />}
            </Grid.Column>
        </Grid>
    )
}
