import { FunctionComponent } from 'react'
import {
	Chip,
	Flex,
	SpacingHorizontal,
	SpacingVertical,
	Text
} from '../../atoms'

export type PriceProps = {
	discount: string
	value: string
	originalValue: string
}

export const Price: FunctionComponent<PriceProps> = ({
	discount,
	value,
	originalValue
}) => (
	<Flex direction="column">
		<Flex direction="row" alignItems="flex-end" justifyContent="flex-start">
			<Text size="large" weight="bold">
				{value}
			</Text>
			<SpacingHorizontal />
			<Chip value={discount} />
		</Flex>
		<SpacingVertical size="tiny" />
		<Text size="regular" weight="bold" color="grayishBlue" lineThrough>
			{originalValue}
		</Text>
	</Flex>
)
