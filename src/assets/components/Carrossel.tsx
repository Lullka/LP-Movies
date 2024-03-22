import styled from "styled-components";

export const Carrossel = () => {
    return(
        <WideContents>
            <WideWebSiteLogo>
                <img src="/svg/lkLogo.svg" alt="Logo do Luka" />
                <h1>Movie Teather</h1>
            </WideWebSiteLogo>
            <WideShadow></WideShadow>
        </WideContents>
    )
};

const WideContents = styled.div`
    position: relative;
    width: 100%;
    min-height: 650px;
    height: var(--wideCollection-height);
    background: url(/imgs/back.jpg);
    background-size: cover;
    padding: 10.5rem 5rem;
    max-height: 650px;
    transition: 0.2s;

    @media only screen and (max-height: 530px){
        padding: 5.5rem 5rem;
    }

    @media only screen and (max-width: 470px){
        padding: 10.5rem 2.5rem;
    }

    @media only screen and (max-width: 350px){
        padding: 10.5rem 1rem;
    }
`;

const WideWebSiteLogo = styled.div`
    display: flex;
    align-items: end;
    border: 5px solid #FFF;
    border-style: none none solid none;

    img{
        width: 200px;
        height: 200px;
        user-select: none;
        pointer-events: none;
        filter: drop-shadow(0 0mm 10mm rgb(160, 0, 210));
    }

    h1{
        margin-bottom: 10px;
        font-size: 54px;
        color: #FFF;
        /* background: -webkit-linear-gradient(75deg, rgba(102, 56, 242), rgba(255, 16, 242));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; */
    }

    @media only screen and (max-width: 590px){
        h1{
            font-size: 35px;
        }

        img{
            width: 150px;
            height: 150px;
        }
    }

    @media only screen and (max-width: 470px){
        flex-direction: column;
        align-items: center;

        h1{
            font-size: 35px;
        }

        img{
            width: 120px;
            height: 120px;
        }
    }

    @media only screen and (max-width: 350px){
        h1{
            font-size: 30px;
        }

        img{
            width: 100px;
            height: 100px;
        }
    }
`;

const WideShadow = styled.div`
    width: 100%;
    height: 6rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%);
    bottom: 0;
    left: 0; /* Evitar o p */
    position: absolute;
`;