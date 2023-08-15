import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

interface OperatorKeyProps {
    content: string;
    whenPressed: Function;
}

function OperatorKey(props: OperatorKeyProps) {
    const { content, whenPressed } = props;

    return content.includes('M') ||
        content.includes('C') ||
        content.includes('(') ||
        content.includes(')') ? (
        <Grid xs={1.5}>
            {(content.includes('(') || content.includes(')')) && (
                <Button
                    variant="outlined"
                    onClick={whenPressed(content)}
                    sx={{ width: '100%' }}
                >
                    {content}
                </Button>
            )}
            {(content.includes('M') || content.includes('C')) && (
                <Button
                    variant="outlined"
                    onClick={whenPressed()}
                    sx={{ width: '100%' }}
                >
                    {content}
                </Button>
            )}
        </Grid>
    ) : (
        <Grid xs={3}>
            <Button
                variant="outlined"
                onClick={whenPressed()}
                sx={{ width: '100%' }}
            >
                {content}
            </Button>
        </Grid>
    );
}

export default OperatorKey;
