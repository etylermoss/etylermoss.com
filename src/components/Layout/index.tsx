/** @jsx jsx */
/* 3rd party imports */
import { FunctionComponent, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { jsx, ThemeProvider } from 'theme-ui';
import { Flex } from '@theme-ui/components';
import Sidebar from 'react-sidebar';

/* 1st party imports */
import Theme from '@/theme';
import Header from '@/components/Header';
import Styles from '@/components/Layout/styles';
import Menu from '@/components/Menu';

interface Query {
	site: {
		siteMetadata: {
			title: string;
		}
	}
}

const Component: FunctionComponent = ({ children }) => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const data = useStaticQuery<Query>(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<ThemeProvider theme={Theme}>
			<Flex sx={Styles.rootContainer}>
				<Sidebar
					sidebar={<Menu/>}
					open={drawerOpen}
					onSetOpen={setDrawerOpen}
					styles={{sidebar: {position: 'fixed'}}}
				/>
				<div sx={Styles.mainContainer}>
					<Header siteTitle={data.site.siteMetadata.title} openMenu={() => setDrawerOpen(!drawerOpen)}/>
					<div sx={Styles.contentContainer}>
						{children}
					</div>
				</div>
			</Flex>
		</ThemeProvider>
	)
};

export default Component;
