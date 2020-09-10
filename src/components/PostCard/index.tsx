/** @jsx jsx */
/* 3rd party imports */
import { FunctionComponent } from 'react';
import { jsx, Flex } from 'theme-ui';
import { Link } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

/* 1st party imports */
import Styles from '@/components/PostCard/styles';

interface Props {
	info: {
		slug: string;
		title: string;
		excerpt: string;
		date: Date;
	}
	pathPrefix: string;
	fluid: FluidObject;
	forceDarkColorMode?: boolean;
}

const Component: FunctionComponent<Props> = ({ info, pathPrefix, fluid, forceDarkColorMode = false, ...intrinsic }) => (
	<div sx={{...Styles.container}} {...intrinsic}>
		<Link to={`${pathPrefix}${info.slug}`}>
			<Image fluid={fluid} sx={Styles.image}/>
			<div sx={Styles.infoContainer(forceDarkColorMode)}>
				<Flex sx={Styles.headerContainer}>
					<h3 sx={Styles.title}>{info.title}</h3>
					<time sx={Styles.date} dateTime={info.date.toISOString()}>{info.date.toLocaleDateString()}</time>
				</Flex>
				<p sx={Styles.excerpt}>{info.excerpt}</p>
			</div>
		</Link>
	</div>
);

export default Component;