import { FunctionComponent } from 'react'
import { SizeDefaults } from '../../ions'
import { ThumbnailBase } from './Thumbnail.styles'

type ThumbnailProps = {
	source: string
	size?: SizeDefaults
}

export const Thumbnail: FunctionComponent<ThumbnailProps> = ({
	source,
	...props
}) => <ThumbnailBase src={source} {...props} />
