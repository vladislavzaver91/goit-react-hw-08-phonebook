import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/slice';
import { FormTitle, SeacrhInput } from "./Filter.styled";

export const Filter = () => {
    const value = useSelector(selectFilter);
    const dispatch = useDispatch();

    const changeFilter = ev => {
        const { value } = ev.target;
        dispatch(setFilter(value));
    };

    return (
        <FormTitle> Find contacts by name
            <SeacrhInput 
                type="text"
                name="filter"
                value={value}
                onChange={changeFilter}
            />
        </FormTitle>
    )
};