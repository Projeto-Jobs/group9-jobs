import styled, {css} from "styled-components"

export const TitleStyles = css`
    font-family: Montserrat;
    font-weight: 700;
`

export const StyledTitle1 = styled.h1`
    font-size: 64px;
    line-height: 78.02px;
    ${TitleStyles}
`

export const StyledTitle2 = styled.h2`
    font-size: 44px;
    line-height: 53.64px;
    ${TitleStyles}
`

export const StyledTitle3 = styled.h3`
    font-size: 21px;
    line-height: 25.6px;
    ${TitleStyles}
`

interface IStyledTextProps{
    textStyle: "paragraph" | "paragraphBold" | "boldAlert" | "menu" | "label";
}

export const StyledText = styled.p<IStyledTextProps>`
    ${({textStyle}) => {
        switch (textStyle) {
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
                    line-height: 21px;
                    color: var(--color-blue);
                `
        }
    }}
`
