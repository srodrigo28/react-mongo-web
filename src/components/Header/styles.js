import styled from "styled-components";

export const Container = styled.div`
    margin-top: -30px;
    width: 100%;
    height: 70px;

    display: flex;
    background: #20295f;
    border-bottom: 6px solid #EE6B26;
`;

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;

    display: flex;
    padding-left: 20px;
    align-items: center;

    img {
        width: 100px;
        height: 40px;
    }
    img:hover{
        cursor: pointer;
        opacity: .7;
    }
`;

export const RightSide = styled.div`
    width: 50%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    a, button{
        color: #fff;
        margin: 0 10px;

        transition: .7s;
        text-decoration: none;

        &:hover{
            color: #EE6B26;
            font-size: 1.1em;
        }
    }
    button{
        cursor: pointer;
    }

    #notification{
        img{
            width: 25px;
            height: 30px;
        }
        span{
            color: #EE6B26;
            padding: 3px 7px;
            border-radius: 50%;
            background-color: #fff;

            position: relative;
            top: -20px;
            right: 10px;
        }
        &:hover{
            opacity: 0.5;
        }
    }
    .dividir::after{
        content: "|";
        margin: 0 10px;
        color: #fff;
    }
`;

