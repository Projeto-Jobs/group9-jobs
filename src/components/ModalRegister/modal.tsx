import React, { Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from "react"
import { ApplicationsContext } from "../../providers/ModalContext"
import { ModalStyled } from "./styles"
import { StyledButton } from "../../styles/Global"
import imgButton from "../../assets/buttonClose.svg"
import { JobsListContext } from "../../providers/JobsListContext"
import { StyledText, StyledTitle2 } from "../../styles/Typography"

interface Application {
  jobId: number;
  userId: number;
  name: string;
  email: string;
  linkedin: string;
}

interface ModalRegisterProps {
  isOpen: boolean | Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
}

export const ModalRegister: React.FC<ModalRegisterProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const { registerApplication } = useContext(ApplicationsContext)
  const { currentJob } = useContext(JobsListContext)

  const [formData, setFormData] = useState<Application>({
    jobId: currentJob.id,
    userId: currentJob.user.id,
    name: "",
    email: "",
    linkedin: "",
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    handleClose()
    await registerApplication(formData);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleClose = () => {
    onClose()
  }

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleClose()
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  if (isOpen) {
    return (
      <ModalStyled >
        <div className="container" ref={modalRef}>
          <header>
            <img id="close-modal" onClick={handleClose} src={imgButton} alt="close" />
            <StyledTitle2 color="blue">Cadastre-se</StyledTitle2>
            <StyledText text="paragraph">Você está se candidatando para <strong>{currentJob.position} </strong> na empresa <strong>{currentJob.user.name}</strong></StyledText>
          </header>
          <form onSubmit={handleSubmit}>
            <div>
              <input placeholder="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange} required/>
              <input placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange} required/>
              <input placeholder="Linkedin"
                type="text"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange} required/>
            </div>
              <StyledButton type="submit" >Cadastre-se</StyledButton>
          </form>
        </div>
      </ModalStyled>
    )
  }
  return null
}