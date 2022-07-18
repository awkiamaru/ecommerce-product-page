import {
	Flex,
	IconWrapper,
	SpacingHorizontal,
	SpacingVertical,
	Text
} from '../../atoms'
import { BsTrash } from 'react-icons/bs'
import ImageProductThumbnail from '../../../assets/img/image-product-1-thumbnail.jpg'
import { Thumbnail } from '../../atoms/Thumbnail/Thumbnail'
export const Item = () => (
	<Flex alignItems="center" justifyContent="flex-start">
		<Thumbnail source={ImageProductThumbnail} />
		<SpacingHorizontal />
		<Flex direction="column">
			<Text color="grayishBlue">Fall Limited Edition Sneakers</Text>
			<SpacingVertical size="xSmall" />
			<Text>$125.00 x 3 $375.00</Text>
		</Flex>
		<SpacingHorizontal />
		<IconWrapper size="regular" color="grayishBlue">
			<BsTrash />
		</IconWrapper>
	</Flex>
)
