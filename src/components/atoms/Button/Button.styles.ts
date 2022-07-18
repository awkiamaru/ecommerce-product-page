import styled, { css } from 'styled-components'
import { ColorDefaults, JustifyContent, ThemeWithProps } from '../../ions'

export type ButtonBaseProps = {
	color?: ColorDefaults
	fullWidth?: boolean
	justify?: JustifyContent
}
export const ButtonBase = styled.button`
	${({ theme, fullWidth }: ThemeWithProps<ButtonBaseProps>) => css`
		${fullWidth && 'width: 100%;'}

		background-color: ${theme.colors.primary};
		border: none;
		border-radius: ${theme.sizes.xxxSmall}px;
		padding: ${theme.sizes.xSmall}px ${theme.sizes.xxxLarge}px;
		text-align: center;
		transition: 0.3s;
		display: flex;
		align-items: center;

		box-shadow: 5px 5px 40px ${theme.colors.primaryLight};

		&:disabled {
			cursor: not-allowed;
			background-color: ${theme.colors.primaryLight} !important;
			color: ${theme.colors.white} !important;
			svg {
				fill: ${theme.colors.white} !important;
			}
		}

		&:hover {
			background-color: ${theme.colors.primaryDark};
		}
	`}
`
