import { FunctionComponent, useCallback, useState } from 'react'
import { IconWrapper } from '../../atoms/IconWrapper'
import { Text } from '../../atoms/Text'
import { ImMinus, ImPlus } from 'react-icons/im'

import { CounterBase } from './Counter.styles'

type CounterProps = {
	onChange: (value: number) => void
}

export const Counter: FunctionComponent<CounterProps> = ({ onChange }) => {
	const [value, setValue] = useState<number>(0)

	const increment = useCallback(() => {
		setValue((prevValue) => {
			const updatedValue = prevValue + 1
			onChange(updatedValue)
			return updatedValue
		})
	}, [onChange])

	const decrement = useCallback(() => {
		setValue((prevValue) => {
			const updatedValue = prevValue - 1
			onChange(updatedValue)
			return updatedValue
		})
	}, [onChange])

	return (
		<CounterBase>
			<IconWrapper color="primary" onClick={decrement} clickable>
				<ImMinus />
			</IconWrapper>
			<Text weight="bold">{value}</Text>
			<IconWrapper color="primary" onClick={increment} clickable>
				<ImPlus />
			</IconWrapper>
		</CounterBase>
	)
}
