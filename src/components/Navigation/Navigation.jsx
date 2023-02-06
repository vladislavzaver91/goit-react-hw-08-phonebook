import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
    <nav>
        <StyledLink to="/">Phonebook</StyledLink>
        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
    );
};