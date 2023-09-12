"use client"
import React from "react";
import { useTheme } from "next-themes";
import Image from 'next/image';
import { Input, Textarea, Button } from "@nextui-org/react";
import { CarouselComponent } from "@/components/carousel";
import { ContactComponent } from "@/components/contact";


export default function Home() {
	const { theme } = useTheme();
	const [screenHeight, setScreenHeight] = React.useState(0);
	const [logo, setLogo] = React.useState('');
	const containerStyle = { height: screenHeight - 64, };

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
			  setLogo('/logo_white.png');
		  } else {
			  setLogo('/logo_black.png');
		  }
	  }, [theme]);

	return (
		<div className="page-container">
			<div className="page-section page-section__intro" style={containerStyle}>
				<div className="page-section__intro__col">
					<Image src={logo} width={1280} height={577} alt='logo'/>
				</div>
				<div className="page-section__intro__col">
					<p>
						Bogotá se viste de navidad en la tercera edición del primer festival de vinos a cielo abierto. 
						<br/>
						Descubre los secretos de los mejores vinos, acompañados de la mejor comida y música en vivo! Te sentirás viviendo una película con una increíble banda sonora.
						<br/>
						<br/>
						Próxima edición: 1,2 y 3 de diciembre.
						<br/>
						<br/>
						¡NO TE LO PUEDES PERDER!						
					</p>
				</div>
			</div>
			<div className="page-section page-section__gallery" >
				<div className="page-section__gallery__col">
					<p>
						Una dedicada selección de vinos con más de 700 referencias para que disfrutes la mejor variedad de vinos en Colombia, y lo mejor, por copeo. 
						Más de 14 países presentes
						Pet friendly
						A cielo abierto en el museo parque el chicó
						Aforo limitado
						Evento para mayores de edad											
					</p>
				</div>
				<div className="page-section__gallery__col">
					<CarouselComponent />
				</div>
			</div>

			<div className="page-section page-section__contact" >
				<ContactComponent />	
				<div className="page-section page-section__contact__text">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc lacus, fermentum vitae ultricies vitae, aliquet in ligula. Nullam iaculis ipsum eget metus aliquam, vel fringilla diam cursus. Phasellus posuere diam sed enim tincidunt, nec pharetra arcu consectetur.</p>
				
				</div>		
			</div>
		</div>
		
	);
}
