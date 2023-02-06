import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { register } from 'redux/auth/authOperations';
import { Form, Label, Input } from './RegisterForm.styled';


export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = ev => {
        ev.preventDefault();
        const form = ev.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
    <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
            Username
            <Input type="text" name="name" />
        </Label>
        <Label>
            Email
            <Input type="email" name="email" />
        </Label>
        <Label>
            Password
            <Input type="password" name="password" />
        </Label>
        <Button size="small" variant="contained" type="submit">
            Register
        </Button>
    </Form>
    );
};