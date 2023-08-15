import { Alert, Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import { SetStateAction, useState } from 'react';
import { styled } from 'styled-components';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    border: 'none',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
};

interface LoginProps {
    isLogged: boolean;
    setIsLogged: Function;
}
function Login({ isLogged, setIsLogged }: LoginProps) {
    const [fail, setFail] = useState(false);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        console.log(user, password);
        try {
            const response = await axios.post(
                'http://localhost:3001/auth/login',
                {
                    username: user,
                    password: password,
                }
            );
            console.log(response);
            if (response.status === 201) {
                setIsLogged(true);
            }
        } catch (error) {
            setFail(true);
            console.log(error);
        }
    };

    const handleUser = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setUser(event.target.value);
        console.log(user);
    };

    const handlePassword = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setPassword(event.target.value);
        console.log(password);
    };

    return (
        <Box sx={style}>
            {isLogged ? (
                <p style={{ textAlign: 'center' }}>
                    You are logged in!
                    <p style={{ fontSize: '0.8rem' }}>
                        You can click outside the modal to return to the
                        calculator
                    </p>
                </p>
            ) : (
                <>
                    <Field
                        label="user"
                        margin="normal"
                        variant="standard"
                        id="user"
                        name="user"
                        value={user}
                        onChange={handleUser}
                    />
                    <Field
                        type="password"
                        label="password"
                        variant="standard"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePassword}
                    />
                    <Button onClick={handleLogin}>Login</Button>
                    {fail && (
                        <Alert severity="warning">
                            oh, oh... username or password incorrect!
                        </Alert>
                    )}
                </>
            )}
        </Box>
    );
}

const Field = styled(TextField)`
    margin-bottom: 1rem;
`;

export default Login;
