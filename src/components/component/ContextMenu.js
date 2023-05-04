import { useState } from "react";
import styled from "styled-components"

export default function ContextMenu({...props}){

    const StyledContextMenu = styled.div`
        position: absolute;
        height: fit-content;
        width: 100px;
        padding: 10px;
        background-color: #222222;
        opacity: 0.8;
        button{
            background-color: transparent;
            border: none;
            color: #fff;
        }
    `;

    return(
        <StyledContextMenu style={{top: props.top, left: props.left}}>
            <button>
                Add Shortcut
            </button>
            <hr/>
            <button>
                Add link
            </button>
        </StyledContextMenu>
    )
}