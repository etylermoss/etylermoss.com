/* 3rd party imports */
import React, { FunctionComponent, ComponentPropsWithoutRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

interface Query {
	file: {
		childImageSharp: {
			fluid: FluidObject;
		}
	}
}

const Component: FunctionComponent<ComponentPropsWithoutRef<'div'>> = (props) => {
	const { file } = useStaticQuery<Query>(graphql`
		query PortraitPhoto {
			file(relativePath: { eq: "portrait.png" }) {
				childImageSharp {
					fluid(maxWidth: 512) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<div {...props}>
			<Image fluid={file.childImageSharp.fluid}/>
		</div>
	);
}

export default Component;
