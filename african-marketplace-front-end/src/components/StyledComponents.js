import styled from 'styled-components';
import { defaultTheme, typeScale, primaryFont, neutral, black } from '../utils';


const Button = styled.button `  
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width: 150px;
    max-width: 200px;
    cursor: pointer;
    font-family: ${primaryFont};
    transition: background-color 0.2s linear, color 0.2s linear;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0px 24px;


`

export const PrimaryButton = styled(Button) `

    background-color: ${defaultTheme.primaryButtonColor};
    color: ${defaultTheme.secondaryFontColor};
    border: 2px solid ${defaultTheme.primaryButtonColor};

    &:hover {
        background: ${defaultTheme.primaryColorButtonHover};
        border: 2px solid ${defaultTheme.primaryButtonColor};
        color: ${defaultTheme.primaryFontColorHover};
    }
`

export const SecondaryButton = styled(Button) `
    background-color: ${defaultTheme.secondaryButtonColor};
    color: ${defaultTheme.secondaryFontColor};
    border: 2px solid ${defaultTheme.secondaryButtonColor};

    &:hover {
        background: ${defaultTheme.secondaryButtonColorHover};
        border: 2px solid ${defaultTheme.secondaryButtonBorderHover};
        color: ${defaultTheme.secondaryFontColorHover};

    }

`

export const Form = styled.form `
    width: 477px;
    height: 515px;
    background: rgba(251, 175, 0, 0.76);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-family: ${primaryFont};
    color: ${defaultTheme.primaryFontColor};


`
export const Input = styled.input `
    border: none;
    border-bottom: 2px solid ${neutral};
    max-width: 400px;
    min-width: 300px;
    padding: 25px;
    font-family: ${primaryFont};
    outline: none;

    ::placeholder {
        font-size: ${typeScale.paragraph};
        color: ${defaultTheme.tertiaryColor};
    }

`
export const ItemCard = styled.div `

`

export const HeaderStyle = styled.header `
    position: absolute;
    top: 0px;
    right: 0px;
    margin: 30px;
    display: flex;
    align-items: center;
    font-family: ${primaryFont};
    letter-spacing: .25;
    position: top;
    color: ${black};
    font-size: ${typeScale.header1};
    border: 1px solid red;
`

export const FooterStyle = styled.footer `
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: ${primaryFont};
    font-size: ${typeScale.copyrightText};
    color: ${neutral};
    background: ${black};
    opacity: 0.76;
    width: 100vw;
    height: 90px;
`

