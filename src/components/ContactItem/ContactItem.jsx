import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/contacts/operations';
import { ModalContact } from 'components/ModalContact';
import { FriendItem, ContactWrapp, Btn } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
    const [openModal, setOpenModal] = useState(false);
    const toggleModal = () => setOpenModal(state => !state);
    const dispatch = useDispatch();

    return (
    <FriendItem>
        <ContactWrapp>
            <p>{contact.name}:</p>
            <p>{contact.number}</p>
        </ContactWrapp>
        <ContactWrapp>
            <Btn type="button" onClick={toggleModal}>
                {/* <IconEdit /> */}
            </Btn>

            <Btn type="button" 
            onClick={() => dispatch(delContact(contact.id))}
            >
                {/* <IconDelete /> */}
            </Btn>
        </ContactWrapp>
        {openModal && (
            <ModalContact onClose={toggleModal} edit={true} values={contact} />
        )}
    </FriendItem>
    );
};