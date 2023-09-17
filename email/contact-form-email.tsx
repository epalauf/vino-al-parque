import React from 'react';

import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";

import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
    name: string,
    message: string,
    senderEmail: string,
}

export default function  ContactFormEmail({name, message, senderEmail}: ContactFormEmailProps){
  return <Html>
        <Preview>Nuevo mensaje de vino al parque</Preview>
        <Tailwind>
            <Body className='bg-gray-100 text-black'>
                <Container>
                    <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                        <Heading className='leading-tight' >Tienes un nuevo mensaje de {name}</Heading>
                        <Text>{message}</Text>
                        <Hr/> 
                        <Text>Email del contacto: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
}
