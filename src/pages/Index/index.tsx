/* 3rd party imports */
import React, { FunctionComponent } from 'react';

/* 1st party imports */
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Line from '@/components/Line';

const Page: FunctionComponent = () => (
	<Layout>
		<SEO title="Home" />
		<main>
				<h4>&lt;home&gt;</h4>
				<Line/>
				<p>
					I&apos;m a 19 year old student and programmer. I study Computer Science at the University
					of Nottingham (2020 - 2024). Outside of education I tinker with electronics, programming,
					photoshop / graphic design, and photography. For all my photography I use a Panasonic
					DMC-G7, with my 14-42mm or 45-150mm lenses, as well as using a 10mm ext. tube for macro.
					Previously I attended 6ᵗʰ Form at Crossley Heath Grammar School in Halifax, West Yorkshire.
				</p>
				<p>
					This website is still a work in progress, you can see the source code on my Github page,
					along with many other projects. Built using Gatsby and TypeScript.
				</p>
		</main>
	</Layout>
);

export default Page;
