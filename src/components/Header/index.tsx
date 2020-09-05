/** @jsx jsx */
/* 3rd party imports */
import { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { Button, Flex } from '@theme-ui/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

/* 1st party imports */
import Styles from '@/components/Header/styles';

interface Props {
	siteTitle: string;
	openMenu: () => void;
}

const Component: FunctionComponent<Props> = ({ siteTitle = 'Untitled', openMenu }) => (
	<header sx={Styles.container}>
		<Button variant="menu" onClick={() => openMenu()}><FontAwesomeIcon icon={faBars}/></Button>
		<h1 sx={Styles.title}>
			<Link to="/">
				{siteTitle}
			</Link>
		</h1>
		<Flex sx={Styles.pageLinksContainer}>
			<Link to="/gallery">Gallery</Link> |
			<Link to="/articles">Articles</Link> |
			<Link to="/contact">Contact</Link>
		</Flex>
	</header>
);

export default Component;