import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardsController = () => {
    const [cards, setCards] = useState({});


    const cardsLength = 10;
    let portanto = 0;
    while(portanto <= cardsLength){
        cards[portanto] = {
            id: portanto,
            url: '/watch/1111',
            img: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=480,height=720,fit=contain,quality=85/catalog/crunchyroll/3f493195883a48083f37cb6a2e18427c.jpe',
        }
        portanto++;
    }

    return(
        <Container>
            <CardSection>
                <h1>Mais populares</h1>
                <ULCards>
                    {Object.keys(cards).map(item => (
                            <Card key={item}>
                                <Link to="/watch/2222">
                                    <div><img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=480,height=720,fit=contain,quality=85/catalog/crunchyroll/3f493195883a48083f37cb6a2e18427c.jpe"alt="animeImage" /></div>
                                </Link>
                            </Card>
                        ))
                    }
                    <Card>
                        <Link to="/watch/1111">
                            <div><img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=480,height=720,fit=contain,quality=85/catalog/crunchyroll/3f493195883a48083f37cb6a2e18427c.jpe"alt="animeImage" /></div>
                        </Link>
                    </Card>
                    <Card>
                        <Link to="/watch/2222">
                            <div><img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=480,height=720,fit=contain,quality=85/catalog/crunchyroll/3f493195883a48083f37cb6a2e18427c.jpe"alt="animeImage" /></div>
                        </Link>
                    </Card>
                </ULCards>
            </CardSection>
            <CardSection>
                <h1>Dublados recentemente!</h1>
                <ULCards>
                    {Object.keys(cards).map(item => (
                            <Card key={item}>
                                <Link to="/watch/2222">
                                    <div><img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=480,height=720,fit=contain,quality=85/catalog/crunchyroll/3f493195883a48083f37cb6a2e18427c.jpe"alt="animeImage" /></div>
                                </Link>
                            </Card>
                        ))
                    }
                    <Card>
                        <Link to="/watch/1111">
                            <div><img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=480,height=720,fit=contain,quality=85/catalog/crunchyroll/3f493195883a48083f37cb6a2e18427c.jpe"alt="animeImage" /></div>
                        </Link>
                    </Card>
                    <Card>
                        <Link to="/watch/2222">
                            <div><img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=480,height=720,fit=contain,quality=85/catalog/crunchyroll/3f493195883a48083f37cb6a2e18427c.jpe"alt="animeImage" /></div>
                        </Link>
                    </Card>
                </ULCards>
            </CardSection>
        </Container>
    )
};

const Container = styled.div`
    position: absolute;
    width: 100%;
    min-height: 300px;
    padding-left: 3rem;
    top: 450px;
    transition: 0.2s;
    
    @media only screen and (max-height: 530px){
        top: 350px;
    }

    @media only screen and (max-width: 590px){
        top: 400px;
        padding-left: 2.5rem;
    }
`;

const CardSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    h1{
        color: #FFF;
        font-size: 35px;
        transition: 0.2s;
    }

    @media only screen and (max-width: 530px){
        h1{
            font-size: 25px;
        }
    }
`;

const ULCards = styled.ul`
    width: 100%;
    display: flex;
    list-style: none;
    gap: 20px;
    overflow-x: auto;
    inline: start;
    behavior: smooth;
    scroll-snap-type: x mandatory;
    scroll-padding: 0 0px;
    padding-bottom: 10px;

    li:last-child{
        margin-right: 30px;
    }
`;

const Card = styled.li`

    min-width: 195px;
    max-width: 195px;
    height: 290px;
    overflow: hidden;
    scroll-snap-align: start;
    transition: 0.3s;

    div img{
        width: 100%;
        user-select: none;
    }

    @media only screen and (max-width: 530px){
        min-width: 150px;
        max-width: 150px;
        height: 225px;
    }
`;