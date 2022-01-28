import { Container, Text } from "@chakra-ui/react";

import Socials from "./Socials";
import Tools from "./Tools";

const Hero = () => {
	return (
		<Container maxW="container.md" mt={10}>
			<Text fontSize="6xl" fontWeight="bold" translate="no">
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
