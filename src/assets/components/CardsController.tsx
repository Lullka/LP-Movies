import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardsController = () => {
    return(
        <Container>
            <CardSection>
                <h1>Mais populares</h1>
                <ULCards>
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

    @media only screen and (max-height: 530px){
        top: 350px;
    }
`;

const CardSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1{
        color: #FFF;
    }
`;

const ULCards = styled.ul`
    width: 100%;
    display: flex;
    list-style: none;
    gap: 20px;
`;

const Card = styled.li`
    width: 195px;
    height: 290px;
    overflow: hidden;

    div img{
        width: 100%;
        
    }
`;