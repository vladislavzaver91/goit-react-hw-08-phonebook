import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { FriendItem } from './ContactItem.styled';

export const ContactItem = ({ contact, deleteBtn }) => {
    return (
    <>
        {contact.map(({ name, number, id }) => {
            return (
            <FriendItem key={id}>
                <p>
                    {name}: {number}
                </p>
                <Button
                size="small"
                variant="outlined"
                type="button"
                onClick={() => deleteBtn(id)}
                >
                    delete
                </Button>
            </FriendItem>
            );
        })}
    </>
    );
};

ContactItem.propTypes = {
    contact: PropTypes.array.isRequired,
    deleteBtn: PropTypes.func.isRequired,
};