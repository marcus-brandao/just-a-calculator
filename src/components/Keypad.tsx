import Grid from '@mui/material/Unstable_Grid2';
import OperatorKey from './OperatorKey';
import NumberKey from './NumberKey';
import { Button } from '@mui/material';

interface KeypadProps {
    onMemoryRecallButtonClick: Function;
    onMemoryClearButtonClick: Function;
    onMemoryPlusButtonClick: Function;
    onMemoryMinusButtonClick: Function;
    onAllClearButtonClick: Function;
    onClearEntryButtonClick: Function;
    onDigitButtonClick: Function;
    onPointButtonClick: Function;
    onOperatorButtonClick: Function;
    onEqualButtonClick: Function;
}

function Keypad(props: KeypadProps) {
    const {
        onAllClearButtonClick,
        onClearEntryButtonClick,
        onMemoryClearButtonClick,
        onMemoryMinusButtonClick,
        onMemoryPlusButtonClick,
        onMemoryRecallButtonClick,
        onDigitButtonClick,
        onPointButtonClick,
        onOperatorButtonClick,
        onEqualButtonClick,
    } = props;

    return (
        <>
            <OperatorKey
                content="M-"
                whenPressed={() => onMemoryMinusButtonClick}
            />
            <OperatorKey
                content="M+"
                whenPressed={() => onMemoryPlusButtonClick}
            />
            <OperatorKey
                content="C"
                whenPressed={() => onClearEntryButtonClick}
            />
            <OperatorKey
                content="AC"
                whenPressed={() => onAllClearButtonClick}
            />
            <Grid xs={1.5}>
                <Button
                    variant="outlined"
                    onClick={() => onOperatorButtonClick('(')}
                    sx={{ width: '100%' }}
                >
                    (
                </Button>
            </Grid>
            <Grid xs={1.5}>
                <Button
                    variant="outlined"
                    onClick={() => onOperatorButtonClick(')')}
                    sx={{ width: '100%' }}
                >
                    )
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="outlined"
                    onClick={() => onOperatorButtonClick('^')}
                    sx={{ width: '100%' }}
                >
                    ^
                </Button>
            </Grid>
            <OperatorKey
                content="MC"
                whenPressed={() => onMemoryClearButtonClick}
            />
            <OperatorKey
                content="MR"
                whenPressed={() => onMemoryRecallButtonClick}
            />
            <Grid xs={3}>
                <Button
                    variant="outlined"
                    onClick={() => onOperatorButtonClick('√')}
                    sx={{ width: '100%' }}
                    disabled
                >
                    √
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="outlined"
                    onClick={() => {}}
                    sx={{ width: '100%' }}
                    disabled
                >
                    %
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="outlined"
                    onClick={() => onOperatorButtonClick('÷')}
                    sx={{ width: '100%' }}
                >
                    ÷
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="contained"
                    onClick={() => onDigitButtonClick(7)}
                    sx={{ width: '100%' }}
                >
                    7
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="contained"
                    onClick={() => onDigitButtonClick(8)}
                    sx={{ width: '100%' }}
                >
                    8
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="contained"
                    onClick={() => onDigitButtonClick(9)}
                    sx={{ width: '100%' }}
                >
                    9
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="outlined"
                    onClick={() => onOperatorButtonClick('×')}
                    sx={{ width: '100%' }}
                >
                    ×
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="contained"
                    onClick={() => onDigitButtonClick(4)}
                    sx={{ width: '100%' }}
                >
                    4
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="contained"
                    onClick={() => onDigitButtonClick(5)}
                    sx={{ width: '100%' }}
                >
                    5
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="contained"
                    onClick={() => onDigitButtonClick(6)}
                    sx={{ width: '100%' }}
                >
                    6
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="outlined"
                    onClick={() => onOperatorButtonClick('-')}
                    sx={{ width: '100%' }}
                >
                    -
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="contained"
                    onClick={() => onDigitButtonClick(1)}
                    sx={{ width: '100%' }}
                >
                    1
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="contained"
                    onClick={() => onDigitButtonClick(2)}
                    sx={{ width: '100%' }}
                >
                    2
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="contained"
                    onClick={() => onDigitButtonClick(3)}
                    sx={{ width: '100%' }}
                >
                    3
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="outlined"
                    onClick={() => onOperatorButtonClick('+')}
                    sx={{ width: '100%' }}
                >
                    +
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="outlined"
                    onClick={() => {}}
                    sx={{ width: '100%' }}
                    disabled
                >
                    History
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="contained"
                    onClick={() => onDigitButtonClick(0)}
                    sx={{ width: '100%' }}
                >
                    0
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="contained"
                    onClick={() => onPointButtonClick()}
                    sx={{ width: '100%' }}
                >
                    .
                </Button>
            </Grid>
            <Grid xs={3}>
                <Button
                    variant="outlined"
                    onClick={() => onEqualButtonClick()}
                    sx={{ width: '100%' }}
                >
                    =
                </Button>
            </Grid>
        </>
    );
}

export default Keypad;
