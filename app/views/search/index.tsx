import BookInterface from '@/app/models/BookModel'
import { Button, ButtonIcon } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { HStack } from '@/components/ui/hstack'
import { Input, InputField } from '@/components/ui/input'
import { Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel } from '@/components/ui/radio'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { Circle as CircleIcon, SearchIcon } from 'lucide-react-native'
import { Component } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import CardBook from './components/card'

export default class SearchPage extends Component {
    state = {
        selectedOption: 'Titulo',
        expression: '',
        results: [] as BookInterface[],
        seached: false,
    }

    search() {
        // Implement your search logic here
        this.setState({
            results: Array.from(
                { length: 20 },
                (_, i) =>
                    ({
                        titulo: `Resultado ${i + 1}`,
                        id: `${i + 1}`,
                        autor: 'Autor Exemplo',
                        capa: 'https://covers.openlibrary.org/b/olid/OL9429879M-M.jpg',
                    } as BookInterface)
            ),
            seached: !this.state.seached,
        })

        console.log(`Searching for ${this.state.expression} in ${this.state.selectedOption}`)
    }

    render() {
        return (
            <View style={styles.container} className='w-full'>
                <Card className='p-5 rounded-lg w-full mb-3'>
                    <VStack space={4} className='mb-3 d-flex flex-row justify-center items-center gap-3'>
                        <Input className='flex-1'>
                            <InputField
                                placeholder='Buscar'
                                value={this.state.expression}
                                onChangeText={(text) => this.setState({ expression: text })}
                            />
                        </Input>
                        <Button size='lg' className='flex-2 rounded-full p-3.5' onPress={() => this.search()}>
                            <ButtonIcon as={SearchIcon} />
                        </Button>
                    </VStack>
                    <VStack space={4} className='mb-3'>
                        <RadioGroup value={this.state.selectedOption} onChange={(value) => this.setState({ selectedOption: value })}>
                            <HStack space='2xl' className='justify-center'>
                                <Radio value='Titulo'>
                                    <RadioIndicator>
                                        <RadioIcon as={CircleIcon} />
                                    </RadioIndicator>
                                    <RadioLabel>Título</RadioLabel>
                                </Radio>
                                <Radio value='Autor'>
                                    <RadioIndicator>
                                        <RadioIcon as={CircleIcon} />
                                    </RadioIndicator>
                                    <RadioLabel>Autor</RadioLabel>
                                </Radio>
                                <Radio value='Usuário'>
                                    <RadioIndicator>
                                        <RadioIcon as={CircleIcon} />
                                    </RadioIndicator>
                                    <RadioLabel>Usuário</RadioLabel>
                                </Radio>
                            </HStack>
                        </RadioGroup>
                    </VStack>
                </Card>

                {this.state.seached && (
                    <Card className='rounded-lg w-full'>
                        <Text className='text-typography-700 text-center'>Resultados da busca</Text>
                    </Card>
                )}

                <FlatList
                    className='w-full'
                    data={this.state.results}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
})
