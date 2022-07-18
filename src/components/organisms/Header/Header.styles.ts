import { ThemeWithProps } from './../../ions/types'
import styled, { css } from 'styled-components'
import { Flex, Text, TextProps } from '../../atoms'

export const Container = styled(Flex)`
	width: 80%;
`

type GridProps = {
	fullWidth?: boolean
}

export const Grid = styled.div`
	${({ theme }: ThemeWithProps<GridProps>) => css`
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		border-bottom: 1px solid ${theme.colors.gray};
	`}
`

type NavTextProps = TextProps & {
	active?: boolean
}

export const NavItems = styled(Flex)`
	min-height: 100px;
`

export const NavText = styled(Text)<NavTextProps>`
	${({ theme, active }: ThemeWithProps<NavTextProps>) => css`
		${active &&
		`
			color: ${theme.colors.darkBlue};
			font-weight: ${theme.fonts.weigth.regular};
			padding: 40px 0px;
			border-bottom: 4px solid ${theme.colors.primary};
		`}
	`}
`
