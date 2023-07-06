import styled, {css} from "styled-components"

interface ITitleColorStyle {
    color: "blue" | "white" | "black";
}

export const TitleStyles = css<ITitleColorStyle>`
    font-family: Montserrat;
    font-weight: 700;
    ${({color}) => {
        switch (color) {
            case 'blue':
                return css` color: var(--color-blue); `
            case 'white':
                return css` color: var(--color-white); `
            case 'black':
                return css` color: var(--color-black); `
        }
    }}
`

export const StyledTitle1 = styled.h1<ITitleColorStyle>`
    font-size: 64px;
    line-height: 78.02px;
    ${TitleStyles}
`

export const StyledTitle2 = styled.h2<ITitleColorStyle>`
    font-size: 44px;
    line-height: 53.64px;
    ${TitleStyles}
`

export const StyledTitle3 = styled.h3<ITitleColorStyle>`
    font-size: 21px;
    line-height: 25.6px;
    ${TitleStyles}
`

interface IStyledTextProps{
    text: "paragraph" | "paragraphBold" | "boldAlert" | "menu" | "label";
}

export const StyledText = styled.p<IStyledTextProps>`
    ${({text}) => {
        switch (text) {
            case 'paragraph':
                return css`
                    font-family: Inter;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 36px;
                    color: var(--color-black);
                `
            case 'paragraphBold':
                return css`
                    font-family: Inter;
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 36px;
                    color: var(--color-black);
                `
            case 'boldAlert':
                return css`
                    font-family: Montserrat;
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 20px;
                    color: var(--color-black);
                `
            case 'menu':
                return css`
                    font-family: Montserrat;
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 20px;
                    color: var(--color-black);
                `
            case 'label':
                return css`
                    font-family: Montserrat;
                    font-size: 17px;
                    font-weight: 400;
                    color: var(--color-blue);
                `
        }
    }}
`
