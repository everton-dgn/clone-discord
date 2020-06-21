import styled from "styled-components";
import {Check} from "styled-icons/boxicons-regular";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 16px;
    margin-right: 4px;
    background-color: transparent;

    &.mention {
        background-color: var(--mention-message);
        border-left: 2px solid var(--mention-detail);
        padding-left: 14px;
    }

    & + div {
        margin-top: 13px;
    }
`;

export const Avatar = styled.div`
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    background-color: var(--secondary);
    border-radius: 50%;
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

export const Message = styled.div`
    min-height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 17px;
 `;

export const Header = styled.div`
    display: flex;
    align-items: center;

    strong {
        color: var(--white);
        font-size: 16px;
        font-weight: 400;

        :hover {
            text-decoration: underline;
        }
    }

    span {
        display: flex;
        align-items: center;
        margin-left: 6px;
        background-color: var(--discord);
        color: var(--white);
        border-radius: 3px;
        padding: 2px 3px;
        text-transform: uppercase;
        font-size: 10px;
    }

    time {
        margin-left: 6px;
        color: var(--senary);
        font-size: 12px;
        font-weight: 400;
    }
`;

export const Content = styled.div`
    text-align: left;
    font-size: 16px;
    color: var(--text-light);
    font-weight: 100;
`;

export const Mention = styled.span`
    color: var(--link);
    cursor: pointer;
    font-weight: 400;
    padding: 2px;
    background-color: var(--background-link);
    border-radius: 3px;
    transition: .1s;

    &:hover {
       background-color: var(--discord);
       color: var(--white);
    }
`;

export const Checked = styled(Check)`
    color: var(--white);
    width: 12px;
    height: 12px;
`;