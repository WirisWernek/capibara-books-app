import ArquivosImportadosModel from "@/app/models/ArquivosImportadosModel";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { CircleAlert, CircleCheckBig, CircleX, FileType } from "lucide-react-native";
import { Component } from "react";
import { View } from "react-native";

export default class ArquivosImportados extends Component<ArquivosImportadosModel> {
	constructor(props: ArquivosImportadosModel) {
	  super(props);
	}
	
	render() {
		return (
			<Card size="lg" variant="filled" className="w-auto mx-2 flex-row items-center gap-2">
				<Icon className="flex-none align-self-start" as={FileType} size="lg" />
				<View className="flex-1 justify-center items-center gap-1">
					<Text size="sm" className="text-center">Importado em {this.props.data}</Text>
					<Text size="sm" className="text-center">{this.props.observacoes}</Text>
				</View>
				{this.props.status === 'Concluído' && <Icon className="flex-none align-self-end" as={CircleCheckBig} size="lg" />}
				{this.props.status === 'Falhou' && <Icon className="flex-none align-self-end" as={CircleX} size="lg" />}
				{this.props.status === 'Pendente' && <Icon className="flex-none align-self-end" as={CircleAlert} size="lg" />}
			</Card>
		);
	}
}