import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

interface NumberKeyProps {
    content: string;
    whenPressed: Function;
}

function NumberKey(props: NumberKeyProps) {
    const { content, whenPressed } = props;
    return (
        <Grid xs={3}>
            <Button
                variant="contained"
                onClick={() => whenPressed(content)}
                sx={{ width: '100%' }}
            >
                {props.content}
            </Button>
        </Grid>
    );
}

export default NumberKey;
