import { FunctionComponent } from 'react'
import { Text } from '../Text'
import { ChipBase } from './Chip.styles'

type ChipProps = {
	value?: string
}

export const Chip: FunctionComponent<ChipProps> = ({ value }) => (
	<ChipBase>
		<Text color="primary" weight="bold" size="regular">
			{value ?? '...'}
		</Text>
	</ChipBase>
)
