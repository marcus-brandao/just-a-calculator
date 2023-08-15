import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { Digit, Operator } from '../types';
import Output from '../components/Output';
import Keypad from '../components/Keypad';
// import { evaluate } from 'mathjs';

function Calculator() {
    const [memory, setMemory] = useState<number>(0);
    const [result, setResult] = useState<number>(0);
    const [waitingForOperand, setWaitingForOperand] = useState<boolean>(true);
    const [display, setDisplay] = useState<string>('0');
    const [expression, setExpression] = useState<string>('');

    const evalExpression = (expression: string) => {
        let resultado = eval(expression);
        // let resultado = evaluate(expression);
        return resultado;
    };

    const calculate = (
        rightOperand: number,
        pendingOperator: Operator
    ): boolean => {
        let newResult = result;

        switch (pendingOperator) {
            case '+':
                newResult += rightOperand;
                break;
            case '-':
                newResult -= rightOperand;
                break;
            case '×':
                newResult *= rightOperand;
                break;
            case '÷':
                if (rightOperand === 0) {
                    return false;
                }
                newResult /= rightOperand;
                break;
            case '^':
                newResult **= rightOperand;
                break;
        }

        setResult(newResult);
        setDisplay(newResult.toString().toString().slice(0, 12));

        return true;
    };

    // Pad buttons handlers
    const onDigitButtonClick = (digit: Digit) => {
        let newDisplay = display;

        if ((display === '0' && digit === 0) || display.length > 12) {
            return;
        }

        if (waitingForOperand) {
            newDisplay = '';
            setWaitingForOperand(false);
        }

        if (display !== '0') {
            newDisplay = newDisplay + digit.toString();
        } else {
            newDisplay = digit.toString();
        }

        setDisplay(newDisplay);
    };

    const onPointButtonClick = () => {
        let newDisplay = display;

        if (waitingForOperand) {
            newDisplay = '0';
        }

        if (newDisplay.indexOf('.') === -1) {
            newDisplay = newDisplay + '.';
        }

        setDisplay(newDisplay);
        setWaitingForOperand(false);
    };

    const onOperatorButtonClick = (operator: Operator) => {
        const operand = Number(display);

        switch (operator) {
            case '-':
            case '+':
                setExpression(expression + operand + operator);
                setDisplay('');
                break;
            case '×':
                setExpression(expression + operand + '*');
                setDisplay('');
                console.log(expression);
                break;
            case '÷':
                setExpression(expression + operand + '/');
                setDisplay('');
                console.log(expression);
                break;
            case '^':
                setExpression(expression + operand + '**');
                setDisplay('');
                console.log(expression);
                break;
            case '(':
            case ')':
                setExpression(expression + display + operator);
                setDisplay('');
                break;
            // case '%':
            //     break;
            // case '√':
            //     setExpression(`${expression} sqrt()`);
            //     setDisplay('');
            //     console.log(expression);
            //     break;
        }

        setWaitingForOperand(true);
    };

    const onEqualButtonClick = () => {
        const resultado = evalExpression(expression + display);

        setResult(resultado);
        console.log(resultado);
        setDisplay(String(resultado));
        setWaitingForOperand(true);
    };

    const onAllClearButtonClick = () => {
        setMemory(0);
        setResult(0);
        setDisplay('0');
        setExpression('');
        setWaitingForOperand(true);
    };

    const onClearEntryButtonClick = () => {
        setDisplay('0');
        setWaitingForOperand(true);
        console.log('limpei');
    };

    const onMemoryRecallButtonClick = () => {
        setDisplay(memory.toString());
        setWaitingForOperand(true);
        console.log('chameio');
    };

    const onMemoryClearButtonClick = () => {
        setMemory(0);
        setWaitingForOperand(true);
    };

    const onMemoryPlusButtonClick = () => {
        setMemory(memory + Number(display));
        setWaitingForOperand(true);
    };

    const onMemoryMinusButtonClick = () => {
        setMemory(memory - Number(display));
        setWaitingForOperand(true);
    };

    return (
        <div
            style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
            }}
        >
            <CalculatorBase>
                <Grid container spacing={2}>
                    <OutputContainer>
                        {' '}
                        <Output
                            value={display}
                            hasMemory={memory !== 0}
                            expression={expression}
                        />
                    </OutputContainer>
                    <Keypad
                        onAllClearButtonClick={onAllClearButtonClick}
                        onClearEntryButtonClick={onClearEntryButtonClick}
                        onMemoryClearButtonClick={onMemoryClearButtonClick}
                        onMemoryMinusButtonClick={onMemoryMinusButtonClick}
                        onMemoryPlusButtonClick={onMemoryPlusButtonClick}
                        onMemoryRecallButtonClick={onMemoryRecallButtonClick}
                        onDigitButtonClick={onDigitButtonClick}
                        onPointButtonClick={onPointButtonClick}
                        onOperatorButtonClick={onOperatorButtonClick}
                        onEqualButtonClick={onEqualButtonClick}
                    />
                </Grid>
            </CalculatorBase>
        </div>
    );
}

export default Calculator;

const OutputContainer = styled(`div`)(({ theme }) => ({
    width: '100%',
    textAlign: 'right',
    height: '2em',
    padding: theme.spacing(2),
    fontSize: '3em',
    overflow: 'hidden',
}));

const CalculatorBase = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    borderRadius: 15,
    width: '50%',
}));
