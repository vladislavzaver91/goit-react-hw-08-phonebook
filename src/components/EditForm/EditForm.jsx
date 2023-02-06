import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/selectors';
import { Form, Label, Input, Btn, BtnIcon } from './EditForm.styled';

export const EditForm = ({ onSave, values }) => {
    const { id } = values;
    const [name, setName] = useState(values.name);
    const [number, setNumber] = useState(values.number);

    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const handleChange = ev => {
        const { name, value } = ev.target;
        switch (name) {
            case 'name':
            setName(value);
            break;
            case 'number':
            setNumber(value);
            break;
            default:
            break;
        }
    };

    const handleSubmit = ev => {
        ev.preventDefault();

        const contact = { id, name, number };
        const nonDuplicateName = contacts.find(
            contact => contact.name === name && contact.number === number
        );
        nonDuplicateName !== undefined
        ? alert(`"${name}" and "${number}" is already in contacts.`)
        : dispatch(editContact(contact));

        ev.currentTarget.reset();
        onSave();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <BtnIcon type="button" onClick={onSave}>
            </BtnIcon>
            <Label>
                Name 
                <Input 
                onChange={handleChange}
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required 
                />
            </Label>
            <Label>
                Number
                <Input
                onChange={handleChange}
                value={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
            </Label>
            <Btn type="submit">Edit contact</Btn>
        </Form>
    );
};