import styled from "styled-components";

export const Container = styled.div`
    grid-area: SL;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--tertiary);
    padding: 11px 0;
    max-height: 100vh;
    overflow-y: scroll;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none!important;
        width: 1px;
    }
`;

export const Separator = styled.div`
    width: 32px;
    border-radius: 10px;
    border-bottom: 2px solid var(--quaternary);
    margin-bottom: 8px;
`;