import { FunctionComponent, ReactNode, SyntheticEvent } from 'react'
import { ColorDefaults, SizeDefaults } from '../../ions'
import { IconWrapper } from '../IconWrapper'
import { SpacingHorizontal } from '../Spacing/Spacing.styles'
import { ButtonBase, ButtonBaseProps } from './Button.styles'

type ButtonProps = ButtonBaseProps & {
	icon?: JSX.Element
	iconSize?: SizeDefaults
	iconColor?: ColorDefaults
	children?: ReactNode

	onClick?: (event?: SyntheticEvent) => void
}

export const Button: FunctionComponent<ButtonProps> = ({
	children,
	icon,
	iconColor,
	iconSize,
	onClick,
	...rest
}) => (
	<ButtonBase {...rest} onClick={onClick}>
		{icon && (
			<IconWrapper color={iconColor} size={iconSize}>
				{icon}
			</IconWrapper>
		)}
		{icon && <SpacingHorizontal size="xxSmall" />}
		{children}
	</ButtonBase>
)
