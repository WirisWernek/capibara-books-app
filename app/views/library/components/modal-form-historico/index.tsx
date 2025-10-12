import { ModalDataInterface } from '@/app/models/ModalDataModel'
import { Button, ButtonText } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { CloseIcon, Icon } from '@/components/ui/icon'
import { ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from '@/components/ui/modal'
import { Text } from '@/components/ui/text'
import { Component } from 'react'

export default class ModalFormHistorico extends Component<ModalDataInterface> {
	constructor(props: ModalDataInterface) {
		super(props)
	}

    render() {
        return (
            <ModalContent>
                <ModalHeader>
                    <Heading size='lg'>Modal Histórico</Heading>
                    <ModalCloseButton>
                        <Icon as={CloseIcon} />
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                    <Text>Livro: {this.props.data?.titulo}</Text>
                    <Text>Autor: {this.props.data?.autor}</Text>
                </ModalBody>
                <ModalFooter>
                    <Button
                        variant='outline'
                        action='secondary'
                        className='mr-3'
                        onPress={() => {
                            this.props.closeModal()
                        }}
                    >
                        <ButtonText>Cancel</ButtonText>
                    </Button>
                    <Button
                        onPress={() => {
                            this.props.closeModal()
                        }}
                    >
                        <ButtonText>Save</ButtonText>
                    </Button>
                </ModalFooter>
            </ModalContent>
        )
    }
}
