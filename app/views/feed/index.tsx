import { Component } from 'react'
import { FlatList, View } from 'react-native'
import { styles } from '../../../App'
import { Post } from './components/post'

export default class FeedPage extends Component {
	destaque = "Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por 'lorem ipsum' irá encontrar muitos websites ainda na sua infância."
	state = {
		feed: [
			{ id: '1', destaque: this.destaque, autor: 'Maria', username: 'maria123', userAvatar: 'https://example.com/maria.jpg' },
			{ id: '2', destaque: this.destaque, autor: 'João', username: 'joao123', userAvatar: 'https://example.com/joao.jpg' },
			{ id: '3', destaque: this.destaque, autor: 'Ana', username: 'ana123', userAvatar: 'https://example.com/ana.jpg' },
			{ id: '4', destaque: this.destaque, autor: 'Pedro', username: 'pedro123', userAvatar: 'https://example.com/pedro.jpg' },
			{ id: '5', destaque: this.destaque, autor: 'Carla', username: 'carla123', userAvatar: 'https://example.com/carla.jpg' },
			{ id: '6', destaque: this.destaque, autor: 'Lucas', username: 'lucas123', userAvatar: 'https://example.com/lucas.jpg' },
			{ id: '7', destaque: this.destaque, autor: 'Mariana', username: 'mariana123', userAvatar: 'https://example.com/mariana.jpg' },
			{ id: '8', destaque: this.destaque, autor: 'Rafael', username: 'rafael123', userAvatar: 'https://example.com/rafael.jpg' },
			{ id: '9', destaque: this.destaque, autor: 'Sofia', username: 'sofia123', userAvatar: 'https://example.com/sofia.jpg' },
			{ id: '10', destaque: this.destaque, autor: 'Gustavo', username: 'gustavo123', userAvatar: 'https://example.com/gustavo.jpg' },
			{ id: '11', destaque: this.destaque, autor: 'Isabela', username: 'isabela123', userAvatar: 'https://example.com/isabela.jpg' },
		]
	}
	render() {
		return (
			<View style={styles.container}>
				<FlatList className='w-full'
					data={this.state.feed}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item) => item.id}
					ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
					contentContainerStyle={{ paddingVertical: 16 }}
					renderItem={({ item }) => <Post {...item} />}
				/>
			</View>
		)
	}
}