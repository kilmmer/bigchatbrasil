import React, { useState } from "react"

const Modal = ({
	isOpen,
	toggleModal,
	title,
	children,
}: {
	isOpen: boolean
	toggleModal: () => void
	title: string
	children: React.ReactNode
}) => {
	const displayClass = isOpen ? "block" : "hidden"

	return (
		<div
			className={`fixed inset-0 flex items-center justify-center z-50 ${displayClass}`}>
			<div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
			<div className="modal-container bg-white w-1/2 mx-auto rounded shadow-lg z-50 overflow-y-auto">
				<div className="modal-content py-4 text-left px-6">
					<div className="modal-header flex justify-between items-center">
						<h3 className="text-lg font-semibold">{title}</h3>
						<button
							className="modal-close text-2xl"
							onClick={toggleModal}>
							&times;
						</button>
					</div>
					<div className="modal-body">{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
