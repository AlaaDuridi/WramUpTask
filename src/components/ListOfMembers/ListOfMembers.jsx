import {
    Grid2 as Grid
} from "@mui/material";
import Member from "../Member";

const ListOfMembers = ({members}) => {
    return (
        <>
            {members.map((member) => {
                return (
                    <Grid item xs={12}>
                        <Member member={member}/>
                    </Grid>
                );
            })}</>
    );

}

export default ListOfMembers;