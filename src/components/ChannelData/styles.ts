import styled from "styled-components";
import {AddCircle} from "styled-icons/material";

export const Container = styled.div`
    grid-area: CD;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--primary);
`;

export const Messages = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 46px - 68px);
    margin-right: 4px;
    overflow-y: scroll;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        width: 6px;
        background-color: var(--secondary);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }
`;

export const InputWrapper = styled.div`
    width: 100%;
    padding: 0 16px;
`;

export const Input = styled.input`
    width: 100%;
    height: 44px;
    padding: 0 10px 0 57px;
    border-radius: 7px;
    color: var(--white);
    background-color: var(--chat-input);
    position: relative;
    font-weight: 300;
    font-size: 16px;

    &::placeholder {
        color: var(--senary);
        font-size: 15px;
        font-weight: 400;
    }

    ~ svg {
        position: relative;
        top: -50%;
        left: 16px;
        transition: 180ms ease-in-out;
    }
`;

export const InputIcon = styled(AddCircle)`
    width: 24px;
    height: 24px;
    color: var(--gray);
`;
