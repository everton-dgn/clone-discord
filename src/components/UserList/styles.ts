import styled from "styled-components";
import {Check} from "styled-icons/boxicons-regular";

export const Container = styled.div`
    grid-area: UL;
    display: flex;
    flex-direction: column;
    padding: 3px 6px 20px 11px;
    background-color: var(--secondary);
    max-height: calc(100vh - 46px);
    overflow-y: scroll;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }
`;

export const Role =styled.span`
    margin-top: 20px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
`;

export const User =styled.div`
    margin-top: 5px;
    padding: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 4px;
    background: transparent;
    transition: background .2s;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    strong {
        margin-left: 13px;
        font-weight: 400;
        color: var(--white);
        opacity: 0.7;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    span {
        display: flex;
        align-items: center;
        margin-left: 9px;
        background-color: var(--discord);
        color: var(--white);
        border-radius: 3px;
        padding: 2px 3px;
        text-transform: uppercase;
        font-size: 10px;
    }
`;

export const Avatar =styled.div`
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--primary);
    overflow: hidden;

    &.bot {
        background-color: var(--mention-detail);
    }

    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;

export const Checked =styled(Check)`
    color: var(--white);
    width: 12px;
    height: 12px;
`;