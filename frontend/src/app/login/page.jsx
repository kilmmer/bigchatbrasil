"use client"

import { useRouter } from "next/navigation"

export default function Login() {
	const router = useRouter()

	const handleSubmit = (e) => {
		e
		e.stopPropagation()

		router.push("/home")
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded shadow-md w-96">
				<h2 className="text-2xl font-semibold mb-4">Login</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="email" className="block text-gray-600">
							Email
						</label>
						<input
							type="email"
							id="email"
							className="border rounded w-full py-2 px-3"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-gray-600">
							Senha
						</label>
						<input
							type="password"
							id="password"
							className="border rounded w-full py-2 px-3 text-gray-600"
						/>
					</div>
					<button
						type="submit"
						className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
						Login
					</button>
				</form>
			</div>
		</div>
	)
}
