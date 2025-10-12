import BookInterface from "./BookModel"

export interface ModalDataInterface {
	closeModal: () => void
	data?: BookInterface
}