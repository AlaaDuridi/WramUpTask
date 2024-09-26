import {Button} from '@mui/material';

const MyButton = ({variant, color, sx, text}) => {
    return (
        <Button
            color={color}
            variant={variant}
            sx={{
                ...sx,
                width: {
                    xs: '100px',
                    sm: '150px',
                    md: '180px',
                    lg: '200px',
                },
                height: {
                    xs: '40px',
                    sm: '50px',
                    md: '55px',
                    lg: '60px',
                },
            }}

        >
            {text}
        </Button>
    );
}

export default MyButton;