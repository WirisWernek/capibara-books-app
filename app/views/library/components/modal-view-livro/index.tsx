import { MarkingType } from '@/app/models/enums/markingType.enum'
import HistoryOfReadingInterface from '@/app/models/HistoryOfReadingModel'
import { ModalDataInterface } from '@/app/models/ModalDataModel'
import HistoryBookService from '@/app/services/history-book.service'
import { Button, ButtonText } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { ModalBody, ModalContent, ModalFooter, ModalHeader } from '@/components/ui/modal'
import { Text } from '@/components/ui/text'
import { Component } from 'react'
import { FlatList, View } from 'react-native'

export default class ModalViewLivro extends Component<ModalDataInterface> {
    // libraryService: LibraryService;
    historyReadingService: HistoryBookService
    constructor(props: ModalDataInterface) {
        super(props)
        // this.libraryService = new LibraryService();
        this.historyReadingService = new HistoryBookService()
    }

    state = {
        historico: [] as HistoryOfReadingInterface[],
    }

    componentDidMount(): void {
        this.loadHistorico()
    }

    loadHistorico = async () => {
        if (!this.props.data) return
        const historico = await this.historyReadingService.getHistoryOfReads()
        this.setState({ historico })
    }

    render() {
        return (
            <ModalContent>
                <ModalHeader className='d-flex justify-center'>
                    <Heading size='lg'>
                        {this.props.data?.titulo} de {this.props.data?.autor}
                    </Heading>
                </ModalHeader>
                <ModalBody>
                    <FlatList
                        className='w-full'
                        data={this.state.historico}
                        renderItem={({ item }) => (
							<View>
								{ 
									item.markingType == MarkingType.PageNumber &&
									<Text className='text-center' key={item.id}>
										Pagina {item.readingPosition} - {item.dateRead.toDateString()}
									</Text>
								}
								{ 
									item.markingType == MarkingType.ReadingPercentage &&
									<Text className='text-center' key={item.id}>
										{item.readingPosition}% - {item.dateRead.toDateString()}
									</Text>
								}
							</View>
                                
                            
                        )}
                        keyExtractor={(item) => item.id!}
                    />
                </ModalBody>
                <ModalFooter className='d-flex justify-center gap-3'>
                    <Button
                        variant='outline'
                        action='secondary'
                        onPress={() => {
                            this.props.closeModal()
                        }}
                    >
                        <ButtonText>Fechar</ButtonText>
                    </Button>
                    {/* <Button
                        onPress={() => {
                            this.props.closeModal()
                        }}
                    >
                        <ButtonText>Save</ButtonText>
                    </Button> */}
                </ModalFooter>
            </ModalContent>
        )
    }
}
