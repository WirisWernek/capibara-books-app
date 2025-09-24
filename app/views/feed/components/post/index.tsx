import PostInterface from "@/app/models/PostModel";
import { Avatar, AvatarFallbackText, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Component } from "react";
import { View } from "react-native";

export class Post extends Component<PostInterface>{
	constructor(props: PostInterface) {
	  super(props);
	}

	render() {
		return (
			<Card size="lg" variant="filled" className="w-auto mx-2">
				<Text size="sm" className="italic text-justify">"{this.props.destaque}"</Text>
				<Text size="sm" className="self-end">{this.props.autor}</Text>
				<View className="flex-row items-center gap-4 mt-4">
					<Avatar size="sm">
						<AvatarFallbackText>Jane Doe</AvatarFallbackText>
						<AvatarImage
							source={{
							uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
							}}
						/>
					</Avatar>
					<Text size="sm">{this.props.username}</Text>
				</View>
			</Card>
		);
	}
}