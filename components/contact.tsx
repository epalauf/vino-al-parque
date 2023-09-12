"use client"

import React, {useState, ChangeEvent, FormEvent} from "react";
import { Input, Textarea, Button } from "@nextui-org/react";


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
    
      const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(formData)
        // try {
        //   const response = await fetch('/api/sendEmail', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        //   });
    
        //   if (response.ok) {
        //     // Handle success (e.g., show a success message).
        //   } else {
        //     // Handle error (e.g., show an error message).
        //   }
        // } catch (error) {
        //   console.error('Error sending form data:', error);
        // }
      };

  return (
    <div className="page-section page-section__contact__form">
        <form onSubmit={handleSubmit}>
            <div className="page-section page-section__contact__input-container">
                <div className="page-section page-section__contact__input">
                    <Input onChange={handleChange} labelPlacement="inside" type="text" label="Nombre(s) y Apellidos" size="lg" id="name" name="name"/>
                    <Input onChange={handleChange} labelPlacement="inside" type="email" label="Email" size="lg" id="email" name="email"/>
                </div>
                <Textarea
                    label="Mensaje"
                    labelPlacement="inside"
                    placeholder=""
                    className=""
                    minRows={4}
                    size="lg"
                    id="message" 
                    name="message"
                    onChange={handleChange}
                />
            </div>
            <Button color="primary" type="submit">
                Enviar
            </Button>
        </form>	
    </div>

  );
}
