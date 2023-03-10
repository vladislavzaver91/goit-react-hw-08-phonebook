import { useDispatch } from 'react-redux';
import { Button, Container, TextField, Box } from '@mui/material';
import { LoginOutlined } from '@mui/icons-material';
import { useFormik } from 'formik';
import { loginUser } from 'redux/auth/authOperations';

const initialValues = {
    email: '',
    password: '',
};

export const Login = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues,
        onSubmit: (values, actions) => {
            dispatch(loginUser(values));
            actions.resetForm();
        },
    });

    return (
        <main>
            <Container sx={{ pt: 5 }}>
                <Box
                p={4}
                mb={5}
                mx="auto"
                sx={{
                    maxWidth: '400px',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                }}
                >
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="E-mail"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            sx={{ mb: 4 }}
                        />
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            sx={{ mb: 5 }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            endIcon={<LoginOutlined />}
                            sx={{ mx: 'auto', display: 'flex' }}
                        >
                            Log In
                        </Button>
                    </form>
                </Box>
            </Container>
        </main>
    );
};

