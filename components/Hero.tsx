import { motion } from "framer-motion";
import { Container, Text, Box } from "@chakra-ui/react";

import Socials from "./Socials";
import Tools from "./Tools";

const Hero = () => {
	return (
		<Container maxW="container.md">
			<Box pt={10} color="white">
				<motion.div
					animate={{ x: [500, 0] }}
					transition={{
						type: "spring",
						delay: 0,
						duration: 1,
					}}
				>
					<Text fontSize="5xl" fontWeight="bold" translate="no">
						Adam B<span style={{ color: "#F92672" }}>y</span>
						rne
					</Text>
				</motion.div>
				<motion.div
					animate={{ x: [-500, 0] }}
					transition={{
						type: "spring",
						delay: 0,
						duration: 1,
					}}
				>
					<Text fontSize="2xl" fontWeight="normal" mt={3}>
						👉 Solving problems with code.
					</Text>
				</motion.div>
			</Box>
			<Box mt={10}>
				<Tools />
			</Box>

			<Box mt={5}>
				<Socials />
			</Box>
		</Container>
	);
};

export default Hero;
