import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { logIn } from 'redux/auth/authOperations';
import { Form, Label, Input } from './LoginForm.styled';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = ev => {
        ev.preventDefault();
        const form = ev.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
    <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
            Email
            <Input type="email" name="email" />
        </Label>
        <Label>
            Password
            <Input type="password" name="password" />
        </Label>
        <Button size="small" variant="contained" type="submit">
            Log In
        </Button>
    </Form>
    );
};