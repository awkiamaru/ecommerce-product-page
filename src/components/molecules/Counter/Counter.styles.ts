import styled, { css } from 'styled-components'
import { ColorDefaults, ThemeWithProps } from '../../ions'

type CounterBaseProps = {
	color?: ColorDefaults
}

export const CounterBase = styled.div`
	${({ theme }: ThemeWithProps<CounterBaseProps>) => css`
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-width: 110px;
		min-height: 56px;
		padding: 10px 25px;
		border-radius: 10px;
		background-color: ${theme.colors.lightGrayishBlue};
	`}
`
