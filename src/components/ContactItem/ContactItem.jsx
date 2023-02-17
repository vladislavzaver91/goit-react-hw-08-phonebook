import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ModeEdit, PersonRemove } from '@mui/icons-material';
import { Box, IconButton, ListItem, Typography } from '@mui/material';
import { delContact } from 'redux/contacts/contactsOperations';
import { EditForm } from 'components/EditForm';
import { onDelContact } from 'utils/notify';

const style = {
    color: 'currentColor',
    '&:hover': {
        backgroundColor: 'primary',
        color: 'text.secondary',
    },
};

export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const [isEditOpen, setIsEditOpen] = useState(false);

    return (
        <ListItem
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: 4,
                backgroundColor: 'divider',
            }}
        >
            <Box
                sx={{
                    width: '550px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'text.primary',
                }}
            >
                <Typography variant="body1" component="p">
                    {name}:
                </Typography>
                <Typography variant="body1" component="span">
                    {number}
                </Typography>
            </Box>
            <Box
                display="flex"
                sx={{
                    color: 'text.primary',
                }}
            >
                <IconButton
                    type="button"
                    onClick={() => setIsEditOpen(true)}
                    color="inherit"
                    sx={style}
                >
                    <ModeEdit />
                </IconButton>
                <IconButton
                    type="button"
                    onClick={() => {
                        onDelContact(name);
                        dispatch(delContact(id));
                    }}
                    sx={style}
                >
                    <PersonRemove />
                </IconButton>
            </Box>
                {isEditOpen && (
                    <EditForm
                        id={id}
                        name={name}
                        number={number}
                        isEditOpen={isEditOpen}
                        onToggle={() => setIsEditOpen(false)}
                    />
                )}
        </ListItem>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};