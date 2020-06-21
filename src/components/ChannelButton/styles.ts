import styled from "styled-components";
import {Hashtag} from "styled-icons/heroicons-outline";
// import {VolumeUp} from "styled-icons/material-sharp";
import {PersonAdd, Settings} from "styled-icons/material";

export const Container = styled.div`
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 5px 3px;
    border-radius: 5px;
    background-color: transparent;
    transition: background-color .2s;

    div {
        display: flex;
        align-items: center;
    }

    div span {
        margin-left: 5px;
        color: var(--senary);
        font-weight: 400;
    }

    &:hover, &.active {
        background-color: var(--quinary);

        div span {
            color: var(--text-light);
        }

        div:nth-child(2) svg {
            visibility: visible;
        }
    }

    div:nth-child(2) svg {
        visibility: hidden;
    }
`;

export const HashtagIcon = styled(Hashtag)`
    margin-left: 5px;
    width: 20px;
    height: 20px;
    color: var(--symbol);
`;

// export const VolumeIcon = styled(VolumeUp)`
//     margin-left: 5px;
//     width: 20px;
//     height: 20px;
//     color: var(--symbol);
// `;

export const InviteIcon = styled(PersonAdd)`
    width: 16px;
    height: 16px;
    color: var(--symbol);
    cursor: pointer;
    margin-left: 5px;
    transform: rotateY(180deg);
    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;

export const SettingsIcon = styled(Settings)`
    width: 16px;
    height: 16px;
    color: var(--symbol);
    cursor: pointer;
    margin-left: 5px;
    margin-right: 4px;
    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;
