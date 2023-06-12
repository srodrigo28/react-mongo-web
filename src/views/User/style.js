import styled  from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;
export const Form = styled.div`
    margin-top: -40px;
    width: 50%;
    height: 500px;
`;
export const TypeIcons = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    .inative{
        opacity: 0;
    }

    button{
        border: none;
        background: transparent;
    }

    img{
        cursor: pointer;
        width: 50px;
        height: 50px;
        margin: 10px;
        transition: all 0.5s ease;
    }
    img:hover{
        margin-top: 30px;
        width: 60px;
        height: 60px;
        opacity: .8;
    }
`;
export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 18px 0;
    span{
        color: #909090;
        margin: 5px 0;
    }
    input{
        outline: none;
        border: none;
        padding: 15px;
        font-size: 18px;
        border-bottom: 2px solid #EE6B26
    }
    img{
        width: 18px;
        height: 18px;
        position: relative;
        left: 90%;
        bottom: 30px;
        display: none;
    }
`;
export const TextArea = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    margin: 18px 0;

    span{
        color: #909090;
        margin: 5px 0;
    }

    textarea{
        outline: none;
        font-size: 18px;
        border: 2px solid #EE6B26
    }
`;
export const Option = styled.div`
    display: flex;
    justify-content: space-between;

    button{
        cursor: pointer;
            font-weight: bold;
            color: #18295f;
            border: none;
            background: none;
            font-size: 18px;
            transition: 1s ease;
        &:hover{
            opacity: 0.7;
            font-size: 22px;
        }
    }
    div{
        display: flex;
        align-items: center;
        color: #ee6b26;
        font-weight: bold;
        font-size: 18px;
    }
`;
export const Save = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        cursor: pointer;
        color: #fff;
        font-weight: bold;
        width: 90%;
        border: none;
        font-size: 20px;
        padding: 10px;
        border-radius: 20px;
        background-color: #ee6b26;
        transition: 1s;

        &:hover{
            margin-top: 5px;
            opacity: .5;
            padding: 12px;
        }
    }
`;