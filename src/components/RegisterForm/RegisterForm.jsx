import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label, Input, Btn} from './RegisterForm.styled';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = ev => {
        ev.preventDefault();
        const form = ev.target;
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
            User name
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
        <Btn type="submit">Register</Btn>
    </Form>
    );
};