import {Avatar, Checkbox, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import {CheckCircle, RadioButtonUnchecked} from "@mui/icons-material";

const Member = ({member}) => {
    return (
        <ListItem
            container
            sx={{
                border: '1px solid #B7B7B7'
            }}
            dense
            disableGutters
            key={member.id}
            secondaryAction={
                <Checkbox
                    sx={{pr: 2}}
                    edge="end"
                    checked={member.selected}
                    icon={<RadioButtonUnchecked/>}
                    checkedIcon={<CheckCircle sx={{color: '#8FD14F'}}/>}
                />
            }
            disablePadding
        >
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar
                        sx={{bgcolor: member.selected ? "3C3D37" : "#B7B7B7"}}
                    />
                </ListItemAvatar>
                <ListItemText
                    sx={{color: member.selected ? "#3C3D37" : "#B7B7B7"}}
                    id={member.id}
                    primary={`${member.name}`}
                />
            </ListItemButton>
        </ListItem>
    )
}

export default Member;