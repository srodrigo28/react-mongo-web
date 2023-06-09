import styled from "styled-components";

export const Container = styled.div`
box-sizing: border-box;
    width: 250px;
    height: 180px;
    padding: 20px;
    margin: 10px;

    border-radius: 10px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
`;
export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
        width: 50%;
    }
`;

export const BottomCard = styled.div`
    display: flex;
    width: 350px;
    
    justify-content: space-around;

    strong{
        color: #EE6B26;
        font-weight: bold;
    }
    span{
      color: #909090;  
      font-weight: bold;
    }

`;

