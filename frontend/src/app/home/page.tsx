"use client"

export default function Home() {
	return (
		<>
			<div className="fixed left-0 top-0 w-full h-20 flex bg-gray-100 ">
				<div className="container flex items-center m-auto justify-center md:px-2 px-4 w-full">
					<div className="md:flex space-x-6 text-gray-600 mx-8 text-center border-b-3 border-gray-600">
						<a
							className="cursor-pointer hover:text-gray-900  border-b-2 border-bottom-gray-600 px-8"
							href="/customer">
							Clientes
						</a>
						<a
							className="cursor-pointer hover:text-gray-900  border-b-2 border-bottom-gray-600 px-8"
							href="/plan">
							Planos
						</a>
					</div>
				</div>
			</div>

			<div className="w-full fixed top-20 left-0 flex py-40 bg-slate-100 text-gray-600">
				<span className="m-auto text-2xl font-bold">Início</span>
			</div>

			<div className="bg-slate-50 text-gray-700">
				<p>Home</p>
			</div>
		</>
	)
}
