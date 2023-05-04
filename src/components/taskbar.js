import styled from "styled-components"

const StyledTaskBar = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 60px;
background-color: #222222;
nav{
    display: flex;
    gap: 20px;
}
.btn{
    background-color: #222222;
    border: none;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    height: 40px;
    text-decoration: none;
    &:hover{
        background-color: #313131;
    }
}
`;

export default function Taskbar(){

    const iconWidth = '30px';

    return(
        <StyledTaskBar>
            <nav>
                <a href="#?item=window" className="btn">
                    <img src={'/window.png'} width={iconWidth} />
                </a>
                <a href="#?item=1" className="btn">
                    <img src={'/chrome.png'} width={iconWidth} />
                </a>
                <a href="#?item=2" className="btn">
                    <img src={'/vscode.png'} width={iconWidth} />
                </a>
                <a href="#?item=3" className="btn">
                    <img src={'/slack.png'} width={iconWidth} />
                </a>
            </nav>
        </StyledTaskBar>
    )
}