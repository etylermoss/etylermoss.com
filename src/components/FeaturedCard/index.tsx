/** @jsx jsx */
/* 3rd party imports */
import { FunctionComponent } from 'react';
import { jsx, Flex, SxStyleProp } from 'theme-ui';
import { Link } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

/* 1st party imports */
import Styles from '@/components/FeaturedCard/styles';

interface Props {
	info: {
		slug: string;
		title: string;
		excerpt?: string;
		date: Date;
	}
	pathPrefix: string;
	fluid: FluidObject;
	forceDarkColorMode?: boolean;
	imageSx?:  SxStyleProp;
}

const Component: FunctionComponent<Props> = ({ info, pathPrefix, fluid, forceDarkColorMode = false, imageSx, ...intrinsic }) => {
	const path = `${pathPrefix}${info.slug}`;

	return (
		<Flex sx={{...Styles.container}} {...intrinsic}>
			<Link to={path}>
				<Image fluid={fluid} sx={{...Styles.image, ...imageSx}}/>
			</Link>
			<Link to={path} sx={Styles.infoContainer(forceDarkColorMode)}>
				<Flex sx={Styles.headerContainer}>
					<h3 sx={Styles.title}>{info.title}</h3>
					<time sx={Styles.date} dateTime={info.date.toISOString()}>{info.date.toLocaleDateString()}</time>
				</Flex>
				{info.excerpt ? <p sx={Styles.excerpt}>{info.excerpt}</p> : null}
			</Link>
		</Flex>
	);
};

export default Component;