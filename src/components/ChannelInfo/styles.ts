import styled from "styled-components";
import {Hashtag} from "styled-icons/heroicons-outline";
import {Bell} from "styled-icons/boxicons-solid";
import {Pushpin} from "styled-icons/remix-fill";
import {Group} from "styled-icons/boxicons-solid";
import {Search} from "styled-icons/heroicons-outline";
import {Inbox} from "styled-icons/material";
import {HelpWithCircle} from "styled-icons/entypo";

export const Container = styled.div`
    grid-area: CI;
    background-color: var(--primary);
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2);
    z-index: 2;
    display: flex;
    justify-content: space-between;
    padding: 0 6px 0 17px;
`;

export const Bloco1 = styled.div`
    display: flex;
    align-items: center;
`;

export const Bloco2 = styled.div`
    display: flex;
    align-items: center;
`;

export const HashtagIcon = styled(Hashtag)`
    width: 24px;
    height: 24px;
    color: var(--symbol);
`;

export const Title = styled.h1`
    font-size: 16px;
    margin-left: 9px;
    color: var(--white);
`;

export const Separator = styled.div`
    height: 24px;
    width: 1px;
    background-color: var(--white);
    opacity: .2;
    margin: 0 14px;
`;

export const Description = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--gray);
`;

export const Input = styled.input`
    background-color: var(--tertiary);
    height: 24px;
    width: 120px;
    padding: 0 0 0 7px;
    border-radius: 4px 0 0 4px;
    color: var(--white);
    font-weight: 400;

    ::placeholder {
        color: var(--symbol);
        font-weight: 400;
    }

    :focus {
        width: 216px;
    }
`;

// icons //
// -------------------------------------------------------------------------- //
export const ContainerIcons = styled.div`
    margin: 0 8px;
    width: 24px;
    height: 24px;
    color: var(--gray);
`;

export const BellNotification = styled(Bell)``;

export const Pin = styled(Pushpin)``;

export const InboxNotifications = styled(Inbox)``;

export const Help = styled(HelpWithCircle)`
    width: 21px;
    height: 21px;
`;

export const Members = styled(Group)`
    color: var(--white);
`;

export const ContainerSearch = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 8px;
`;

export const ButtonSearch = styled.button`
    background-color: var(--tertiary);
    border-radius: 0 4px 4px 0;
    padding: 0 6px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Magnifying = styled(Search)`
    color: var(--symbol);
    width: 14px;
    height: 14px;
`;
// -------------------------------------------------------------------------- //
