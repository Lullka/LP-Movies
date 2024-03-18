import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const Header = () => {
    const [URLPath, setURLPath] = useState<string>(window.location.pathname);
    const [hamburguerBTN, setHarmburguerBTN] = useState<boolean>(false);
    return(
        <Container>
            <Left>
                <button onClick={() => {
                        if(!hamburguerBTN){
                            setHarmburguerBTN(true);
                        }else{
                            setHarmburguerBTN(false);
                        }
                    }}
                    className={hamburguerBTN ? "hamburguer active" : "hamburguer"}
                    ></button>
                <Link to="/"><img src="svg/lkLogo.svg" alt="Logo do Luka" /></Link>
                <div>
                    <Link to="/" onClick={() => setURLPath('/browse')} className={URLPath == '/browse' ? 'InThisPage' : ''}>Início</Link>
                    <Link to="/films" onClick={() => setURLPath('/films')} className={URLPath == '/films' ? 'InThisPage' : ''}>Filmes</Link>
                    <Link to="/series" onClick={() => setURLPath('/series')}  className={URLPath == '/series' ? 'InThisPage' : ''}>Séries</Link>
                    <Link to="/">Portifolio</Link>
                </div>
            </Left>
            <Right>
                <Link to="/search"><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></Link>
                <button><img src="/imgs/perfilPhoto.jpg" alt="Sua foto de perfil" /></button>
            </Right>
        </Container>
    )
}

const Container = styled.header`
    width: 100%;
    height: var(--header-height);
    position: fixed;
    top: 0;
    backdrop-filter: blur(10px);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.5s;
    padding: 0 50px;

    @media only screen and (max-width: 690px){
        padding: 0 10px;
    }
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 5px;

    div{
        display: flex;
        gap: 5px;
        transition: 0.5s;
    }

    a{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: #fff;
        text-decoration: none;
        font-weight: 400;
        padding: 9px 11px;
        border-radius: 5px;
        transition: 0.2s;
    }

    a:hover{
        background-color: var(--background-color-hover);
        color: var(--text-color-hover);
    }

    a.InThisPage{
        background-color: var(--background-color-hover);
        color: var(--text-color-hover);
    }
    
    a img{
        width: 60px;
        height: 60px;
        filter: drop-shadow(0 0mm 2mm rgb(160, 0, 210));
        transition: 0.2s;
        user-select: none;
        pointer-events: none;
    }

    button.hamburguer{
        position: relative;
        width: 50px;
        height: 50px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        display: none;
    }

    button.hamburguer:before{
        position: absolute;
        top: 12px;
        left: 0;
        content: '';
        width: 100%;
        height: 3px;
        background-color: #FFF;
        z-index: 2;
        transition: 0.3s;
    }

    button.hamburguer:after{
        position: absolute;
        bottom: 12px;
        left: 0;
        content: '';
        width: 100%;
        height: 3px;
        background-color: #FFF;
        z-index: 2;
        transition: 0.3s;
    }

    button.hamburguer.active:before{
        transform: rotate(-45deg);
        top: 23px;
    }

    button.hamburguer.active:after{
        transform: rotate(45deg);
        bottom: 23px;
    }

    @media only screen and (max-width: 660px){
        button.hamburguer{
            display: block;
        }

        div{
            display: block;
            position: absolute;
            width: 100%;
            top: -240px;
            left: 0;
            background: rgba(255, 255, 255, 0.05);
        }

        div a{
            height: 60px;
            border-radius: 0;
        }

        button.hamburguer.active ~ div{
            top: var(--header-height);
        }
    }
`;

const Right = styled.div`
    display: flex;
    
    a{
        width: 70px;
        padding: 0 15px;
        border-radius: 5px;
    }

    a svg{
        width: 100%;
        height: 100%;
    }

    a:hover,
    button:hover{
        background-color: var(--background-color-hover);
    }

    button{
        width: 70px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 5px 15px;
        border-radius: 5px;
    }

    button img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 2px solid var(--text-color-hover);
    }
`;