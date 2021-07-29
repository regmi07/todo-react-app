import {List,ListItem,ListItemAvatar,ListItemText} from '@material-ui/core';

const Todo = (props) => (
    <List>
        <ListItem>
            <ListItemAvatar>

            </ListItemAvatar>
            <ListItemText primary={props.todo} secondary="deadline 🕗"  />
        </ListItem>
    </List>
);

export default Todo;