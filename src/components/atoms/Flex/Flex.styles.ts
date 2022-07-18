import { FlexDirections, ThemeWithProps } from './../../ions/types'
import styled, { css } from 'styled-components'
import { AlignItems, JustifyContent } from '../../ions'
import { nullableCssProperty } from '../../../utils'

export type FlexProps = {
	alignItems?: AlignItems
	justifyContent?: JustifyContent
	direction?: FlexDirections
	fullWidth?: boolean
}

export const Flex = styled.div<FlexProps>`
	${({
		alignItems,
		justifyContent,
		direction,
		fullWidth
	}: ThemeWithProps<FlexProps>) => css`
		display: flex;
		margin: 0;
		padding: 0;
		${fullWidth && 'width: 100%;'}
		${nullableCssProperty('flex-direction', direction)}
		${nullableCssProperty('align-items', alignItems)}
		${nullableCssProperty('justify-content', justifyContent)}
	`}
`
