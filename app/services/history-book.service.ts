import { db } from "@/firebaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";
import HistoryOfReadingInterface from "../models/HistoryOfReadingModel";

export default class HistoryBookService {
    // Métodos relacionados à biblioteca podem ser adicionados aqui
    async addHistoryOfRead(history: HistoryOfReadingInterface) {
        try {
            const docRef = await addDoc(collection(db, 'history'), history)
            console.log('Document written with ID: ', docRef.id)
        } catch (e) {
            console.error('Error adding document: ', e)
        }
        // Lógica para adicionar um livro à biblioteca
        console.log('Livro adicionado à biblioteca:', history)
    }

    removeBookFromLibrary(bookId: string) {
       
    }

    async getHistoryOfReads() {
        const querySnapshot = await getDocs(collection(db, "history"));
        return querySnapshot.docs.map(doc => ({ ...doc.data(),
			dateRead: doc.data().dateRead.toDate(),
			id: doc.id })) as HistoryOfReadingInterface[];
    }

    updateHistoryOfRead(historyId: string, updatedInfo: any) {
        // Lógica para atualizar as informações de um livro na biblioteca
        console.log('Histórico de leitura atualizado:', historyId, updatedInfo)
    }
}
