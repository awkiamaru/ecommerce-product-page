import styled, { css } from 'styled-components'
import { ColorDefaults, ThemeWithProps } from '../../ions'

type ChipBaseProps = {
	color?: ColorDefaults
}

export const ChipBase = styled.div`
	${({ theme, color }: ThemeWithProps<ChipBaseProps>) => css`
		background-color: ${theme.colors[color || 'primaryXLight']};
		border-radius: 6px;
		width: 51px;
		height: 20px;
		padding: 2px;
		display: flex;
		align-items: center;
		justify-content: center;
	`}
`
