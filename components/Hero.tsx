import { Box, Container, Text } from "@chakra-ui/react";

import Socials from "./Socials";
import Tools from "./Tools";

const Hero = () => {
	return (
		<Container maxW="container.md" mt={10} role="banner">
			<Text fontSize="6xl" fontWeight="bold" translate="no" role="heading">
				Adam B<span style={{ color: "#F92672" }}>y</span>
				rne
			</Text>

			<Text fontSize="2xl" fontWeight="normal">
				👉 Solving problems with code.
			</Text>

			<Tools />

			<Socials />
		</Container>
	);
};

export default Hero;
