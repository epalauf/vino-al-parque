"use client"
import React from "react";
import { useTheme } from "next-themes";
import {Image} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Card, CardBody} from "@nextui-org/react";	

import { CarouselComponent } from "@/components/carousel";
import { ContactComponent } from "@/components/contact";


export default function Home() {
	const { theme } = useTheme();
	const [screenHeight, setScreenHeight] = React.useState(0);
	const [logo, setLogo] = React.useState('');
	//const containerStyle = { height: screenHeight - 64, };
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	const [agreed, setAgreed] = React.useState(true);

	React.useEffect(() => {
		// Function to update the screen height state
		function updateScreenHeight() {
		  setScreenHeight(window.innerHeight);
		}  
		// Add an event listener to update the screen height when the window is resized
		window.addEventListener('resize', updateScreenHeight);  
		// Initial screen height
		updateScreenHeight();  
		// Clean up the event listener when the component unmounts
		return () => {
		  window.removeEventListener('resize', updateScreenHeight);
		};
	  }, []);
  
	  React.useEffect(() => { 
		
		  if(theme === 'dark') {
			  setLogo('/logo_gold.png');
		  } else {
			  setLogo('/logo_silver.png');
		  }
	  }, [theme]);

	  React.useEffect(() => { 
		onOpen();		  
	  }, []);

	return (
		<div className="page-container">
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} hideCloseButton={true} backdrop="blur">
				<ModalContent>
				{(onClose) => (
					<>
					<ModalHeader className="flex flex-col gap-1">Verifica tu Edad</ModalHeader>
					<ModalBody>
						{ agreed && <p>Declaro que soy mayor de edad</p>}
						{ !agreed && <p>Lo sentimos, está prohibido el ingreso a menores de edad al festival.</p>}
					</ModalBody>
					<ModalFooter>
						{ agreed &&
							<>
								<Button color="primary" onPress={onClose}>
								si
								</Button>
								<Button color="secondary" onPress={()=>setAgreed(false)}>
								no
								</Button>
							</>
						}
					</ModalFooter>
					</>
				)}
				</ModalContent>
			</Modal>
			<div className="page-section page-section__intro" >
				<Image src={`${logo}`} width={'100%'} height={'auto'} alt='logo'/>
				<div className="page-section__intro__info">
					<p>Próxima edición: 1, 2 y 3 de diciembre.</p>
					<p> Museo Parque el Chicó 
						<br/>
						A cielo abierto con aforo limitado
						<br/>
						Evento para mayores de edad
					</p>
				</div>
			</div>
			<div className="page-section page-section__gallery" >
				<CarouselComponent />
				<Card className="page-section__gallery__card">
					<CardBody>
						<ul>
							<li>Una dedicada selección de vinos con más de 700 referencias para que disfrutes la mejor variedad de vinos en Colombia, y lo mejor, por copeo. </li>
							<li>Más de 14 países presentes Pet friendly.</li>
							<li>Bogotá se viste de navidad en la tercera edición del primer festival de vinos a cielo abierto. </li>
							<li>Descubre los secretos de los mejores vinos, acompañados de la mejor comida y música en vivo!</li>
							<li>Te sentirás viviendo una película con una increíble banda sonora.</li>
							<li>¡NO TE LO PUEDES PERDER!</li>
						</ul>
					</CardBody>
				</Card>
				
			</div>
			<div className="page-section page-section__contact" >
				<ContactComponent />	
				<div className="page-section page-section__contact__text">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5518383859776!2d-74.04676212517019!3d4.673684241891491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99740ee43781%3A0xd9d997c44051f15e!2sMuseo%20del%20Chic%C3%B3!5e0!3m2!1ses!2sco!4v1694519132328!5m2!1ses!2sco" width="100%" height="192" style={{border: 0}}  loading="lazy" allowFullScreen={true} referrerPolicy="no-referrer"></iframe>
				
				</div>		
			</div>
		</div>
		
	);
}
