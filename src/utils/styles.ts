import {
	css,
	FlattenSimpleInterpolation,
	InterpolationValue
} from 'styled-components'
import { LayoutDefaults, ThemeDefault } from '../components'

export function breakpointQuery(
	theme: ThemeDefault,
	breakpoint?: LayoutDefaults
): string {
	return `@media (max-width: ${theme.layout[breakpoint || 'desktop']}px)`
}

export function nullableCssProperty(
	property: string,
	value: InterpolationValue
): FlattenSimpleInterpolation | undefined {
	if (value === undefined || value === null) {
		return undefined
	}

	return css`
		${property}: ${value};
	`
}
