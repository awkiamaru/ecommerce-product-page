import styled, { css } from 'styled-components'

import { HTMLAttributes, ReactNode, SyntheticEvent } from 'react'
import { ColorDefaults, SizeDefaults, ThemeWithProps } from '../../ions'

export type IconProps = HTMLAttributes<HTMLElement> & {
	children: ReactNode | JSX.Element
	color?: ColorDefaults
	size?: SizeDefaults
	clickable?: boolean
	onClick?: (event?: SyntheticEvent) => void
}

export const IconBase = styled.span`
	${({ theme, color, size, clickable }: ThemeWithProps<IconProps>) => css`
		${clickable && 'cursor: pointer;'}

		align-items: center;
		display: inline-flex;
		justify-content: center;
		text-align: center;
		width: ${theme.sizes[size || 'regular']}px;
		color: ${theme.colors[color || 'black']};

		svg {
			width: ${theme.sizes[size || 'regular']}px;
			height: auto;
			fill: ${theme.colors[color || 'black']};
		}
	`}
`
