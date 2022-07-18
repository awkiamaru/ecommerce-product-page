import { ThemeWithProps } from './../../ions/types'
import styled, { css } from 'styled-components'
import { SizeDefaults } from '../../ions'

type ThumbnailBaseProps = {
	size?: SizeDefaults
}

export const ThumbnailBase = styled.img`
	${({ theme, size }: ThemeWithProps<ThumbnailBaseProps>) => css`
		width: ${theme.sizes[size || 'xLarge']}px;
		height: ${theme.sizes[size || 'xLarge']}px;
		border-radius: 10px;
	`}
`
