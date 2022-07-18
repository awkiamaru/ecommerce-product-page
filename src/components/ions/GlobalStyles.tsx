import { createGlobalStyle, css } from 'styled-components'
import { breakpointQuery } from '../../utils'
import { normalize } from './normalize'
import { ThemeDefault } from './types'

export const GlobalStyles = createGlobalStyle<{ theme: ThemeDefault }>`
${({ theme }) => css`
	${normalize}

	body {
		font-family: ${theme.fonts.family};
		font-size: ${theme.fonts.size.regular}px;
		padding: 0 !important;
	}

	${breakpointQuery(theme)} {
		* {
			scrollbar-width: thin;
			scrollbar-color: ${theme.colors.primary} ${theme.colors.lightGrayishBlue};
		}

		::-webkit-scrollbar {
			width: 6px;
		}

		::-webkit-scrollbar-track {
			background-color: ${theme.colors.lightGrayishBlue};
		}

		::-webkit-scrollbar-thumb {
			background-color: ${theme.colors.primary};
			border-radius: 24px;
		}
	}
`}
`
