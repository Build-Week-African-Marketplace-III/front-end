import styled from 'styled-components';
import { defaultTheme, typeScale, primaryFont, neutral } from '../utils';

export const PrimaryButton = styled.button `
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width: 100px;
    max-width: 150px;
    cursor: pointer;
    font-family: ${primaryFont};
    transition: background-color 0.2s linear, color 0.2s linear;
    background-color: ${defaultTheme.primaryColorButton};
    color: ${defaultTheme.primaryFontColor};
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 2px solid ${defaultTheme.primaryColorButton};


    &:hover {
        background: ${defaultTheme.primaryColorButtonHover};
        border: 2px solid ${defaultTheme.primaryColorButton};
        color: ${defaultTheme.primaryFontColorHover};
    }
`

export const Form = styled.form `
    position: absolute;
    width: 477px;
    height: 515px;
    background: rgba(251, 175, 0, 0.76);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const Input = styled.input `
    border: none;
    border-bottom: 2px solid ${neutral};
    font-family: ${primaryFont};
    max-width: 400px;
    min-width: 300px;
    padding: 25px;
    
`
export const ItemCard = styled.div `

`
