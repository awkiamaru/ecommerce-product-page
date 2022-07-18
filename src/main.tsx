import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyles } from './components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
