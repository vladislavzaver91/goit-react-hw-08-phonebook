import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from "redux/contacts/operations";
import { selectError, selectIsLoading } from "redux/contacts/selectors";
import { ContactList } from "components/ContactList";
import { Filter } from "components/Filter";
import { ModalContact } from "components/ModalContact";
import { Container, Wrapp, Btn } from './Contacts.styled';

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    const [openModal, setOpenModal] = useState(false);
    const toggleModal = () => setOpenModal(state => !state);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <Container>
                <Btn type="button" onClick={toggleModal}>
                </Btn>
                <Wrapp>
                    <Filter />
                    {isLoading && !error && (
                        <Wrapp>
                            <b>Request in progress...</b>
                        </Wrapp>
                        )}
                    <ContactList />
                </Wrapp>
                {openModal && <ModalContact onClose={toggleModal} />}
            </Container>
        </>
    );
};

