"use server"

import React from "react";

import { Resend } from "resend"
//const resend = new Resend(process.env.RESEND_API_KEY)
const resend = new Resend(process.env.RESEND_API_KEY_TEST);
import ContactFormEmail from "@/email/contact-form-email";

export const sendEmail = async (formData: FormData) => {
    console.log('running on server')
    
    const email = formData.get("email")
    const message = formData.get("message")
    const name =  formData.get("name")

    if(!message || typeof message !== "string") {
        return {
            error: "Invalid message",

        }
    }

    if(!email || typeof email !== "string") {
        return {
            error: "Invalid sender email",

        }
    }

    if(!name || typeof name !== "string") {
        return {
            error: "Invalid name",

        }
    }

    try {
        await resend.emails.send({
            from: "Contact form <onboarding@resend.dev>",
            to: "epalau@gmail.com",
            subject: "Message from contact form",
            reply_to: email,
            react: React.createElement(ContactFormEmail, {
                name: name as string, 
                message: message as string,
                senderEmail: email as string,

            })
        })
        
    } catch (error: unknown) {
       console.log(error)
    }    
}