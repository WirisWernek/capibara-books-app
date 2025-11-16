import { MarkingType } from '@/app/models/enums/markingType.enum'
import HistoryOfReadingInterface from '@/app/models/HistoryOfReadingModel'
import { ModalDataInterface } from '@/app/models/ModalDataModel'
import HistoryBookService from '@/app/services/history-book.service'
import { Button, ButtonText } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { ModalBody, ModalContent, ModalFooter, ModalHeader } from '@/components/ui/modal'
import { Text } from '@/components/ui/text'
import { Component } from 'react'
import { View } from 'react-native'

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
                <ModalBody showsVerticalScrollIndicator={false}>
                    {this.state.historico.map((item) => (
                        <View key={item.id}>
                            {item.markingType == MarkingType.PageNumber && (
                                <Text className='' key={item.id}>
                                    {item.dateRead.toDateString()} - Página {item.readingPosition}
                                </Text>
                            )}
                            {item.markingType == MarkingType.ReadingPercentage && (
                                <Text className='' key={item.id}>
                                    {item.dateRead.toDateString()} - {item.readingPosition}%
                                </Text>
                            )}
                        </View>
                    ))}
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
