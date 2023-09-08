"use client"
import React from "react";
import { useTheme } from "next-themes";
import Image from 'next/image';

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
				<div>
					<Image src={logo} width={1280} height={577} alt='logo'/>
				</div>
				<div>
					<p>
						Bogotá se viste de navidad en la tercera edición del primer festival de vinos a cielo abierto. Descubre los secretos de los mejores vinos, acompañados de la mejor comida y música en vivo! Te sentirás viviendo una película con una increíble banda sonora ¡NO TE LO PUEDES PERDER!.

						Una dedicada selección de vinos con más de 700 referencias para que disfrutes la mejor variedad de vinos en Colombia, y lo mejor, por copeo. 

						Más de 14 países presentes
						Pet friendly
						A cielo abierto en el museo parque el chicó
						Aforo limitado
						Evento para mayores de edad

						Próxima edición: 1,2 y 3 de diciembre					
					</p>
				</div>
			</div>
		</div>
	);
}
