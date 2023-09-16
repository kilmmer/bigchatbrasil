"use client"
import Link from "next/link"
import "./globals.css"

import type { Metadata } from "next"
import { usePathname } from "next/navigation"
// import { Inter } from "next/font/google"

// const inter = Inter({ subsets: ["latin"] })

const metadata = {
	title: "Big Chat Brasil",
	description: "Teste",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const pathname = usePathname()

	return (
		<html lang="pt-BR" style={{ height: "100%" }}>
			<head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</head>
			<body>
				<div className="left-0 top-0 w-full h-20 flex bg-gray-100 ">
					<div className="container flex items-center m-auto justify-center md:px-2 px-4 w-full">
						<div className="md:flex space-x-6 text-gray-600 mx-8 text-center border-b-3 border-gray-600">
							<Link
								className={
									"cursor-pointer hover:text-gray-900  border-b-2 border-bottom-gray-600 px-8 " +
									(pathname === "/customer"
										? "font-bold"
										: "")
								}
								href="/customer">
								Clientes
							</Link>
							<Link
								className={
									"cursor-pointer hover:text-gray-900  border-b-2 border-bottom-gray-600 px-8 " +
									(pathname === "/plan" ? "font-bold" : "")
								}
								href="/plan">
								Planos
							</Link>
						</div>
					</div>
				</div>

				<div
					className="w-full h-full  left-0 flex bg-slate-100 text-gray-600 items-center"
					id="content">
					{children}
				</div>
			</body>
		</html>
	)
}
