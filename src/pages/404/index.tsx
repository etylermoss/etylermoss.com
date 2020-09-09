/** @jsx jsx */
/* 3rd party imports */
import { FunctionComponent } from 'react';
import { jsx } from 'theme-ui';

/* 1st party imports */
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Styles from '@/pages/404/styles';

const Page: FunctionComponent = () => (
	<Layout>
		<SEO title="404: Not found" />
		<div sx={Styles.container}>
			<h1>404: NOT FOUND</h1>
			<p>You just hit a route that doesn&#39;t exist... I'm sorry :(</p>
		</div>
	</Layout>
);

export default Page;
