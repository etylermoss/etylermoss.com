/* 3rd party imports */
import React, { FunctionComponent } from 'react';

/* 1st party imports */
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

const Page: FunctionComponent = () => (
	<Layout>
		<SEO title="404: Not found" />
		<h1>404: NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</Layout>
);

export default Page;
