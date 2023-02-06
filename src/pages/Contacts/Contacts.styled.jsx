import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 8px 0;
    margin-bottom: 16px;
`;
export const Wrapp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Btn = styled.button`
    display: flex;
    padding: 5px 5px;
    border-radius: 50px;
    border: none;
    color: #fff;
    background-color: orangered;
    font-weight: 700;
    &:hover {
        box-shadow: none;
        color: orangered;
        background-color: #fff;
        box-shadow: 0px 4px 3px -1px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    }
`;