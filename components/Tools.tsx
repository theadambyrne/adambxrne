import Image from "next/image";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";

import typescript from "../public/typescript.png";
import react from "../public/react.png";
import javascript from "../public/js.svg";
import svelte from "../public/svelte.png";

const Tools = () => {
	return (
		<Flex mt={10}>
			<motion.div
				animate={{ rotate: 360 }}
				transition={{
					type: "spring",
					duration: 1,
				}}
			>
				<Box>
					<Image src={typescript} alt="Typescript" height={50} width={50} />
				</Box>
			</motion.div>
			<Spacer />
			<motion.div
				animate={{ rotate: 360 }}
				transition={{
					type: "spring",
					delay: 0.5,
					duration: 1,
				}}
			>
				<Box>
					<Image src={javascript} alt="Javascript" height={50} width={50} />
				</Box>
			</motion.div>

			<Spacer />
			<motion.div
				animate={{ rotate: 360 }}
				transition={{
					type: "spring",
					delay: 1,
					duration: 1,
				}}
			>
				<Box>
					<Image src={react} alt="React" width={80} height={55} />
				</Box>
			</motion.div>

			<Spacer />
			<motion.div
				animate={{ rotate: 360 }}
				transition={{
					type: "spring",
					delay: 1.5,
					duration: 1,
				}}
			>
				<Box>
					<Image src={svelte} alt="Svelte" height={50} width={50} />
				</Box>
			</motion.div>
		</Flex>
	);
};

export default Tools;
