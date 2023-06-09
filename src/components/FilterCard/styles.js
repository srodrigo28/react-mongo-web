import styled from "styled-components";

export const Container = styled.div`
    width: 220px;
    height: 90px;
    background-color: ${ props => props.actived ? '#EE6B26' : '#20295F' };
    box-sizing: border-box;
    border-radius: 7px;
    transition: .7s;

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
        transition: 7s;
    }

    &:hover{
        cursor: pointer;
        background-color: #EE6B26;
    }
`;

