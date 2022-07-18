import { getTypedKeys } from '../../utils/object'
import { theme } from './theme'

export type ThemeDefault = typeof theme

export const layoutOptions = getTypedKeys(theme.layout)
export type LayoutDefaults = typeof layoutOptions[number]

export const colorOptions = getTypedKeys(theme.colors)
export type ColorDefaults = typeof colorOptions[number]

export const fontSizeOptions = getTypedKeys(theme.fonts.size)
export type FontSizeDefaults = typeof fontSizeOptions[number]

export const fontWeightOptions = getTypedKeys(theme.fonts.weigth)
export type FontWeightDefaults = typeof fontWeightOptions[number]

export const sizeOptions = getTypedKeys(theme.sizes)
export type SizeDefaults = typeof sizeOptions[number]

export type AlignItems =
	| 'flex-start'
	| 'center'
	| 'flex-end'
	| 'baseline'
	| 'stretch'

export type JustifyContent =
	| 'flex-start'
	| 'center'
	| 'flex-end'
	| 'space-between'
	| 'space-around'
	| 'space-evenly'
	| 'stretch'

export type FlexDirections = 'column' | 'row' | 'column-reverse' | 'row-reverse'

export type Align = 'left' | 'center' | 'right'

export type ThemeWithProps<OtherProps = Record<string, never>> = OtherProps & {
	theme: ThemeDefault
}
