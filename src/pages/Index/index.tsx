/** @jsx jsx */
/* 3rd party imports */
import { FunctionComponent } from 'react';
import { jsx } from 'theme-ui';

/* 1st party imports */
import useSiteMetadata from '@/hooks/useSiteMetadata';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Portrait from '@/components/Portrait';
import Styles from '@/pages/Index/styles';

// TODO: turn main content into a component, make Portrait like FeaturedImage

const Page: FunctionComponent = () => {
	const { title } = useSiteMetadata();

	return (
		<Layout>
			<SEO title="Home"/>
			<main>
				<Portrait sx={Styles.portrait}/>
				<p sx={Styles.greetings}>Hello, Hola, Hallo</p>
				<h1 sx={Styles.title}>{title}.</h1>
				<p>
					I&apos;m a 19 year old student and programmer. I study Computer Science at the University
					of Nottingham (2020 - 2024). Outside of education I tinker with electronics, programming,
					graphic design, and photography.
				</p>
			</main>
		</Layout>
	);
};

export default Page;
