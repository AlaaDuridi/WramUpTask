import {Box, Button, ButtonGroup, Grid2 as Grid, Typography} from '@mui/material';
import SearchBar from './components/SearchBar';
import {Fragment} from "react";
import ListOfMembers from "./components/ListOfMembers";
import MyButton from "./components/Button/Button.jsx";


const App = () => {
    const members = [
        {id: "1", name: "Carolien Bloeme", selected: false},
        {id: "2", name: "Sun Jun", selected: true},
        {id: "3", name: "Song Bao", selected: false},
        {id: "4", name: "Olivia Arribas", selected: true},
        {id: "5", name: "Bonginkosi Mdladlana", selected: false},
        {id: "6", name: "Arina Belomestnykh", selected: true},
        {id: "7", name: "Jacqueline Likoki", selected: false},
    ];

    return (
        <Fragment>
            <Grid sx={{margin: 0, p: 3}} container direction='column'>
                <Grid item>
                    <Typography variant='h6'>WrampUp Task </Typography>
                </Grid>
                <Grid container item direction='column'>
                    <Grid item>
                        <Typography variant='h6'>Add Employees to Front End development Team </Typography>
                    </Grid>
                    <Grid container item xs={12} direction='column'
                          justifyContent='center' alignItems='center'>
                        <Grid
                            item
                            spacing={2}
                            direction='column'
                            container
                            xs={12}
                            sx={{
                                width: '70%',
                            }}
                        >

                            <Grid
                                item
                                container
                                spacing={2}
                                xs={12}
                                algignItems='center'
                                justifyContent={'center'}
                                direction='column'
                            >
                                {/* your main box goes here */}
                                <Grid item xs={12}> <SearchBar/></Grid>
                                <Grid item container direction='column' xs={12}>
                                    <ListOfMembers members={members}/>
                                </Grid>

                            </Grid>
                            <Grid
                                item
                                container
                                justifyContent='center'
                                alignItems='center'
                            >
                                <Grid item>
                                    <MyButton
                                        variant="outlined"
                                        color="#888" text="Cancel"/>
                                </Grid>
                                <Grid item>
                                    <MyButton
                                        variant="contained"
                                        text="Cancel"
                                        sx={{
                                            background: "linear-gradient(to right, #56CCF2, #2F80ED)",
                                            color: "white",
                                            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default App;
