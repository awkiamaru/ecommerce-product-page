import { FunctionComponent } from 'react'
import { Flex, Text } from '../../atoms'

export type DescriptionProps = {
	title: string
	description: string
}

export const Description: FunctionComponent<DescriptionProps> = ({
	title,
	description
}) => (
	<Flex direction="column">
		<h1>{title}</h1>
		<Text color="darkGrayishBlue" weight="light">
			{description}
		</Text>
	</Flex>
)
