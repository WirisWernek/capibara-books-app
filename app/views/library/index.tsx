import { styles } from '@/App'
import BookInterface from '@/app/models/BookModel'
import { LibraryService } from '@/app/services/library.service'
import { Component } from 'react'
import { FlatList, View } from 'react-native'
import CardBook from './components/card'

export default class LibraryPage extends Component {
    libraryService: LibraryService
    constructor(props: any) {
        super(props)
        this.libraryService = new LibraryService()
    }

    state = {
        feed: [] as BookInterface[],
    }

    searchData() {
        this.libraryService.getLibraryBooks().then((books) => {
            this.setState({ feed: books })
        })
    }

    componentDidMount(): void {
        this.searchData()
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        this.searchData()
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
