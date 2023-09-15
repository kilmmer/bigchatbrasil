"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { addCustomer } from "../crud.customer"

export default function CreateCustomerPage() {
	const router = useRouter()

	const handleCreateCustomer = async (event) => {
		const target = event.target
		event.preventDefault()

		const form = new FormData(target)
		const data = {}
		for (let [key, value] of form.entries()) {
			data[key] = value
		}

		const id = Date.now()
		const newCustomer = { ...data }
		const result = await addCustomer(newCustomer)

		console.log(result)

		if (result.ok) {
			router.push("/customer")
		} else {
			alert("Erro: " + result.statusText)
		}
		return false
	}

	return (
		<>
			<div className="body flex-col	flex justify-center items-center md:w-screen">
				<div className="flex border-spacing-4 border-b-4 mb-4">
					<h1 className="font-semibold">Cadastrar novo cliente</h1>
					<br />
				</div>
				<div className="flex">
					<form
						className="sign-up-form-container bg-white px-8 md:py-12 sm:py-2 rounded-lg shadow-md shadow-sm sm:m-2"
						onSubmit={handleCreateCustomer}
						method="POST">
						<div className=" justify-center items-center rounded-lg pb-2">
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Nome"
								className=" bg-gray-100 text-black px-6 py-4 md:mr-1  md:rounded-l-lg tracking-widest md:w-96"
							/>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Email"
								className="bg-gray-100 text-black px-6 py-4 md:ml-1  md:rounded-r-lg tracking-widest md:w-96 sm:w-full"
							/>
						</div>
						<div className=" justify-center items-center rounded-lg pb-2">
							<input
								type="text"
								id="telephone"
								name="telephone"
								placeholder="Telefone"
								className=" bg-gray-100 text-black px-6 py-4 mr-1 rounded-l-lg tracking-widest md:w-96 sm:w-full"
							/>
							<input
								type="text"
								id="cpf"
								name="cpf"
								placeholder="CPF"
								className="bg-gray-100 text-black px-6 py-4 ml-1 rounded-r-lg tracking-widest md:w-96 sm:w-full"
							/>
						</div>
						<div className=" justify-center items-center rounded-lg pb-2">
							<input
								type="text"
								id="responsible"
								name="responsible"
								placeholder="Responsável"
								className=" bg-gray-100 text-black px-6 py-4 mr-1 rounded-l-lg tracking-widest md:w-96 sm:w-full"
							/>
							<input
								type="text"
								id="cnpj"
								name="cnpj"
								placeholder="CNPJ"
								className="bg-gray-100 text-black px-6 py-4 ml-1 rounded-r-lg tracking-widest md:w-96 sm:w-full"
							/>
						</div>
						<div className=" justify-center items-center rounded-lg py-2">
							<input
								type="text"
								id="business_name"
								name="business_name"
								placeholder="Empresa"
								required
								className="w-full bg-gray-100 text-black px-6 py-4 rounded-lg tracking-widest"
							/>
						</div>
						<div className=" justify-center items-center rounded-lg py-2">
							<select
								name="plan"
								id="plan"
								className="w-full bg-gray-100 text-black px-6 py-4 rounded-lg tracking-widest">
								<option value="">Escolha</option>
								<option value="1">Plano pré-pago</option>
								<option value="2">Plano pós-pago</option>
							</select>
						</div>
						<div className=" justify-center items-center rounded-lg pt-2 pb-8">
							<button className="sign-up-button w-full transform active:scale-95 bg-blue-500 text-white px-16 py-4 rounded-lg font-bold tracking-widest">
								Cadastrar
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
