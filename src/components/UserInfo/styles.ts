import styled from "styled-components";
import {Mic, Headset, Settings} from "styled-icons/material"

export const Container = styled.div`
    grid-area: UI;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px 10px 10px;
    background-color: var(--quaternary);
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2);
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
`;

export const Avatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--gray);
    overflow: hidden;

    img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    }
`;

export const UserData = styled.div`
    margin-left: 8px;
    display: flex;
    flex-direction: column;

    strong {
        font-size: 13px;
        color: var(--white);
        display: flex;
    }

    span {
        color: var(--gray);
        font-size: 12px;
    }
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;

    svg:not(:first-child) {
        margin-left: 12px;
    }
`;

export const MicIcon = styled(Mic)`
    width: 20px;
    height: 20px;
    color: var(--white);
    opacity: .7;
    cursor: pointer;
    transition: opacity .2s;

    &:hover {
        opacity: 1;
    }
`;

export const HeadphoneIcon = styled(Headset)`
    width: 20px;
    height: 20px;
    color: var(--white);
    opacity: .7;
    cursor: pointer;
    transition: opacity .2s;

    &:hover {
        opacity: 1;
    }
`;

export const SettingsIcon = styled(Settings)`
    width: 20px;
    height: 20px;
    color: var(--white);
    opacity: .7;
    cursor: pointer;
    transition: opacity .2s;

    &:hover {
        opacity: 1;
    }
`;

