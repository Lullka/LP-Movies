import styled from "styled-components";
import { Carrossel } from "../assets/components/Carrossel";
import { CardsController } from "../assets/components/CardsController";

const Browse = () => {
    return(
        <>
            <UltraWideCollections>
                <Carrossel/>
                <CardsController/>
            </UltraWideCollections>
        </>
    )
};

const UltraWideCollections = styled.section`
    width: 100%;
    height: 100vh;
`;

export default Browse;