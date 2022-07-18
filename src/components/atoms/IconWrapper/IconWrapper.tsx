import { FunctionComponent } from 'react'
import { IconBase, IconProps } from './IconWrapper.styles'

export const IconWrapper: FunctionComponent<IconProps> = ({
	children,
	...rest
}) => <IconBase {...rest}>{children}</IconBase>
