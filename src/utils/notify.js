import { toast, Zoom } from 'react-toastify';

export const onExistContact = findedContactByName =>
toast.info(`${findedContactByName.name} is already in contacts!`, {
    position: "top-right",
    autoClose: 2000,
    transition: Zoom,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

export const onExistNumber = findedContactByNum =>
toast.info(`Contact with number ${findedContactByNum.number} already exists!`, {
    position: "top-right",
    autoClose: 2000,
    transition: Zoom,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

export const onSuccesAddContact = contact => 
toast.info(`${contact.name} was successfully added!`, {
    position: "top-right",
    autoClose: 2000,
    transition: Zoom,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

export const onDelContact = name =>
toast.info(`${name} was removed from your list!`, {
    position: "top-right",
    autoClose: 2000,
    transition: Zoom,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});