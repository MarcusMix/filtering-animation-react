import styled from "styled-components";

export const FormStyled = styled.form `
    & div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
    }

    & input {
        border: none;
        background-color: #051923;
        color: #fff;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 200px;
    }

    & svg {
       position: fixed;
       left: 40%;
       color: red;
    }
`