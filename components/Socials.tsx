import { motion } from "framer-motion";
import { Box, Flex, Spacer, Text, Link } from "@chakra-ui/react";

const Socials = () => {
	return (
		<Box color="white">
			<Flex mt={5}>
				<Spacer />
				<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
					<Link
						href={"https://github.com/theadambyrne"}
						target="_blank"
						style={{ textDecoration: "none", cursor: "pointer" }}
						rel="noreferrer"
						passHref
					>
						<Text color="#F92672" fontSize="xl">
							&lt;
							<span
								style={{
									color: "#fff !important",
									fontWeight: "normal !important",
								}}
							>
								GitHub
							</span>
							/&gt;
						</Text>
					</Link>
				</motion.div>

				<Spacer />
				<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
					<Link
						href={"https://twitter.com/adambxrne"}
						target="_blank"
						style={{ textDecoration: "none", cursor: "pointer" }}
						rel="noreferrer"
						passHref
					>
						<Text color="#49f626" fontSize="xl">
							&lt;
							<span
								style={{
									color: "#fff !important",
									fontWeight: "normal !important",
								}}
							>
								Twitter
							</span>
							/&gt;
						</Text>
					</Link>
				</motion.div>
				<Spacer />
			</Flex>
			<Flex mt={3}>
				<Spacer />
				<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
					<Link
						href={"https://stackoverflow.com/users/13777286/adam-byrne"}
						target="_blank"
						style={{ textDecoration: "none", cursor: "pointer" }}
						rel="noreferrer"
						passHref
					>
						<Text color="#66D9EF" fontSize="xl">
							&lt;
							<span
								style={{
									color: "#fff !important",
									fontWeight: "normal !important",
								}}
							>
								StackOverflow
							</span>
							/&gt;
						</Text>
					</Link>
				</motion.div>
				<Spacer />
			</Flex>
			<Flex mt={3}>
				<Spacer />
				<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
					<Link
						href={"mailto:adamrbyrne@gmail.com"}
						target="_blank"
						style={{ textDecoration: "none", cursor: "pointer" }}
						rel="noreferrer"
						passHref
					>
						<Text fontSize="xl">✉️ adamrbyrne@gmail.com</Text>
					</Link>
				</motion.div>
				<Spacer />
				<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
					<Link
						href={"http://adambyrne.net/2022 Adam Byrne CV.pdf"}
						target="_blank"
						style={{ textDecoration: "none", cursor: "pointer" }}
						rel="noreferrer"
						passHref
					>
						<Text fontSize="xl">📜 CV</Text>
					</Link>
				</motion.div>
				<Spacer />
			</Flex>
		</Box>
	);
};

export default Socials;
