import { MarkingType } from '@/app/models/enums/markingType.enum'
import { ModalDataInterface } from '@/app/models/ModalDataModel'
import HistoryBookService from '@/app/services/history-book.service'
import { Button, ButtonText } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Input, InputField } from '@/components/ui/input'
import { ModalBody, ModalContent, ModalFooter, ModalHeader } from '@/components/ui/modal'
import {
	Select,
	SelectBackdrop,
	SelectContent,
	SelectDragIndicator,
	SelectDragIndicatorWrapper,
	SelectIcon,
	SelectInput,
	SelectItem,
	SelectPortal,
	SelectTrigger,
} from '@/components/ui/select'
import { Text } from '@/components/ui/text'
import { Textarea, TextareaInput } from '@/components/ui/textarea'
import { VStack } from '@/components/ui/vstack'
import { ChevronDownIcon } from 'lucide-react-native'
import { Component } from 'react'

export default class ModalFormHistorico extends Component<ModalDataInterface> {
    // libraryService: LibraryService;
    historyReadingService: HistoryBookService
    constructor(props: ModalDataInterface) {
        super(props)
        // this.libraryService = new LibraryService();
        this.historyReadingService = new HistoryBookService()
    }

    state = {
        pontoDaLeitura: '',
        tipoDeMarcacao: '',
        notas: '',
    }

    handleSave = async () => {
        if (!this.props.data) return
        const historyRecord = {
            bookId: this.props.data.id!,
            dateRead: new Date(),
            notes: this.state.notas,
            markingType: this.state.tipoDeMarcacao as MarkingType,
            readingPosition: Number(this.state.pontoDaLeitura),
        }
        try {
            await this.historyReadingService.addHistoryOfRead(historyRecord)
            this.props.closeModal()
        } catch (error) {
            console.error('Error saving historical data:', error)
        }

        // try {
        // 	await this.libraryService.addBookToLibrary(this.props.data);
        // 	this.props.closeModal();
        // } catch (error) {
        // 	console.error("Error saving historical data:", error);
        // }
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
                    <VStack space={4} className='mb-3'>
                        <Text className='text-typography-500'>Ponto da Leitura</Text>
                        <Input>
                            <InputField
                                type='text'
                                keyboardType='numeric'
                                value={this.state.pontoDaLeitura}
                                onChangeText={(text) => this.setState({ pontoDaLeitura: text })}
                            />
                        </Input>
                    </VStack>
                    <VStack space={4} className='mb-3'>
                        <Text className='text-typography-500'>Tipo de Marcação</Text>
                        <Select
                            selectedValue={this.state.tipoDeMarcacao}
                            onValueChange={(value) => this.setState({ tipoDeMarcacao: value })}
                        >
                            <SelectTrigger variant='outline' size='md'>
                                <SelectInput
                                    placeholder='Selecione o tipo de marcação'
                                    value={this.state.tipoDeMarcacao}
                                />
                                <SelectIcon className='mr-3' as={ChevronDownIcon} />
                            </SelectTrigger>
                            <SelectPortal>
                                <SelectBackdrop />
                                <SelectContent>
                                    <SelectDragIndicatorWrapper>
                                        <SelectDragIndicator />
                                    </SelectDragIndicatorWrapper>
                                    <SelectItem label='Número da Página' value={MarkingType.PageNumber} />
                                    <SelectItem label='Porcentagem da Leitura' value={MarkingType.ReadingPercentage} />
                                </SelectContent>
                            </SelectPortal>
                        </Select>
                    </VStack>
                    <VStack space={4}>
                        <Text className='text-typography-500'>Notas</Text>
                        <Textarea size='md' isReadOnly={false} isInvalid={false} isDisabled={false}>
                            <TextareaInput
                                placeholder='Suas anotações aqui...'
                                value={this.state.notas}
                                onChangeText={(text) => this.setState({ notas: text })}
                            />
                        </Textarea>
                    </VStack>
                </ModalBody>
                <ModalFooter className='d-flex justify-center gap-3'>
                    <Button
                        variant='outline'
                        action='secondary'
                        onPress={() => {
                            this.props.closeModal()
                        }}
                    >
                        <ButtonText>Cancel</ButtonText>
                    </Button>
                    <Button
                        onPress={() => {
                            this.handleSave()
                        }}
                    >
                        <ButtonText>Save</ButtonText>
                    </Button>
                </ModalFooter>
            </ModalContent>
        )
    }
}
