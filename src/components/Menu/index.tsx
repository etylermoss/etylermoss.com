/** @jsx jsx */
/* 3rd party imports */
import { FunctionComponent } from 'react';
import { jsx } from 'theme-ui';
import { Flex } from '@theme-ui/components';

/* 1st party imports */
import Styles from '@/components/Menu/styles';
import RecentPosts from '@/components/Menu/RecentPosts';

const Component: FunctionComponent = () => (
	<Flex sx={Styles.container}>
		<h3 sx={Styles.recentPostsHeader}>Recent Posts:</h3>
		<RecentPosts/>
		<footer sx={Styles.footer}>
			<a href="https://github.com/etylermoss/etylermoss.com" sx={Styles.githubLink}>
				View the project on Github
				<p sx={Styles.githubLinkRepoText}>etylermoss/etylermoss.com</p>
			</a>
		</footer>
	</Flex>
)

export default Component;
