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
					I&apos;m an 18 year old student, currently attending Crossley Heath 6ᵗʰ Form where I study
					Computer Science, Photography, Psychology, and English Literature. Outside of school I
					enjoy tinkering with electronics, programming, experimenting with Photoshop &#38; image
					manipulation, as well as shooting stills / photography. I shoot all my photos on a
					Panasonic DMC-G7 w/ 14-42mm lens &#38; 10mm ext. tube for macro shots.
				</p>
				<p>
					Ut gravida sem ac scelerisque varius. Mauris convallis, justo et faucibus hendrerit, arcu
					turpis viverra ipsum, vitae vulputate velit turpis quis nisl. Maecenas nisl sapien,
					volutpat at scelerisque ac, convallis et nulla. Praesent venenatis nulla eget eros
					placerat, quis mollis est tempus. Proin dignissim ex interdum orci blandit, sed
					sollicitudin velit iaculis.
				</p>
				<p>
					Curabitur blandit dictum nulla, eget facilisis nisl viverra at. Maecenas neque diam,
					imperdiet non libero vel, gravida posuere massa. Integer auctor, felis sed feugiat
					ultricies, sem odio luctus purus, in lobortis dolor leo at lorem. Aenean feugiat tempor
					vehicula.
				</p>
		</main>
	</Layout>
);

export default Page;
