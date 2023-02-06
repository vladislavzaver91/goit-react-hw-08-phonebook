import styled from '@emotion/styled';
// import { RiDeleteBin2Fill, RiEdit2Line } from 'react-icons/ri';

export const FriendItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 15px;
    padding-left: 15px;
`;

export const ContactWrapp = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const Btn = styled.button`
    border: none;
    border-radius: 14px;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.acсentColor};
    text-align: center;
    font-size: 16px;
    display: block;
    :hover {
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.secondAccentColor};
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
        transition: background-color 300ms ${props => props.theme.animation.primeCubic},
        color 300ms ${props => props.theme.animation.primeCubic};
    }
    :active {
        color: ${props => props.theme.colors.black};
        background-color: ${props => props.theme.colors.acсentColor};
        transition: background-color 200ms ${props => props.theme.animation.primeCubic},
        color 200ms ${props => props.theme.animation.primeCubic};
    }
`;

// export const IconDelete = styled(RiDeleteBin2Fill)`
//   width: 30px;
//   height: 30px;
// `;
// export const IconEdit = styled(RiEdit2Line)`
//   width: 30px;
//   height: 30px;
// `;