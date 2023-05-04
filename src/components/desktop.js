import styled from "styled-components"
import ContextMenu from "./component/ContextMenu";
import { useState } from "react";
import Shortcut from "./component/Shortcut";

const StyledDesktop = styled.div`
background-color: #f1f1f1;
background: url(/11wallpaper.jpg);
background-position: center;
background-size: cover;
height: calc(100vh - 60px);
`;

export default function Desktop(){

    let items = []

    const [contextMenu, setContextMenu] = useState(0)
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)

    window.oncontextmenu = (event)=>{
        console.log('abriu o menu')
        setTop(event.clientY)
        setLeft(event.clientX)
        setContextMenu(1)
        return false
    }

    const closeOnTouch = () => {
        setContextMenu(0)
    }
    
    return(
        <StyledDesktop onClick={closeOnTouch}>
            {
                !contextMenu ? null : <ContextMenu top={top} left={left}/>
            }
            {
                items.map((item)=><p>{item}</p>)
            }
            {
                
            }
        </StyledDesktop>
    )
}