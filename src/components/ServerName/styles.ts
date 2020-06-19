import styled from "styled-components";
import {ExpandMore} from "styled-icons/material-rounded";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 11px 0 16px;
    background-color: var(--secondary);
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2);
    z-index: 2;
`;

export const Title = styled.h1`
    font-size: 16px;
    font-weight: bold;
    color: var(--white);
`;

export const ExpandIcon = styled(ExpandMore)`
    width: 25px;
    height: 25px;
    color: var(--white);
    cursor: pointer;
`;