export interface Customer {
	id: number
	name: string
	email: string
	telephone: string
	cpf: string
	responsible: string
	cnpj: string
	business_name: string
}

export const getCustomers = async () => {
	const response = await fetch("http://localhost:80/customer")
		.then((r) => r.json())
		.then((res) => res)

	return response
}

export const addCustomer = async (customer) => {
	try {
		const response = await fetch("http://localhost:80/customer", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(customer),
		})

		return response

		// Trate a resposta aqui, se necessário
	} catch (error) {
		console.error("Erro:", error)
	}
}

export const updateCustomer = async (id: number, updatedCustomer: Customer) => {
	return await fetch("http://localhost:80/customer/" + id, {
		method: "PATCH",
		body: JSON.stringify(updatedCustomer),
	})
}

export const deleteCustomer = async (id: number) => {
	return await fetch("http://localhost:80/customer/" + id, {
		method: "DELETE",
	})
}
