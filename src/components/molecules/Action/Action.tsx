import { FunctionComponent } from 'react'
import { Button, Flex, SpacingHorizontal, Text } from '../../atoms'
import { Counter } from '../Counter'
import { AiOutlineShoppingCart } from 'react-icons/ai'

type ActionProps = {
	onClick: () => void
	onChange: (value: number) => void
}

export const Action: FunctionComponent<ActionProps> = ({
	onClick,
	onChange
}) => (
	<Flex direction="row" fullWidth justifyContent="flex-start">
		<Counter onChange={onChange} />
		<SpacingHorizontal />
		<Button
			icon={<AiOutlineShoppingCart />}
			iconColor="white"
			iconSize="medium"
			onClick={onClick}
		>
			<Text color="white" weight="semiBold">
				Add to cart
			</Text>
		</Button>
	</Flex>
)
