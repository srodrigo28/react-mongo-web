import styled from "styled-components";

export const Container = styled.div`
    width: 220px;
    height: 90px;
    background-color: #20295F;
    box-sizing: border-box;
    border-radius: 7px;

    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: space-around;

    img{
        width: 25px;
        height: 25px;
    }
    span{
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        align-self: flex-end;
    }
`;

