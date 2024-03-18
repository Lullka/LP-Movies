import { useRef, useState } from "react";
import styled from "styled-components";

export const Header = () => {
    const [mouseInside, setMouseInside] = useState<boolean>(false);
    const HeaderRef = useRef(null);

    function userClickOutsideHeader(){
        console.log(HeaderRef.current);

        function HandleMouseInsideClickOut(ev: Event){
            if(!HeaderRef.current?.contains(ev.target)){
                setMouseInside(false);
            }
        }

        document.addEventListener('click', HandleMouseInsideClickOut)

        return () => {
            document.removeEventListener("click", HandleMouseInsideClickOut);
        };
    }

    userClickOutsideHeader()
    return(
        <>
            <HeaderContainer
                ref={HeaderRef}
                className={mouseInside ? "active" : ""}
                onMouseEnter={() => setMouseInside(true)}
            >
                <PrimaryHeader className={mouseInside ? "active" : ""}>
                    <a id="logo" href="/"><img src="/lkLogo.svg" alt="Lk Movies Logo" /></a>
                    <ContentsHeaderIcons>
                        <ul>
                            <li><a href="/"><svg width="120px" height="120px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Procurar</span></a></li>
                            <li><a href="/"><svg width="120px" height="120px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Home"><rect id="Rectangle" fillRule="nonzero" x="0" y="0" width="24" height="24"></rect><path d="M5,10 L5,19 C5,19.5523 5.44772,20 6,20 L18,20 C18.5523,20 19,19.5523 19,19 L19,10" id="Path" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path><path d="M21,11 L12.307,4.23875 C12.1264,4.09832 11.8736,4.09832 11.693,4.23875 L3,11" id="Path" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path></g></g></svg><span>Inicio</span></a></li>
                            <li><a href="/"><svg width="120px" height="120px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10.9673M10.4 21H13.6C15.8402 21 16.9603 21 17.816 20.564C18.5686 20.1805 19.1805 19.5686 19.564 18.816C20 17.9603 20 16.8402 20 14.6V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V14.6C4 16.8402 4 17.9603 4.43597 18.816C4.81947 19.5686 5.43139 20.1805 6.18404 20.564C7.03968 21 8.15979 21 10.4 21Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Portifolio</span></a></li>
                            <li><a href="/"><svg width="120px" height="120px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/></svg><span>Favoritos</span></a></li>
                            <li><a href="/"><svg fill="#fff" width="120px" height="120px" viewBox="0 0 16 16" id="apps-16px" xmlns="http://www.w3.org/2000/svg"><path id="Path_173" data-name="Path 173" d="M-13,1V6h-5V1h5m0-1h-5a1,1,0,0,0-1,1V6a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1Zm9,1V6H-9V1h5m0-1H-9a1,1,0,0,0-1,1V6A1,1,0,0,0-9,7h5A1,1,0,0,0-3,6V1A1,1,0,0,0-4,0Zm-9,10v5h-5V10h5m0-1h-5a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V10a1,1,0,0,0-1-1Zm9,1v5H-9V10h5m0-1H-9a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V10A1,1,0,0,0-4,9Z" transform="translate(19)"/></svg><span>Gêneros</span></a></li>
                        </ul>
                    </ContentsHeaderIcons>
                    <a href="/"><svg width="120px" height="120px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" ><path d="M0 0h48v48H0z" fill="none"/><g id="Shopicon"><path d="M31.278,25.525C34.144,23.332,36,19.887,36,16c0-6.627-5.373-12-12-12c-6.627,0-12,5.373-12,12c0,3.887,1.856,7.332,4.722,9.525C9.84,28.531,5,35.665,5,44h38C43,35.665,38.16,28.531,31.278,25.525z M16,16c0-4.411,3.589-8,8-8s8,3.589,8,8c0,4.411-3.589,8-8,8S16,20.411,16,16z M24,28c6.977,0,12.856,5.107,14.525,12H9.475C11.144,33.107,17.023,28,24,28z"/></g></svg></a> 
                </PrimaryHeader>

            </HeaderContainer>
        </>
    );
};

const HeaderContainer = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 90px;
    height: 100%;
    transition: 0.5s;

    &.active{
        width: 240px;
    }
`;

const PrimaryHeader = styled.div`
    width: 100%;
    height: 100%;
    transition: 0.5s;
    background: 
        linear-gradient(125deg, rgba(102, 16, 242,0.2) 5%,rgba(60,0,136,0) 14%),
        linear-gradient(90deg, rgba(102, 16, 242,0.1) 25%,rgba(60,0,136,0) 100%),
        linear-gradient(50deg,rgba(111, 66, 193,.2) 5%,rgba(60,0,136,0) 14%);
    padding: 15px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    user-select: none;

    &.active{
        background: 
            linear-gradient(125deg, rgba(102, 16, 242,0.2) 5%,rgba(60,0,136,0) 14%),
            linear-gradient(90deg, rgba(102, 16, 242,0.1) 25%,rgba(60,0,136,0) 100%),
            linear-gradient(50deg,rgba(111, 66, 193,.2) 5%,rgba(60,0,136,0) 14%);
        /* linear-gradient(125deg, rgba(102, 16, 242,0.2) 15%,rgba(60,0,136,0) 34%),
        linear-gradient(90deg, rgba(102, 16, 242,0.1) 15%,rgba(60,0,136,0) 34%),
        linear-gradient(50deg,rgba(111, 66, 193,.2) 10%,rgba(60,0,136,0) 34%); */

        ul li a span{
            opacity: 1;
        }

        a:nth-child(1){
            margin-left: 0px;
            width: 145px;
        }

        a:nth-child(1) span{
            opacity: 1;
        }
    }

    a:nth-child(1){
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: left;
        gap: 10px;
        align-items: center;
        border-radius: 5px;
        outline: 3px solid transparent;
        text-decoration: none;
        transition: 0.5s;
    }
    
    a#logo{
        width: 75px;
        height: 75px;
        margin-left: 20px;
    }

    a#logo img{
        width: 100%;
        height: 100%;
    }

    a:nth-child(1) span{
        transition: 0.5s;
        font-size: 20px;
        color: #FFF;
        opacity: 0;
    }

    a:nth-child(1):focus{
        outline: 2px solid #FFF;
    }

    a:nth-child(3){
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        outline: 3px solid transparent;
        fill: #FFF;
    }

    a:nth-child(3){
        width: 90%;
    }

    a:nth-child(3) svg{
        width: 50px;
        height: 50px;
    }
    a:nth-child(3):focus{
        outline: 2px solid #FFF;
    }

    ul{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 20px;
        transition: 0.5s;
        list-style-type: none;
    }

    ul li{
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
    }

    ul li a{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        outline: 3px solid transparent;
    }

    ul li a svg{
        min-width: 50px;
        min-height: 50px;
    }

    ul li a:focus{
        outline: 2px solid #FFF;
    }


    ul li svg{
        height: 40px;
        width: 40px;
    }
`;

const ContentsHeaderIcons = styled.div`

`;