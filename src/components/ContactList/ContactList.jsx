import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { ContactItem } from 'components/ContactItem';
import { FriendList } from './ContactList.styled';

export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const filteredContacts = contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase().trim())
    );

    return (
    <FriendList>
        {filteredContacts.map(contact => {
            return <ContactItem key={contact.id} contact={contact} />;
            })}
    </FriendList>
    );
};


// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { fetchContacts, delContact } from 'redux/contactsOperations';
// import { onDelContact } from 'utils/notify';
// import { FriendList, ContactItem, Friend, BtnDelete } from './ContactList.styled';

// export const ContactList = () => {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchContacts());
//     }, [dispatch]);

//     const contactList = useSelector(state => state.contacts.items);
//     const filter = useSelector(state => state.filter);

//     const filteredContacts = contactList.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase().trim())
//     );

//     return (
//         <FriendList>{filteredContacts.map(({id, name, number}) => (
//             <ContactItem key={id}>
//                 <Friend>{name}: {number}</Friend>
//                 <BtnDelete type="button" onClick={() => {
//                     onDelContact(name); 
//                     dispatch(delContact(id))}
//                     }>Delete</BtnDelete>
//             </ContactItem>
//         ))}
//         </FriendList>
//     )
// }

// ContactList.propTypes = {
//     filteredContacts: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     })),
// };