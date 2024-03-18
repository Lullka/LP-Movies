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
    min-height: 475px;
    height: var(--wideCollection-height);
    background: url(/imgs/back.jpg);
    padding: 11.5rem 5rem;
    max-height: 650px;

    @media only screen and (max-height: 530px){
        padding: 5.5rem 5rem;
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
        font-size: 4px;
        color: #FFF;
        /* background: -webkit-linear-gradient(75deg, rgba(102, 56, 242), rgba(255, 16, 242));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; */
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