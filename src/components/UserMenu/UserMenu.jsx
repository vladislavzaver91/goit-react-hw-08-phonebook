import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUserName } from 'redux/auth/selectors';
import { Container, Btn } from './UserMenu.styled';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectUserName);

    return (
    <Container>
        <b>Welcome, {name}</b>
        <Btn type="button" onClick={() => dispatch(logOut())}>
            {/* <Icon /> */}
        </Btn>
    </Container>
    );
};