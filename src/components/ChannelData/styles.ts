import styled from "styled-components";
import {AddCircle} from "styled-icons/material";
import {Gift} from "styled-icons/fa-solid";
import {Emotion} from "styled-icons/remix-fill";
import {FileGif} from "styled-icons/boxicons-solid";

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
    max-height: calc(100vh - 46px - 68px - 1px);
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
`;

export const Input = styled.input`
    width: 100%;
    display: flex;
    height: 44px;
    padding: 0;
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
`;

export const IconsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 44px;
    background-color: var(--chat-input);
    border-radius: 7px 0 0 7px;
`;

export const IconsBoxes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    background-color: var(--chat-input);
    border-radius: 0 7px 7px 0;
    padding-right: 5px;
`;

export const InputIcon = styled(AddCircle)`
    width: 24px;
    height: 24px;
    color: var(--gray);
    transition: 180ms ease-in-out;

    :hover {
        color: var(--text-light);
    }
`;

export const InputGift = styled(Gift)`
    width: 40px;
    height: 24px;
    color: var(--gray);
    transition: 180ms ease-in-out;

    :hover {
        color: var(--white);
    }
`;

export const InputEmoticon = styled(Emotion)`
    width: 40px;
    height: 26px;
    color: var(--gray);
    transition: 180ms ease-in-out;

    :hover {
        color: var(--white);
    }
`;

export const InputFileGif = styled(FileGif)`
    width: 40px;
    height: 24px;
    color: var(--gray);
    transition: 180ms ease-in-out;

    :hover {
        color: var(--white);
    }
`;