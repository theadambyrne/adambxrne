import { motion } from "framer-motion";
import { Container, Text, Box } from "@chakra-ui/react";

import Socials from "./Socials";
import Tools from "./Tools";

const styles = {
	width: "75px",
	height: "75px",
	borderRadius: "50%",
};

const Hero = () => {
	return (
		<Container maxW="container.md">
			<Box pt={10} color="white">
				<motion.div
					animate={{ scale: [0, 0.75, 0.5, 1] }}
					transition={{
						type: "spring",
						delay: 0,
						duration: 1,
					}}
				>
					<Text fontSize="6xl" fontWeight="bold" translate="no">
						Adam B<span style={{ color: "#F92672" }}>y</span>
						rne
					</Text>
				</motion.div>

				<Text fontSize="2xl" fontWeight="normal">
					👉 Solving problems with code.
				</Text>
			</Box>
			<Tools />

			<Socials />
		</Container>
	);
};

export default Hero;
