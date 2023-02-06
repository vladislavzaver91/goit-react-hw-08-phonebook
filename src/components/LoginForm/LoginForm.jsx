import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label, Input, Btn } from './LoginForm.styled';

export function LoginForm() {
    const dispatch = useDispatch();
    
    const handleSubmit = ev => {
        ev.preventDefault();

        const form = ev.target;
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
            <Btn type="submit">Log In</Btn>
        </Form>
    );
};