import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardPortifolio = () => {
    const [IsVisible, setIsVisible] = useState<boolean>(false);

    return(
        <Container className={IsVisible ? '' : 'desactived'}>
            <svg className="portifolioIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#ffffff" d="M20 14V17.5C20 20.5577 16 20.5 12 20.5C8 20.5 4 20.5577 4 17.5V14M12 15L12 3M12 15L8 11M12 15L16 11"></path> </g></svg>
            <Content>
                <h1>Veja mais!</h1>
                <span>Dê mais olhadas em projetos no meu Portifolio!</span>
                <BTNActions>
                    <button onClick={() => setIsVisible(false)}>Não agora</button>
                    <Link to='/'>Portifólio</Link>
                </BTNActions>
            </Content>
            <button onClick={() => setIsVisible(false)}><svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
        </Container>
    )
};

const Container = styled.div`
    position: fixed;
    z-index: 10;
    bottom: 20px;
    right: 15px;
    display: flex;
    max-width: 320px;
    background: #606c88;
    background: linear-gradient(to right top, rgb(174,98,255), rgb(164,98,215));
    padding: 1rem;
    align-items: top;
    border-radius: 10px;
    gap: 5px;


    &.desactived{
        display: none;
    }
    
    svg.portifolioIcon{
        height: 2rem;
        width: 2rem;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem;
        background-color: #bd0dab;
        color: rgb(59, 130, 246);
        padding: 2px;
    }
    
    button{
        cursor: pointer;
    }
    
    button:nth-child(3){
        height: 1.8rem;
        min-width: 1.8rem;
        background: #bd0dab;
        border: none;
        outline: 2px solid transparent;
        border-radius: 0.5rem;
        color: #f592f8;
    }

    button:nth-child(3):hover{
        background: #d00fbd;
    }

    button:nth-child(3):active{
        background: #ac0d9c;

    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-left: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    
    h1{
        font-size: 19px;
        color: white;
    }
    span{
        font-size: 16px;
        color: rgb(202, 220, 200);
    }
`;

const BTNActions = styled.div`
    display: flex;
    gap: 0.5rem;

    a,
    button{
        border-radius: 5px;
        font-size: 0.9rem;
        font-weight: bold;
        color: white;
    }

    a{
        width: 100%;
        padding: 0.5rem;
        outline: 2px solid transparent;
        border: 1px solid rgba(253, 253, 253, 0.363);
        display: flex;
        justify-content: center;
        text-decoration: none;
        background-color: #aa00ff;
    }
    
    button{
        width: 100%;
        padding: 0.5rem;
        border: 1px solid rgba(253, 253, 253, 0.363);
        outline: 2px solid transparent;
        background-color: rgba(224, 161, 255, 0.3);
        color: rgb(240, 240, 240);
    }
`;