import Image from "next/image";
import { motion } from "framer-motion";
import { Box, Container, Flex, Spacer, Text, Link } from "@chakra-ui/react";

import typescript from "../public/typescript.png";
import react from "../public/react.png";
import javascript from "../public/js.svg";
import svelte from "../public/svelte.png";
import awsImg from "../public/aws.png";

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

			{/* Tools */}
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
				<Spacer />
				<motion.div
					animate={{ rotate: 360 }}
					transition={{
						type: "spring",
						delay: 2,
						duration: 1,
					}}
				>
					<Box>
						<Image src={awsImg} alt="AWS" height={50} width={50} />
					</Box>
				</motion.div>
			</Flex>

			{/* Socials */}

			<Flex mt={5}>
				<Spacer />
				<motion.div
					whileHover={{ rotate: 180 }}
					transition={{
						type: "spring",
						duration: 0.5,
					}}
				>
					<Link
						href={"https://github.com/theadambyrne"}
						target="_blank"
						style={{ textDecoration: "none" }}
					>
						<Text color="#F92672" fontSize="lg">
							&lt;<span style={{ color: "#ffffff !important" }}>GitHub</span>
							/&gt;
						</Text>
					</Link>
				</motion.div>

				<Spacer />
				<motion.div
					whileHover={{ rotate: -180 }}
					transition={{
						type: "spring",
						duration: 0.5,
					}}
				>
					<Link
						href={"https://twitter.com/adambxrne"}
						target="_blank"
						style={{ textDecoration: "none" }}
					>
						<Text color="#F92672" fontSize="lg">
							&lt;<span style={{ color: "#ffffff !important" }}>Twitter</span>
							/&gt;
						</Text>
					</Link>
				</motion.div>
				<Spacer />
				<motion.div
					whileHover={{ rotate: 180 }}
					transition={{
						type: "spring",
						duration: 0.5,
					}}
				>
					<Link
						href={"https://stackoverflow.com/users/13777286/adam-byrne"}
						target="_blank"
						style={{ textDecoration: "none" }}
					>
						<Text color="#F92672" fontSize="lg">
							&lt;
							<span style={{ color: "#ffffff !important" }}>StackOverflow</span>
							/&gt;
						</Text>
					</Link>
				</motion.div>
				<Spacer />
			</Flex>
		</Container>
	);
};

export default Hero;
