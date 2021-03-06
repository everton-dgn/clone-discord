import styled from "styled-components";
import {Add} from "styled-icons/material"
import {KeyboardArrowDown} from "styled-icons/material-rounded";

export const Container = styled.div`
    grid-area: CL;
    display: flex;
    flex-direction: column;
    padding: 20px 9.5px 0 3px;
    background-color: var(--secondary);
    overflow-y: scroll;
    scrollbar-width: none;

    > div:nth-child(2) {
        background-color: var(--quinary);

        div span {
            color: var(--text-light);
        }

        div:nth-child(2) svg {
            visibility: visible;
            color: var(--gray);
        }

        div:nth-child(2) svg:hover {
            color: var(--white);
        }
    }

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

export const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;

    span {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        color: var(--gray);
    }
`;

export const ArrowDown = styled(KeyboardArrowDown)`
    width: 15px;
    height: 15px;
    color: var(--gray);
    cursor: pointer;
`;

export const AddCategoryIcon = styled(Add)`
    width: 21px;
    height: 21px;
    color: var(--symbol);
    cursor: pointer;
`;
