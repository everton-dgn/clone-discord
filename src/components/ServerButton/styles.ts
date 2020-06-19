import styled from "styled-components";
import {Props} from ".";

export const Button = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    margin-bottom: 8px;
    background-color: ${props =>
    props.isHome ? 'var(--querocriarsite)' : 'var(--primary)'};
    position: relative;
    border-radius: 50%;
    transition: border-radius .2s, background-color .2s;

    img {
        width: 37px;
        height: 37px;
    }

    &::before {
        width: 8px;
        height: 8px;
        position: absolute;
        left: -15px;
        top: calc(50% - 4px);
        background-color: var(--white);
        border-radius: 5px;
        content: '';
        display: ${props => props.hasNotifications ? 'inline' : 'none'};
        transition: height .2s, top .2s;
    }

    &::after{
        background-color: var(--notification);
        width: auto;
        height: 16px;
        padding: 0 4px;
        position: absolute;
        bottom: -4px;
        right: -4px;
        border-radius: 12px;
        border: 3px solid var(--quaternary);
        text-align: right;
        font-size: 13px;
        font-weight: bold;
        color: var(--white);
        content: '${props => props.mentions && props.mentions}';
        display: ${props =>
    props.mentions && props.mentions > 0 ? 'inline' : 'none'};
    }

    &.ctive, &:hover {
        border-radius: 16px;
        background-color: ${props =>
    props.isHome ? 'var(--querocriarsite)' : 'var(--discord)'};
    }

    &:hover::before {
        top: calc(50% - 9.5px);
        height: 19px;
    }
`;

