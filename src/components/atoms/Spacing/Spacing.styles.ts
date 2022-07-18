import styled, { css } from 'styled-components'
import { SizeDefaults, ThemeWithProps } from '../../ions'

export type SpacingProps = {
	vertical?: boolean
	size?: SizeDefaults
}

export const spacingBaseStyles = css`
	width: auto;
	height: auto;
	display: inline-block;
	flex-shrink: 0;
	position: relative;
`

export const SpacingHorizontal = styled.div<SpacingProps>`
	${spacingBaseStyles}
	${({ theme, size }: ThemeWithProps<SpacingProps>) => css`
		width: ${theme.sizes[size || 'regular']}px;
	`}
`

export const SpacingVertical = styled.div<SpacingProps>`
	${spacingBaseStyles}
	display: block;
	${({ theme, size }: ThemeWithProps<SpacingProps>) => css`
		height: ${theme.sizes[size || 'regular']}px;
	`}
`
