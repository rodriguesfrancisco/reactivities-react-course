import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import { ActivityList } from './ActivityList'

interface IProps {
    activities: IActivity[]
}

export const ActivityDashboard: React.FC<IProps> = ({ activities }) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <List>
                    <ActivityList activities={activities} />
                    {/* {activities.map((activity: IActivity) => (
                        <List.Item key={activity.id}>{activity.title}</List.Item>
                    ))} */}
                </List>
            </Grid.Column>
        </Grid>
    )
}
