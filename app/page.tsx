"use client"
import React from "react";
import {Image} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Card, CardBody, Divider } from "@nextui-org/react";	
import { Montserrat } from "next/font/google";
import { CarouselComponent } from "@/components/carousel";
import { ContactComponent } from "@/components/contact";
import { BiMap } from 'react-icons/bi';
import { FaWineGlassEmpty, FaMusic, FaWineBottle } from 'react-icons/fa6';
import { IoRestaurantOutline } from 'react-icons/io5';
import { PiParkBold } from 'react-icons/pi';
const montserrat = Montserrat({ subsets: ['latin'] });
import { motion } from "framer-motion";
import wineBullet from '../public/glass.png'
export default function Home() {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();	
	const [agreed, setAgreed] = React.useState(true);  

	const ulStyle = {
		listStyle: 'none',
		paddingLeft: '0',		
	};
  
	const liStyle = {
		background: `url(${wineBullet.src}) left center no-repeat`,
		paddingLeft: '32px',
		backgroundSize: '20px',
		marginBottom: '12px',

	};  
	React.useEffect(() => { 
		onOpen();		  
	}, []);

	const openLinkInNewTab = () => {
		let url = "https://maps.app.goo.gl/hhUDt4ZL94dHKQ3d6"
		const newTab = window.open(url, "_blank");
		if (newTab) {
			newTab.focus();
		}		
	};

	return (
		<div className={`page-container ${montserrat.className}`}>			
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} hideCloseButton={true} backdrop="blur" className={montserrat.className}>
				<ModalContent className="page-modal__container">
				{(onClose) => (
					<>
					<ModalHeader className="flex flex-col gap-1 page-modal__container__title">Verifica tu Edad</ModalHeader>
					<ModalBody>
						{ agreed && <p>Declaro que soy mayor de edad</p>}
						{ !agreed && <p>Lo sentimos, está prohibido el ingreso a menores de edad al festival.</p>}
					</ModalBody>
					<ModalFooter>
						{ agreed &&
							<>
								<Button  variant="ghost" onPress={onClose} className="page-modal__age">
								si
								</Button>
								<Button  variant="ghost" onPress={()=>setAgreed(false)}>
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
				<Image src={`/logo_gold.png`} width={'100%'} height={'auto'} alt='logo' className="page-section__intro-img"/>
				<div className="page-section__intro__info">
					<h1>VOLVIMOS PARA ENCENDER LA NAVIDAD</h1>
					<br /> 
					<p className="page-section__intro__info-date">1, 2 y 3 de diciembre</p>
					<p className="page-section__intro__info__map"> <span>Parque Museo el Chicó </span> <BiMap onClick={openLinkInNewTab} /></p>
					{/* <p>
						A cielo abierto con aforo limitado
						<br/>
						Evento para mayores de edad
					</p> */}
				</div>
			</div>
			<div className="page-section page-section__gallery" >
				<CarouselComponent />
				<Card className="page-section__gallery__card">
					<CardBody>
						<h1>Que encontrarás</h1>
						<div className="page-section__gallery__card-items">
							<div className="page-section__gallery__card-item" >
								<motion.div
									className="box"
									whileHover={{ scale: 1.1 }}
									transition={{ type: "spring", stiffness: 400, damping: 10 }}
								><FaWineBottle /></motion.div>								
								<p>Más de 700 referencias seleccionadas de Vino</p>
							</div>
							<div className="page-section__gallery__card-item" >
								<motion.div
									className="box"
									whileHover={{ scale: 1.1 }}
									transition={{ type: "spring", stiffness: 400, damping: 10 }}
								><IoRestaurantOutline /></motion.div>
								<p>14  Diferentes categorías de restaurantes</p>
							</div>
							<div className="page-section__gallery__card-item" >
								<motion.div
									className="box"
									whileHover={{ scale: 1.1 }}
									transition={{ type: "spring", stiffness: 400, damping: 10 }}
								><FaMusic /></motion.div>								
								<p>Más de 12 bandas locales</p>
							</div>
							<div className="page-section__gallery__card-item" >
								<motion.div
									className="box"
									whileHover={{ scale: 1.1 }}
									transition={{ type: "spring", stiffness: 400, damping: 10 }}
								><FaWineGlassEmpty /></motion.div>								
								<p>Catas Petite</p>
							</div>
							<div className="page-section__gallery__card-item" >
								<motion.div
									className="box"
									whileHover={{ scale: 1.1 }}
									transition={{ type: "spring", stiffness: 400, damping: 10 }}
								><PiParkBold /></motion.div>								
								<p>Catas al Parque</p>
							</div>
						</div>
						<Divider className="my-4" />
						<div className="page-section__gallery__card-bullets">
							<ul style={ulStyle}>
								<li style={liStyle}>Una dedicada selección de vinos con más de 700 referencias para que disfrutes la mejor variedad de vinos en Colombia, y lo mejor, por copeo.</li>
								<li style={liStyle} >Más de 14 países presentes Pet friendly.</li>
								<li style={liStyle} >Bogotá se viste de navidad en la tercera edición del primer festival de vinos a cielo abierto.</li>
								<li style={liStyle} >Descubre los secretos de los mejores vinos, acompañados de la mejor comida y música en vivo!</li>
								<li style={liStyle} >Te sentirás viviendo una película con una increíble banda sonora.</li>
							</ul>
						</div>	
						<Divider className="my-4" />
						<p className="page-section__gallery__card-important">¡NO TE LO PUEDES PERDER!</p>
						<p className="page-section__gallery__card-buy__text">Compra tus entradas aquí</p>
						<div className="page-section__gallery__card-btn" >
							<Image src={`/logotuboleta.svg`} width={'100%'} height={'auto'} alt='logo-tu-boleta' />
						</div>
											
					</CardBody>
				</Card>
				
			</div>
			<div className="page-section page-section__contact" >
				<ContactComponent />	
				<div className="page-section page-section__contact__text">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5518383859776!2d-74.04676212517019!3d4.673684241891491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99740ee43781%3A0xd9d997c44051f15e!2sMuseo%20del%20Chic%C3%B3!5e0!3m2!1ses!2sco!4v1694519132328!5m2!1ses!2sco" width="100%" height="100%" style={{border: 0}}  loading="lazy" allowFullScreen={true} referrerPolicy="no-referrer"></iframe>
				
				</div>		
			</div>
		</div>
		
	);
}
