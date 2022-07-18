import styled, { css } from 'styled-components'
import {
	ColorDefaults,
	FontSizeDefaults,
	FontWeightDefaults,
	ThemeWithProps
} from '../../ions'

export type TextProps = {
	color?: ColorDefaults
	size?: FontSizeDefaults
	weight?: FontWeightDefaults
	lineThrough?: boolean
}

export const Text = styled.p<TextProps>`
	${({
		theme,
		size,
		weight,
		color,
		lineThrough
	}: ThemeWithProps<TextProps>) => css`
		font-size: ${theme.fonts.size[size || 'regular']}px;
		font-weight: ${theme.fonts.weigth[weight || 'medium']};
		color: ${theme.colors[color || 'black']};
		padding: 0;
		margin: 0;
		${lineThrough && 'text-decoration: line-through;'}
	`}
`
