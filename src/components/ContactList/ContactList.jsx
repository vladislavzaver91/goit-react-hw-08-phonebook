import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { ContactItem } from 'components/ContactItem';
import { Box } from '@mui/material';

export const ContactList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const contactList = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filter);

    const filteredContacts = contactList.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );

    return (
        <Box
            as="ul"
            sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}
        >
            {filteredContacts.map(({ id, name, number }) => (
                <ContactItem key={id} id={id} name={name} number={number} />
            ))}
        </Box>
    );
};

ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
};