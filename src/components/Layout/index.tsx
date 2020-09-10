/** @jsx jsx */
/* 3rd party imports */
import { FunctionComponent, useState } from 'react';
import { jsx } from 'theme-ui';
import { Flex } from '@theme-ui/components';
import Sidebar from 'react-sidebar';

/* 1st party imports */
import Header from '@/components/Header';
//import Footer from '@/components/Footer';
import Styles from '@/components/Layout/styles';
import Menu from '@/components/Menu';

const Component: FunctionComponent = ({ children }) => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<Flex sx={Styles.rootContainer}>
			<Sidebar
				sidebar={<Menu/>}
				open={drawerOpen}
				onSetOpen={setDrawerOpen}
				styles={{sidebar: {position: 'fixed'}}}
			>
				<div></div>
			</Sidebar>
			<div sx={Styles.mainContainer}>
				<Header openMenu={() => setDrawerOpen(!drawerOpen)}/>
				<div sx={Styles.contentContainer}>
					{children}
				</div>
				{/* <Footer/> */}
			</div>
		</Flex>
	)
};

export default Component;
