"use client"

import React, { useEffect, useState } from "react"
import { Customer, getCustomers } from "../crud.customer"
import Modal from "@/app/components/modal"

export default function CustomerListPage() {
	const [customers, setCustomers] = useState([])
	const [showModal, setShowModal] = useState(false)
	const [newPlan, setNewPlan] = useState("")
	const [creditAmount, setCreditAmount] = useState("")
	const [newLimit, setNewLimit] = useState("")
	const [customerSelected, setCustomerSelected] = useState<Customer | null>(
		null
	)
	const [wallet, setWallet] = useState({})

	const isPrepaid = false
	const handlePlanChange = (e: any) => {
		setNewPlan(e.target.value)
	}

	const handleCreditAmountChange = (e: any) => {
		setCreditAmount(e.target.value)
	}

	const handleLimitChange = (e: any) => {
		setNewLimit(e.target.value)
	}

	const handleFormSubmit = (e: any) => {
		e.preventDefault()("Novo plano:", newPlan)(
			"Novo crédito:",
			creditAmount
		)("Novo limite:", newLimit)
		toggleModal() // Fechar o modal após a submissão
	}

	useEffect(() => {
		async function fetchData() {
			const request = await getCustomers()

			setCustomers(request)
		}

		fetchData()
	}, [])

	function toggleModal() {
		setShowModal(!showModal)
	}

	useEffect(() => {
		customerSelected
	}, [customerSelected])

	useEffect(() => {
		async function fetchWalletCustomer(customerId: number) {
			const result = await fetch(
				`http://localhost:4000/customer/${customerId}/get-wallet`
			)

			if (result && result.ok) {
				return result.json()
			}
		}

		if (customerSelected && customerSelected.id) {
			setWallet(fetchWalletCustomer(customerSelected["id"]))
		}
	}, [customerSelected])

	function changeCustomer(customer: Customer) {
		setCustomerSelected(customer)
	}

	return (
		<div className="container mx-auto px-8 bg-slate-100 ">
			<table className="min-w-full rounded-lg text-center">
				<thead className="rounded-lg">
					<tr className="bg-slate-500 text-slate-200 rounded-lg">
						<th className="py-2">ID</th>
						<th className="py-2">Nome</th>
						<th className="py-2">E-mail</th>
						<th className="py-2">Telefone</th>
						<th className="py-2">CPF</th>
						<th className="py-2">Responsável</th>
						<th className="py-2">CNPJ</th>
						<th className="py-2">Nome Empresarial</th>
						<th className="py-2">Ações</th>
					</tr>
				</thead>
				<tbody className="overflow-x-hidden overflow-y-auto h-52">
					{customers.map((customer: Customer, index: number) => (
						<tr key={index}>
							<td className="border py-2">{customer.id}</td>
							<td className="border py-2">{customer.name}</td>
							<td className="border py-2">{customer.email}</td>
							<td className="border py-2">
								{customer.telephone}
							</td>
							<td className="border py-2">{customer.cpf}</td>
							<td className="border py-2">
								{customer.responsible}
							</td>
							<td className="border py-2">{customer.cnpj}</td>
							<td className="border py-2">
								{customer.business_name}
							</td>
							<td className="border py-2">
								<button
									className="bg-green-500 hover:bg-green-700 text-white font-bold  text-xs py-1 px-2 rounded-full mr-2"
									onClick={() => {
										toggleModal()
										changeCustomer(customer)
									}}>
									Carteira
								</button>
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  text-xs py-1 px-2 rounded-full mr-2">
									Editar
								</button>
								<button className="bg-red-500 hover:bg-red-700 text-white font-bold text-xs  py-1 px-2 rounded-full">
									Excluir
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<Modal
				isOpen={showModal}
				toggleModal={toggleModal}
				title="Carteira">
				<div
					className={`fixed inset-0 flex items-center justify-center z-50 block`}>
					<div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
					<div className="modal-container bg-white w-1/2 mx-auto rounded shadow-lg z-50 overflow-y-auto">
						<div className="modal-content py-4 text-left px-6">
							<div className="modal-header flex justify-between items-center">
								<h3 className="text-lg font-semibold">
									Editar Carteira -{" "}
									{customerSelected?.business_name || ""}
								</h3>
								<button
									className="modal-close text-2xl"
									onClick={() => toggleModal()}>
									&times;
								</button>
							</div>
							<div className="modal-body">
								<form onSubmit={handleFormSubmit}>
									<div className="mb-4">
										<label
											htmlFor="plan"
											className="block text-gray-700 font-bold mb-2">
											Novo Plano:
										</label>
										<select
											id="plan"
											className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											value={newPlan}
											onChange={handlePlanChange}>
											<option value="1">
												Plano Pré-pago
											</option>
											<option value="2">
												Plano Pós-pago
											</option>
										</select>
									</div>
									{customerSelected && (
										<div className="mb-4">
											<label
												htmlFor="creditAmount"
												className="block text-gray-700 font-bold mb-2">
												Crédito Adicional:
											</label>
											<input
												type="number"
												id="creditAmount"
												className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
												placeholder="Digite a quantia de crédito a adicionar"
												value={creditAmount}
												onChange={
													handleCreditAmountChange
												}
											/>
										</div>
									)}
									{customerSelected && (
										<div className="mb-4">
											<label
												htmlFor="newLimit"
												className="block text-gray-700 font-bold mb-2">
												Novo Limite:
											</label>
											<input
												type="number"
												id="newLimit"
												className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
												placeholder="Digite o novo limite"
												value={newLimit}
												onChange={handleLimitChange}
											/>
										</div>
									)}
									<button
										type="submit"
										className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
										Salvar Alterações
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	)
}
