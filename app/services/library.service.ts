import { db } from "@/firebaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";
import BookInterface from "../models/BookModel";
export class LibraryService {
    // Métodos relacionados à biblioteca podem ser adicionados aqui
    async addBookToLibrary(book: BookInterface) {
        try {
            const docRef = await addDoc(collection(db, 'library'), book)
            console.log('Document written with ID: ', docRef.id)
        } catch (e) {
            console.error('Error adding document: ', e)
        }
        // Lógica para adicionar um livro à biblioteca
        console.log('Livro adicionado à biblioteca:', book)
    }

    removeBookFromLibrary(bookId: string) {
       
    }

    async getLibraryBooks() {
        const querySnapshot = await getDocs(collection(db, "library"));
        return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })) as BookInterface[];
    }

    updateBookInLibrary(bookId: string, updatedInfo: any) {
        // Lógica para atualizar as informações de um livro na biblioteca
        console.log('Livro atualizado na biblioteca:', bookId, updatedInfo)
    }
}
