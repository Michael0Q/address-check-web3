import React from "react"
import {styled,keyframes, CSSProperties} from "styled-components"
import CircularProgress from '@mui/material/CircularProgress';

export const Loading = () => {
    return(
        <>
            <LoadingFrame>
                <CircularProgress style={CircularProgressStyle} />
            </LoadingFrame>
        </>
    )
}

const LoadingFrame = styled.div`
    position: fixed;
    height: 100%;
    width: 100vw;
    background-color: aliceblue;
    opacity: 0.8;
`

const CircularProgressStyle : CSSProperties = {
    'display': 'block',
    'position': 'relative',
    'height': '200px',
    'width': '200px',
    'margin':'0 auto',
    'top': '40%'
}