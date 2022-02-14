import Image from "next/image";
import { motion } from "framer-motion";
import { Box, Flex, Spacer } from "@chakra-ui/react";

import typescript from "../public/typescript.png";
import react from "../public/react.png";
import javascript from "../public/js.svg";
import svelte from "../public/svelte.png";
import node from "../public/node.png";
import git from "../public/git.png";

const Tools = () => {
	return (
		<Box>
			<Flex mt={10}>
				<motion.div
					animate={{ rotate: 360 }}
					transition={{
						type: "spring",
						delay: 1,
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
						delay: 1,
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
						<Image src={react} alt="React" width={60} height={50} />
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
						<Image src={node} alt="Node" width={50} height={55} />
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
						<Image src={git} alt="Git" height={50} width={50} />
					</Box>
				</motion.div>
			</Flex>
		</Box>
	);
};

export default Tools;
