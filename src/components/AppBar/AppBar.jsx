import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { AuthNav } from 'components/AuthNav';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { Header, Container } from './AppBar.styled';

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Header>
            <Navigation />
            <Container>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Container>
        </Header>
    );
};