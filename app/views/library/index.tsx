import { styles } from '@/App'
import { Component } from 'react'
import { FlatList, View } from 'react-native'
import CardBook from './components/card'

export default class LibraryPage extends Component {
    state = {
        feed: [
            { id: '1', titulo: 'O Poder do Hábito', autor: 'Maria', capa: 'https://covers.openlibrary.org/b/olid/OL9429879M-M.jpg' },
            { id: '2', titulo: 'Sapiens', autor: 'João', capa: 'https://covers.openlibrary.org/b/olid/OL9429879M-M.jpg' },
            { id: '3', titulo: '1984', autor: 'Ana', capa: 'https://covers.openlibrary.org/b/olid/OL9429879M-M.jpg' },
            { id: '4', titulo: 'Dom Casmurro', autor: 'Pedro', capa: 'https://covers.openlibrary.org/b/olid/OL9429879M-M.jpg' },
            { id: '5', titulo: 'Harry Potter e a Pedra Filosofal', autor: 'Carla', capa: 'https://covers.openlibrary.org/b/olid/OL9429879M-M.jpg' },
            { id: '6', titulo: 'O Pequeno Príncipe', autor: 'Lucas', capa: 'https://covers.openlibrary.org/b/olid/OL9429879M-M.jpg' },
            { id: '7', titulo: 'A Arte da Guerra', autor: 'Mariana', capa: 'https://covers.openlibrary.org/b/olid/OL9429879M-M.jpg' },
            { id: '8', titulo: 'Código Limpo', autor: 'Rafael', capa: 'https://covers.openlibrary.org/b/olid/OL9429879M-M.jpg' },
            { id: '9', titulo: 'O Alquimista', autor: 'Sofia', capa: 'https://covers.openlibrary.org/b/olid/OL9429879M-M.jpg' },
            { id: '10', titulo: 'Mindset', autor: 'Gustavo', capa: 'https://covers.openlibrary.org/b/olid/OL9429879M-M.jpg' },
            { id: '11', titulo: 'Atomic Habits', autor: 'Isabela', capa: 'https://covers.openlibrary.org/b/olid/OL9429879M-M.jpg' },
        ],
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    className='w-full px-3'
                    data={this.state.feed}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                    contentContainerStyle={{ paddingVertical: 16 }}
                    renderItem={({ item }) => <CardBook {...item} />}
                />
            </View>
        )
    }
}
