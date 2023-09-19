import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontMontserrat } from "@/config/fonts";
import { Providers } from "./providers";
//import { DropDownNavbar } from "@/components/dropdownnavbar";
import { SocialComponent } from "@/components/social";
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon2.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-montserrat antialiased",
					fontMontserrat.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="w-full relative flex flex-col h-screen">
						{/* <DropDownNavbar /> */}
						<main className="w-full flex items-center justify-center py-3">
							{children}
						</main>
						<footer className="w-full flex items-center justify-center py-3">
							<p><span>*</span>EVENTO PARA MAYORES DE 18 AÑOS. EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD</p>
							<span className="text-default-600">Vino al Parque 2023</span>
							<p>Todos los derechos reservados.</p>
						</footer>
						<SocialComponent  />
					</div>					
				</Providers>
			</body>
		</html>
	);
}
