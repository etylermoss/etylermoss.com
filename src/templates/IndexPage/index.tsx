/** @jsx jsx */
/* 3rd party imports */
import { FunctionComponent } from 'react';
import { jsx, useColorMode } from 'theme-ui';
import { graphql, PageProps } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

/* 1st party imports */
import useSiteMetadata from '@/hooks/useSiteMetadata';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Portrait from '@/components/Portrait';
import PostCard from '@/components/PostCard';
import Styles from '@/templates/IndexPage/styles';

// TODO: turn main content into a component, make Portrait like FeaturedImage

interface Query {
	featuredImage: {
		childImageSharp: {
			fluid: FluidObject;
		}
	}
	genericImage: {
		childImageSharp: {
			fluid: FluidObject;
		}
	}
	recentPosts: {
		edges: {
			node: {
				frontmatter: {
					slug: string;
					title: string;
					date: string;
					featuredImage: string | undefined;
				}
			}
		}[]
	}
	recentPostsImages: {
		edges: {
			node: {
				relativePath: string;
				childImageSharp: {
					fluid: FluidObject;
				}
			}
		}[]
	}
}

interface Context {
	title: string;
	slug: string;
	date: string;
	featuredImage: string;
	excerpt: string;
}

interface RecentPost {
	slug: string;
	title: string;
	date: string;
	childImageSharp: {
		fluid: FluidObject;
	}
}

// TODO: Check below works when posts don't define featuredImage

const transformRecentPosts = (
	recentPosts: Query['recentPosts'],
	recentPostsImages: Query['recentPostsImages'],
	genericImage: { fluid: FluidObject },
): RecentPost[] => {
	return recentPosts.edges.reduce<RecentPost[]>((acc, postEdge) => {
		const { slug, title, date, featuredImage = undefined } = postEdge.node.frontmatter;
		const postImage = recentPostsImages.edges.find(imageEdge => {
			return imageEdge.node.relativePath === featuredImage;
		});
		const recentPost: RecentPost = {
			slug,
			title,
			date,
			childImageSharp: postImage !== undefined ? postImage.node.childImageSharp : genericImage,
		};
		acc.push(recentPost);
		return acc;
	}, []);
};

const Template: FunctionComponent<PageProps<Query, Context>> = ({ data, pageContext }) => {
	const { title } = useSiteMetadata();
	const [colorMode] = useColorMode<'default' | 'dark'>();
	const recentPosts = transformRecentPosts(
		data.recentPosts,
		data.recentPostsImages,
		data.genericImage.childImageSharp
	);

	return (
		<Layout>
			<SEO title="Home"/>
			<main>
				<Portrait sx={colorMode === 'dark' ? Styles.portraitDark : Styles.portrait}/>
				<p sx={Styles.greetings}>Hello, Hallo, Hola</p>
				<h1 sx={Styles.title}>{title}.</h1>
				<p>
					I&apos;m a 19 year old student and programmer. I study Computer Science at the University
					of Nottingham (2020 - 2024). Outside of education I tinker with electronics, programming,
					graphic design, and photography.
				</p>
				<div sx={Styles.clearFloat}/>
				<h2 sx={Styles.featuredPostHeader}>Featured Post</h2>
				<PostCard
					fluid={data.featuredImage
						? data.featuredImage.childImageSharp.fluid
						: data.genericImage.childImageSharp.fluid
					}
					pathPrefix='/posts/'
					info={{...pageContext, date: new Date(pageContext.date)}}
					sx={Styles.featuredPost}
					forceDarkColorMode={true}
				/>
				{/*recentPosts.map(post => {
					return (
						<div key={post.slug}>
							<h3>{post.title}</h3>
							<Image fluid={post.childImageSharp.fluid}/>
						</div>
					)
				})*/}
			</main>
		</Layout>
	);
};

export default Template;

export const pageQuery = graphql`
	query($featuredImage: String, $recentPostsFeaturedImages: [String!]!) {
		featuredImage: file(relativePath: { eq: $featuredImage } ) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		genericImage: file(relativePath: { eq: "generic-coding.jpg" } ) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		recentPosts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] } limit: 6 ) {
			edges {
				node {
					frontmatter {
						slug
						title
						date
						featuredImage
					}
				}
			}
		}
		recentPostsImages: allFile(filter: { relativePath: { in: $recentPostsFeaturedImages } } ) {
			edges {
				node {
					relativePath
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`
