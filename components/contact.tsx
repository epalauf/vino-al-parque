"use client"

import React, {useState, ChangeEvent, FormEvent} from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import { sendEmail } from "@/actions/sendEmail";


export const ContactComponent = () => {
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
        <form action={async (formData) => await sendEmail(formData)}>
            <div className="page-section page-section__contact__input-container">
                <div className="page-section page-section__contact__input">
                    <Input onChange={handleChange} labelPlacement="inside" type="text" label="Nombre(s) y Apellidos" size="md" id="name" name="name"/>
                    <Input onChange={handleChange} labelPlacement="inside" type="email" label="Email" size="md" id="email" name="email"/>
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
            <Button color="primary" type="submit" size="lg">
                Enviar
            </Button>
        </form>	
    </div>

  );
}
