import BookInterface from '@/app/models/BookModel'
import {
	Actionsheet,
	ActionsheetBackdrop,
	ActionsheetContent,
	ActionsheetDragIndicator,
	ActionsheetDragIndicatorWrapper,
	ActionsheetIcon,
	ActionsheetItem,
	ActionsheetItemText,
} from '@/components/ui/actionsheet'
import { Box } from '@/components/ui/box'
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import { ArrowRightIcon, ClockIcon, EditIcon, EyeIcon } from '@/components/ui/icon'
import { Image } from '@/components/ui/image'
import { Modal, ModalBackdrop } from '@/components/ui/modal'
import { Text } from '@/components/ui/text'
import { NotebookPen } from 'lucide-react-native'

import { Component } from 'react'
import { View } from 'react-native'
import ModalFormHistorico from '../modal-form-historico'
import ModalFormResenha from '../modal-form-resenha'
import ModalFormStatus from '../modal-form-status'
import ModalViewLivro from '../modal-view-livro'

export default class CardBook extends Component<BookInterface> {
    constructor(props: BookInterface) {
        super(props)
    }

    state = {
        isVisible: false,
        showModal: false,
		modalOption: '',
    }

    handleClose() {
        this.setState({ isVisible: false })
    }

    openModal(modalOption: string) {
		this.handleClose()
        this.setState({ showModal: true, modalOption: modalOption })
    }

    closeModal() {
        this.setState({ showModal: false })
    }

    handleOpen() {
        this.setState({ isVisible: true })
    }

    render() {
        return (
            <Card className='p-5 rounded-lg w-100 gap-6 flex flex-row '>
                <Image
                    source={{
                        uri: this.props.capa,
                    }}
                    size='xl'
                    className='rounded-md object-contain'
                    alt='Capa do livro'
                />

                <Box className=''>
                    <Text className='text-sm font-normal mb-2 text-typography-700'>May 15, 2023</Text>
                    <Heading size='md' className='mb-4'>
                        {this.props.titulo}
                    </Heading>
                    <Button variant='solid' className='mt-2' onPress={this.handleOpen.bind(this)}>
                        <ButtonText>Right Icon</ButtonText>
                        <ButtonIcon as={ArrowRightIcon} className='ml-2' />
                    </Button>
                </Box>
                <Actionsheet isOpen={this.state.isVisible} onClose={this.handleClose.bind(this)}>
                    <ActionsheetBackdrop />
                    <ActionsheetContent>
                        <ActionsheetDragIndicatorWrapper>
                            <ActionsheetDragIndicator />
                        </ActionsheetDragIndicatorWrapper>
                        <View>
                            <Heading size='lg' className='mt-1 text-center'>
                                {this.props.titulo}
                            </Heading>
                            <Text className='text-sm font-normal mb-4 text-typography-700 text-center'>by {this.props.autor}</Text>
                        </View>
                        <ActionsheetItem onPress={() => this.openModal('historico')}>
                            <ActionsheetIcon className='stroke-background-700' as={ClockIcon} />
                            <ActionsheetItemText>Histórico de leitura</ActionsheetItemText>
                        </ActionsheetItem>
                        <ActionsheetItem onPress={() => this.openModal('status')}>
                            <ActionsheetIcon className='stroke-background-700' as={EditIcon} />
                            <ActionsheetItemText>Alterar status</ActionsheetItemText>
                        </ActionsheetItem>
                        <ActionsheetItem onPress={() => this.openModal('visualizar')}>
                            <ActionsheetIcon className='stroke-background-700' as={EyeIcon} />
                            <ActionsheetItemText>Ver livro</ActionsheetItemText>
                        </ActionsheetItem>
                        <ActionsheetItem onPress={() => this.openModal('resenha')}>
                            <ActionsheetIcon className='stroke-background-700' as={NotebookPen} />
                            <ActionsheetItemText>Adicionar resenha</ActionsheetItemText>
                        </ActionsheetItem>
                    </ActionsheetContent>
                </Actionsheet>

                <Modal isOpen={this.state.showModal} onClose={this.closeModal.bind(this)} size='md'>
                    <ModalBackdrop />
                    {this.state.modalOption === 'historico' && <ModalFormHistorico data={this.props} closeModal={this.closeModal.bind(this)} />}
					{this.state.modalOption === 'status' && <ModalFormStatus data={this.props} closeModal={this.closeModal.bind(this)} />}
					{this.state.modalOption === 'resenha' && <ModalFormResenha data={this.props} closeModal={this.closeModal.bind(this)} />}
					{this.state.modalOption === 'visualizar' && <ModalViewLivro data={this.props} closeModal={this.closeModal.bind(this)} />}

                </Modal>
            </Card>
        )
    }
}
