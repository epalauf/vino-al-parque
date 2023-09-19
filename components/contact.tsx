"use client"

import React, {useState, ChangeEvent, FormEvent} from "react";
import { Input, Textarea, Button, Spinner } from "@nextui-org/react";
import { sendEmail } from "@/actions/sendEmail";


export const ContactComponent = () => {

  const [spinner, setSpinner] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });


      const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

  return (
    <div className="page-section page-section__contact__form">
      <p className="contact-info">Regístrate en nuestro <span>early access</span> y no solo serás el primero en comprar tu entrada, tendrás un <span>precio especial!</span></p>
        <form id="contact-form" action={async (formData) => {            
            await sendEmail(formData);
            setFormData({
              name: '',
              email: '',
              message: '',              
            });
            const contactForm = document.getElementById("contact-form") as HTMLFormElement;
            if (contactForm) {
              contactForm.reset();
            }            
            setSpinner(false);
          }}
        >
            <div className="page-section page-section__contact__input-container">
                <div className="page-section page-section__contact__input">
                    <Input  isRequired labelPlacement="inside" type="text" label="Nombre(s) y Apellidos" size="md" id="name" name="name" onChange={handleChange}/>
                    <Input  isRequired labelPlacement="inside" type="email" label="Email" size="md" id="email" name="email" onChange={handleChange}/>
                </div>
                <Textarea
                    label="Mensaje"
                    labelPlacement="inside"
                    placeholder=""
                    className=""
                    minRows={3}
                    size="lg"
                    id="message" 
                    name="message"   
                    onChange={handleChange}                                     
                />
            </div>
            <Button  type="submit" size="lg" onClick={()=>{if(formData.name !== '' && formData.email !== ''){setSpinner(true)}}} variant="ghost" className="send-email__btn">
                { !spinner ? 'Enviar' : <Spinner size="sm" color="warning" />}
            </Button>
        </form>	
        
    </div>

  );
}
