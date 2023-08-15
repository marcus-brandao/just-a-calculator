import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface DisplayProps {
    hasMemory: boolean;
    expression: string;
    value: string;
}

const StyledIndicatorList = styled.div`
    font-size: 1rem;
    opacity: 0.4;
    text-align: right;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.25rem;
    min-height: 1rem;
`;

const StyledExpression = styled.p`
    margin-left: auto;
`;

const StyleScreen = styled.input`
    width: 100%;
    color: #1976d2;
    font-size: 3rem;
    overflow: hidden;
    border: none;
    border-radius: 5px;
    text-align: right;
    outline: none;
`;

const StyledDisplay = styled.div``;

export const Output: FunctionComponent<DisplayProps> = ({
    value,
    hasMemory,
    expression,
}) => {
    return (
        <StyledDisplay>
            <StyledIndicatorList>
                {hasMemory && <span>M</span>}

                <StyledExpression>{expression}</StyledExpression>
            </StyledIndicatorList>

            <StyleScreen value={value} readOnly />
        </StyledDisplay>
    );
};

export default Output;
