import { useParams } from "react-router";
import styled from "styled-components"
import { VideoPlayer } from "../assets/components/VideoPlayer";

export const Watch = () => {
    const {id} = useParams();
    
    return(
        <Container>
            <VideoPlayer URL={id}/>
        </Container>
    )
}

const Container = styled.section`
    padding-top: var(--header-height);
`;