import { useDispatch } from 'react-redux';
import { AppRegistration } from '@mui/icons-material';
import { Button, Container, TextField, Box } from '@mui/material';
import { useFormik } from 'formik';
import { signupUser } from 'redux/auth/authOperations';

const initialValues = {
    name: '',
    email: '',
    password: '',
};

export const Registers = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues,
        onSubmit: (values, actions) => {
            dispatch(signupUser(values));
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
                            id="name"
                            name="name"
                            label="Name"
                            type="text"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            sx={{ mb: 4 }}
                        />
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
                            endIcon={<AppRegistration />}
                            sx={{ mx: 'auto', display: 'flex' }}
                        >
                            Create an account
                        </Button>
                    </form>
                </Box>
            </Container>
        </main>
    );
};
