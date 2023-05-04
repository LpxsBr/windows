import styled from "styled-components"

export default function Shortcut({...props}){

    const StyledShortcut = styled.div`
        position: absolute;
        height: 100px;
        width: 100px;
        padding: 10px;
        top: 50%;
        left: 50%;
        background-color: gray;
    `;

    return(
        <StyledShortcut style={{top: props.top, left: props.left}}>
            <div className="form-item">
                <label>Nome do Atalho</label>
                <input type={'text'} placeholder={'digite aqui'} />
            </div>
            <div className="form-item">
                <label>Caminho</label>
                <input type={'text'} placeholder={'digite aqui'} />
            </div>
            <button> Salvar </button>            
        </StyledShortcut>
    )
}