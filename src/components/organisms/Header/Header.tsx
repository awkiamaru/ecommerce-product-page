import { FunctionComponent } from 'react'
import { Flex, IconWrapper, SpacingHorizontal } from '../../atoms'
import { Logo } from '../../atoms/Logo'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Profile } from '../../atoms/Profile/Profile'
import { Container, Grid, NavItems, NavText } from './Header.styles'

export const Header: FunctionComponent = () => (
	<Container>
		<Grid>
			<NavItems
				justifyContent="space-between"
				alignItems="center"
				direction="row"
				fullWidth
			>
				<Logo />

				<NavText weight="light" color="darkGrayishBlue" size="paragraph" active>
					Collections
				</NavText>
				<NavText weight="light" color="darkGrayishBlue" size="paragraph">
					Men
				</NavText>
				<NavText weight="light" color="darkGrayishBlue" size="paragraph">
					Women
				</NavText>
				<NavText weight="light" color="darkGrayishBlue" size="paragraph">
					About
				</NavText>
				<NavText weight="light" color="darkGrayishBlue" size="paragraph">
					Contact
				</NavText>
			</NavItems>
			<Flex fullWidth justifyContent="flex-end" alignItems="center">
				<IconWrapper size="medium" color="darkGrayishBlue">
					<AiOutlineShoppingCart />
				</IconWrapper>
				<SpacingHorizontal size="xLarge" />
				<Profile />
			</Flex>
		</Grid>
	</Container>
)
