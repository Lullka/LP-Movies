import { useParams } from "react-router";
import styled from "styled-components"
import { VideoPlayer } from "../assets/components/VideoPlayer";
import { useEffect, useState } from "react";

export const Watch = () => {
    const [IsValidUrl, setIsValidUrl] = useState<boolean>(false);
    const [videoData, setVideoData] = useState<IVideo>({id:'',name: '',url:''})
    const {id} = useParams();
    
    interface IVideo{
        id: string | number,
        name: string,
        url: string
    }

    const videos = [
        {id: '1111', name: 'Bom dia', url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"},
        {id: '2222', name: 'Bom tarde', url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},
        {id: '3333', name: 'Bom noite', url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"}
    ];

    useEffect(() => {
        for(let i = 0; videos.length > i; i++){
            if(videos[i].id == id){
                setIsValidUrl(true);
                setVideoData(videos[i]);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <Container>
            {
                IsValidUrl ?
                    <VideoPlayer url={videoData.url}/>
                    :
                    <h1 style={{color: 'white'}}>Eita!<br/>Você está procurando por um título jamais visto!<br/>Nos conte mais...</h1>
            }
        </Container>
    )
}

const Container = styled.section`
    padding-top: var(--header-height);
`;