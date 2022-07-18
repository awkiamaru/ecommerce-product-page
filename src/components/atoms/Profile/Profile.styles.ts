import styled from 'styled-components'
import { theme } from '../../ions'

export const ImageBase = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	transition: 0.3s;
	border: 2px solid transparent;

	&:hover {
		border: 2px solid ${theme.colors.primary};
	}
`
