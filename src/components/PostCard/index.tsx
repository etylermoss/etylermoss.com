/** @jsx jsx */
/* 3rd party imports */
import { FunctionComponent } from 'react';
import { jsx, SxStyleProp } from 'theme-ui';
import { Link } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

/* 1st party imports */
import Styles from '@/components/PostCard/styles';

interface Props {
	info: {
		slug: string;
		title: string;
		date: Date;
	}
	pathPrefix: string;
	fluid: FluidObject;
	forceDarkColorMode?: boolean;
	imageSx?: SxStyleProp;
	infoSx?: SxStyleProp;
}

const Component: FunctionComponent<Props> = ({ info, pathPrefix, fluid, forceDarkColorMode = false, imageSx, infoSx, ...intrinsic }) => (
	<div sx={{...Styles.container}} {...intrinsic}>
		<Link to={`${pathPrefix}${info.slug}`}>
			<Image fluid={fluid} sx={{...Styles.image, ...imageSx}}/>
			<div sx={{...Styles.infoContainer, ...infoSx}}>
				<h3 sx={Styles.title}>{info.title}</h3>
				<time sx={Styles.date} dateTime={info.date.toISOString()}>{info.date.toLocaleDateString()}</time>
			</div>
		</Link>
	</div>
);

export default Component;