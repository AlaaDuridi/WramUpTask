import {SearchOutlined} from '@mui/icons-material'
import {FormControl, Input, InputAdornment} from '@mui/material'

const SearchBar = () => {
    return (
        <FormControl fullWidth variant="standard">
            <Input
                id="standard-adornment-amount"
                placeholder='Find Members'
                startAdornment={<InputAdornment position="start"><SearchOutlined/></InputAdornment>}
            />
        </FormControl>
    )
}

export default SearchBar
