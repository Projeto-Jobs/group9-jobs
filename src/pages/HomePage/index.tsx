import { useState } from "react"
import img from "../../assets/HomePicture.svg"
import imgMinus from "../../assets/plus.svg"
import imgMax from "../../assets/minus.svg"

import { ICompany } from "./homeContext"
import { StyledHome } from "./styles"
interface IListProps {
    list: ICompany[]
}

export const ListCompany = ({ }: IListProps) => {

    const [showButton, setShowButton] = useState(true)

    const [showParagraph, setShowParagraph] = useState(false)

    const modifyButton = () => {
        setShowButton(!showButton)
        setShowParagraph(!showParagraph)
    }

    return (
        <StyledHome>
            <div>
                <div>
                    <h1>Trabalho é na Jobs</h1>
                </div>
            </div>
            <section>
                <div>
                    <div>
                        <h2>Sobre a Jobs</h2>
                        <p>A Jobs é uma empresa dedicada a ajudar pessoas a encontrar empregos e empresas a descobrir talentos.
                            Nossa plataforma permite que os usuários se cadastrem como candidatos em busca de oportunidades de
                            emprego ou como empresas em busca de profissionais qualificados. Com uma interface intuitiva e
                            recursos avançados de busca, conectamos as necessidades dos candidatos às demandas das empresas de
                            forma eficiente e eficaz. Na Jobs, nosso objetivo é promover um ambiente de trabalho próspero,
                            facilitando o encontro entre talentos e oportunidades.
                        </p>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h2>Confira nossas vagas</h2>
                </div>
                <ul>
                    <li>
                        <div>
                            <div>
                                {showButton ? (
                                    <img onClick={modifyButton} src={imgMinus} alt="" />
                                ) : (
                                    <img onClick={modifyButton} src={imgMax} alt="" />
                                )}
                                <div>
                                    <h4>Kenzie Academy Brasil</h4>
                                    <h3>Desenvolverdor junior </h3>
                                </div>
                            </div>
                            <button>Cadastre-se</button>
                        </div>
                        <div>
                            {showParagraph && (
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quos ipsa incidunt
                                    minima in quo necessitatibus blanditiis molestias reprehenderit modi! Reiciendis
                                    voluptatum odio vero explicabo aperiam quos velit impedit. Facilis!</p>
                            )}
                        </div>
                    </li>
                </ul>
            </section>
        </StyledHome>
    )
}