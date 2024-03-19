import { useState } from "react";
import styled from "styled-components";

export const VideoPlayer = (URL: string | undefined) => {
    const [StatusVideoPlayPause, SetStatusVideoPlayPause] = useState<boolean>(false);
    const [IsFullScreen, SetIsFullScreen] = useState<boolean>(true);

    return(
        <VideoContainer>
            <VideoProtection>
                <video 
                    src={URL == '1111' ? "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
                    muted
                    poster="https://c4.wallpaperflare.com/wallpaper/557/944/965/xilmo-anime-container-ship-workers-hd-wallpaper-preview.jpg"
                ></video>
                <UserView>
                    <TopControls>
                        <TopAllControls>
                            <button>
                                <svg width="800px" height="800px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink" xmlns-sketch="http://www.bohemiancoding.com/sketch/ns"><title>settings</title><desc>Created with Sketch Beta.</desc><defs></defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketch-type="MSPage"><g id="Icon-Set-Filled" sketch-type="MSLayerGroup" transform="translate(-103.000000, -362.000000)" fill="#fff"><path d="M118,382 C115.261,382 113.042,379.762 113.042,377 C113.042,374.238 115.261,372 118,372 C120.739,372 122.959,374.238 122.959,377 C122.959,379.762 120.739,382 118,382 L118,382 Z M132.008,380.536 L129.685,379.184 C129.815,378.474 129.901,377.749 129.901,377 C129.901,376.252 129.815,375.526 129.685,374.816 L132.008,373.464 C132.957,372.912 133.281,371.688 132.733,370.732 L130.75,367.268 C130.203,366.312 128.989,365.983 128.041,366.536 L125.694,367.901 C124.598,366.961 123.352,366.192 121.967,365.697 L121.967,364 C121.967,362.896 121.079,362 119.983,362 L116.017,362 C114.921,362 114.033,362.896 114.033,364 L114.033,365.697 C112.648,366.192 111.402,366.961 110.306,367.901 L107.959,366.536 C107.011,365.983 105.797,366.312 105.25,367.268 L103.267,370.732 C102.719,371.688 103.044,372.912 103.992,373.464 L106.315,374.816 C106.185,375.526 106.099,376.252 106.099,377 C106.099,377.749 106.185,378.474 106.315,379.184 L103.992,380.536 C103.044,381.088 102.719,382.312 103.267,383.268 L105.25,386.732 C105.797,387.688 107.011,388.017 107.959,387.464 L110.306,386.099 C111.402,387.039 112.648,387.809 114.033,388.303 L114.033,390 C114.033,391.104 114.921,392 116.017,392 L119.983,392 C121.079,392 121.967,391.104 121.967,390 L121.967,388.303 C123.352,387.809 124.598,387.039 125.694,386.099 L128.041,387.464 C128.989,388.017 130.203,387.688 130.75,386.732 L132.733,383.268 C133.281,382.312 132.957,381.088 132.008,380.536 L132.008,380.536 Z M118,374 C116.357,374 115.025,375.344 115.025,377 C115.025,378.657 116.357,380 118,380 C119.643,380 120.975,378.657 120.975,377 C120.975,375.344 119.643,374 118,374 L118,374 Z" id="settings" sketch-type="MSShapeGroup"></path></g></g></svg>
                            </button>
                            <button
                                onClick={() => {
                                    SetIsFullScreen(!IsFullScreen);
                                }}
                            >
                                {
                                    IsFullScreen ?
                                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.7092 2.29502C21.8041 2.3904 21.8757 2.50014 21.9241 2.61722C21.9727 2.73425 21.9996 2.8625 22 2.997L22 3V9C22 9.55228 21.5523 10 21 10C20.4477 10 20 9.55228 20 9V5.41421L14.7071 10.7071C14.3166 11.0976 13.6834 11.0976 13.2929 10.7071C12.9024 10.3166 12.9024 9.68342 13.2929 9.29289L18.5858 4H15C14.4477 4 14 3.55228 14 3C14 2.44772 14.4477 2 15 2H20.9998C21.2749 2 21.5242 2.11106 21.705 2.29078L21.7092 2.29502Z" fill="#fff"/>
                                            <path d="M10.7071 14.7071L5.41421 20H9C9.55228 20 10 20.4477 10 21C10 21.5523 9.55228 22 9 22H3.00069L2.997 22C2.74301 21.9992 2.48924 21.9023 2.29502 21.7092L2.29078 21.705C2.19595 21.6096 2.12432 21.4999 2.07588 21.3828C2.02699 21.2649 2 21.1356 2 21V15C2 14.4477 2.44772 14 3 14C3.55228 14 4 14.4477 4 15V18.5858L9.29289 13.2929C9.68342 12.9024 10.3166 12.9024 10.7071 13.2929C11.0976 13.6834 11.0976 14.3166 10.7071 14.7071Z" fill="#fff"/>
                                        </svg>
                                    :
                                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.7071 3.70711L16.4142 9H20C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11H14.0007L13.997 11C13.743 10.9992 13.4892 10.9023 13.295 10.7092L13.2908 10.705C13.196 10.6096 13.1243 10.4999 13.0759 10.3828C13.0273 10.2657 13.0004 10.1375 13 10.003L13 10V4C13 3.44772 13.4477 3 14 3C14.5523 3 15 3.44772 15 4V7.58579L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711Z" fill="#000000"/>
                                            <path d="M9 20C9 20.5523 9.44772 21 10 21C10.5523 21 11 20.5523 11 20V14.0007C11 13.9997 11 13.998 11 13.997C10.9992 13.7231 10.8883 13.4752 10.7092 13.295C10.7078 13.2936 10.7064 13.2922 10.705 13.2908C10.6096 13.196 10.4999 13.1243 10.3828 13.0759C10.2657 13.0273 10.1375 13.0004 10.003 13C10.002 13 10.001 13 10 13H4C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15H7.58579L2.29289 20.2929C1.90237 20.6834 1.90237 21.3166 2.29289 21.7071C2.68342 22.0976 3.31658 22.0976 3.70711 21.7071L9 16.4142V20Z" fill="#000000"/>
                                        </svg>
                                }
                            </button>
                        </TopAllControls>
                        <TopInformations>
                            <div>
                                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M58.514 0A5.486 5.486 0 0 1 64 5.486v53.028A5.486 5.486 0 0 1 58.514 64H5.486A5.486 5.486 0 0 1 0 58.514V5.486A5.486 5.486 0 0 1 5.486 0h53.028z" fill="#FFF"></path><path d="m61.09 5.471-.017-.034c-.348-1.2-1.39-2.225-2.624-2.573h-.035c-.33-.104-.73-.121-1.095-.121H6.71c-.314 0-.679.017-.974.087h-.035c-1.599.33-2.885 1.877-2.954 3.493v21.254c0 9.767.017 19.864 0 29.805v.069c-.053.921.33 1.86 1.025 2.607.695.747 1.616 1.182 2.537 1.2H57.32c.278 0 .643-.018.973-.088 1.703-.4 3.042-2.085 2.955-3.753V8.026c-.018-.243 0-.487 0-.713.017-.66.034-1.303-.14-1.807l-.017-.035z" fill="#F58220"></path><path d="m49.348 20.424-4.136 15.62h4.172l.363-15.638h-.399v.018zm-2.867-4.698H55.3v20.317h3.882v4.807h-3.882v7.057h-6.114V40.85h-8.726v-5.496l6.022-19.628zM30.862 15.726h5.46v32.181H30.1V23.98a10.249 10.249 0 0 1-1.76 1.45c-.635.4-1.324.745-2.068 1.017V20.66c1.106-.635 2.05-1.36 2.83-2.195a8.954 8.954 0 0 0 1.76-2.74M15.677 16.052H9.364l-4.427 32.09h8.853l.49-5.858h2.794l.49 5.859h8.853l-4.408-32.09h-6.332zm0 7.402 1.488 13.17h-2.976l1.488-13.17z" fill="#FFF"></path></g></svg>
                                <ul>
                                    <LITopInformations>Violência,</LITopInformations>
                                    <LITopInformations>crimes</LITopInformations>
                                </ul>
                            </div>
                        </TopInformations>
                    </TopControls>
                    <MiddleControls>
                        <button>
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.54004 15.92V10.5801L8.04004 12.2501" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.02 4.46997L12 2" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4.91 7.79999C3.8 9.27999 3.10999 11.11 3.10999 13.11C3.10999 18.02 7.09 22 12 22C16.91 22 20.89 18.02 20.89 13.11C20.89 8.19999 16.91 4.21997 12 4.21997C11.32 4.21997 10.66 4.31002 10.02 4.46002" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 10.5801C15.1 10.5801 16 11.4801 16 12.5801V13.9301C16 15.0301 15.1 15.9301 14 15.9301C12.9 15.9301 12 15.0301 12 13.9301V12.5801C12 11.4701 12.9 10.5801 14 10.5801Z" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button
                            onClick={() => SetStatusVideoPlayPause(!StatusVideoPlayPause)}
                        >
                            {
                                StatusVideoPlayPause ? 
                                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 5V19M16 5V19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    :
                                    <svg width="800px" height="800px" viewBox="-0.5 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-347.000000, -3766.000000)" fill="#fff"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322" id="play-[#1003]"></path></g></g></g></svg>
                            }
                        </button>
                        <button>
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.98 4.46997L12 2" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M19.0899 7.79999C20.1999 9.27999 20.8899 11.11 20.8899 13.11C20.8899 18.02 16.9099 22 11.9999 22C7.08988 22 3.10986 18.02 3.10986 13.11C3.10986 8.19999 7.08988 4.21997 11.9999 4.21997C12.6799 4.21997 13.3399 4.31002 13.9799 4.46002" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.54004 15.92V10.5801L8.04004 12.2501" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 10.5801C15.1 10.5801 16 11.4801 16 12.5801V13.9301C16 15.0301 15.1 15.9301 14 15.9301C12.9 15.9301 12 15.0301 12 13.9301V12.5801C12 11.4701 12.9 10.5801 14 10.5801Z" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </MiddleControls>
                    <BottomControls>
                        <BottomTimers>
                            <div>00:00</div>
                            <div>24:50</div>
                        </BottomTimers>
                        <BottomProgress>
                            <BackProgress
                                onClick={(ev) => {
                                    console.log(ev.clientX);
                                }}
                            id="qualquer">
                                <LineProgress></LineProgress>
                                <BuffuredLine></BuffuredLine>
                            </BackProgress>
                        </BottomProgress>
                    </BottomControls>
                </UserView>
            </VideoProtection>
        </VideoContainer>
    )
}

const VideoContainer = styled.div`
    width: 100%;
    background-color: #000;
    position: relative;
    max-height: calc(100vh - 20.625rem);
`;

const VideoProtection = styled.div`
    position: relative;
    width: 100%;

    video{
        width: 100%;
        max-height: calc(100vh - 20.625rem);
    }
`;

const UserView = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TopControls = styled.div`
    position: relative;
`;

const TopAllControls = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 10px;
    padding: var(--padding-video-controls);

    button{
        width: 35px;
        height: 35px;
        background-color: transparent;
        border-radius: 50%;
        border: 2px solid transparent;
    }

    button svg{
        width: 100%;
        height: 100%;
    }
`;

const TopInformations = styled.div`
    display: none;

    position: absolute;
    top: 0;
    width: 100%;
    height: 85px; /* 144px */
    background-image: linear-gradient(rgb(20, 21, 25), rgba(20, 21, 25, 0));
    padding: 15px 25px;
    
    div{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    
    div svg{
        width: 4rem;
        height: 4rem;
    }

    div ul{
        display: flex;
        gap: 3px;
        list-style: none;
    }
`;

const LITopInformations = styled.li`
    font-size: 1.2rem;
    font-weight: bold;
    color: #FFF;
`;

const MiddleControls = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;

    button{
        width: 5.5rem;
        height: 5.5rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    svg{
        width: 100%;
        height: 100%;
    }
`;

const BottomControls = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 60px;
    width: 100%;
    padding: var(--padding-video-controls);
    justify-content: center;
`;

const BottomTimers = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #FFF;
`;

const BottomProgress = styled.div``;

const BackProgress = styled.div`
    position: relative;
    width: 100%;
    height: 7px;
    border-radius: 3px;
    background-color: red;
    display: flex;
    cursor: pointer;
    overflow-x: hidden;
    transition: 0.1s;

    &:before{
        content: '';
        width: 10px;
        height: 10px;
        background-color: #FFF;
        position: absolute;
        top: -20px;
        left: 50%;
        transform: rotate(45deg);
        opacity: 0;
        transition: 0.1s;
    }

    &:hover{
        height: 10px;
    }

    &:hover:before{
        opacity: 1;
    }
`;

const BuffuredLine = styled.div`
    width: 30px;
    height: 100%;
    background-color: yellow;
`;

const LineProgress = styled.div`
    width: 100px;
    height: 100%;
    background-color: green;
`;