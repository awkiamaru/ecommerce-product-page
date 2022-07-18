import { FunctionComponent } from 'react'
import { Action } from '../../components/molecules/Action/Action'
import { Description } from '../../components/molecules/Description/Description'
import { Item } from '../../components/molecules/Item/Item'
import { Price } from '../../components/molecules/Price/Price'
import { Header } from '../../components/organisms'

export const CheckoutView: FunctionComponent = () => (
	<>
		<Description
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
			title="Lorem ipsum dolor sit amet"
		/>
		<div
			style={{
				width: '100px'
			}}
		>
			<Price discount="50%" value="$125.00" originalValue="$250.00" />
		</div>

		<Action onChange={() => {}} onClick={() => {}} />
		<Header />
		<Item />
	</>
)
