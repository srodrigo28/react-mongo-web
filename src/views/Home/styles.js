import styled from "styled-components";

export const Container = styled.div`


`;

export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    margin-top: 30px;

    button{
        border: none;
        background: transparent;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
`;

export const Title = styled.h3`
    width: 100%;
    border-bottom: 3px solid #20295F;
    display: flex;
    justify-content: center;

    h3{
        font-size: 2em;
        color: #20295F;
        position: relative;
        top: 60px;
        background-color: #fff;
        padding: 0 15px;
    }
`
