import { Button, ButtonGroup, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { CloudUpload } from 'lucide-react-native';
import { Component } from 'react';
import { FlatList, View } from 'react-native';
import ArquivosImportados from './components/arquivos-importados';


export default class UploadPage extends Component {

	state = {
		arquivosImportados: [
			{ id: '1', data: '2024-10-01', observacoes: 'Arquivo importado com sucesso.', status: 'Concluído' },
			{ id: '2', data: '2024-10-02', observacoes: 'Erro ao importar arquivo.', status: 'Falhou' },
			{ id: '3', data: '2024-10-03', observacoes: 'Arquivo em processamento.', status: 'Pendente' },
			{ id: '4', data: '2024-10-04', observacoes: 'Arquivo importado com sucesso.', status: 'Concluído' },
			{ id: '5', data: '2024-10-05', observacoes: 'Erro ao importar arquivo.', status: 'Falhou' },
			{ id: '6', data: '2024-10-06', observacoes: 'Arquivo em processamento.', status: 'Pendente' },
			{ id: '7', data: '2024-10-07', observacoes: 'Arquivo importado com sucesso.', status: 'Concluído' },
			{ id: '8', data: '2024-10-08', observacoes: 'Erro ao importar arquivo.', status: 'Falhou' },
			{ id: '9', data: '2024-10-09', observacoes: 'Arquivo em processamento.', status: 'Pendente' },
			{ id: '10', data: '2024-10-10', observacoes: 'Arquivo importado com sucesso.', status: 'Concluído' },
			{ id: '11', data: '2024-10-11', observacoes: 'Erro ao importar arquivo.', status: 'Falhou' },
			{ id: '12', data: '2024-10-12', observacoes: 'Arquivo em processamento.', status: 'Pendente' },
			{ id: '13', data: '2024-10-13', observacoes: 'Arquivo importado com sucesso.', status: 'Concluído' },
			{ id: '14', data: '2024-10-14', observacoes: 'Erro ao importar arquivo.', status: 'Falhou' },
			{ id: '15', data: '2024-10-15', observacoes: 'Arquivo em processamento.', status: 'Pendente' },
		]
	}

    render() {
        return (
            <View className='flex-1 items-center gap-3'>
                <ButtonGroup className="my-4 w-[90%]">
                    <Button variant="solid" size="lg" action="secondary" className="w-full">
                        <ButtonIcon as={CloudUpload} />
                        <ButtonText>Upload</ButtonText>
                    </Button>
                </ButtonGroup>

				<Text className="text-center text-black" size="lg"> Upload your files</Text>
				<FlatList
					className='w-full'
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ paddingVertical: 16 }}
					ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
					data={this.state.arquivosImportados}
					renderItem={({ item }) => <ArquivosImportados  {...item} />}
					keyExtractor={(item) => item.id}
				/>
            </View>
        )
    }
}
