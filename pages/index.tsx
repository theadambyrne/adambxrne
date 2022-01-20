import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Box, Container, Flex, Spacer, Text, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

import typescript from "../public/typescript.png";
import react from "../public/react.png";
import javascript from "../public/js.svg";
import svelte from "../public/svelte.png";

const webDesignStyles = {
	borderRadius: "10px",
	border: "2px solid #F92672",
	margin: 10,
	padding: 10,
};

const devOpsStyles = {
	borderRadius: "10px",
	border: "2px solid #FD971F",
	margin: 10,
	padding: 10,
};

const salesStyles = {
	borderRadius: "10px",
	border: "2px solid #A6E22E",
	margin: 10,
	padding: 10,
};

const leadershipStyles = {
	borderRadius: "10px",
	border: "2px solid #66D9EF",
	margin: 10,
	padding: 10,
};

const Home: NextPage = () => {
	return (
		<Box bg="#2c3e50" color="#fff">
			<Head>
				<title>Adam Byrne. Developer</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="title" content="Adam Byrne - Developer Portfolio" />
				<meta name="description" content="Adam Byrne, 19. Web Developer." />
				<meta
					name="keywords"
					content="portfolio,react,typescript,javascript,svelte,web development,web design,devops,sales,leadership"
				/>
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />
				<meta name="author" content="Adam Byrne" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Container maxW="container.md" mt={10}>
				<motion.div
					animate={{ x: [50, 0] }}
					transition={{
						type: "spring",
						duration: 0.5,
					}}
					whileHover={{ x: 50 }}
				>
					<Text fontSize="6xl" fontWeight="bold" translate="no">
						Adam B<span style={{ color: "#F92672" }}>x</span>rne
					</Text>
				</motion.div>

				<Text fontSize="2xl" fontWeight="normal">
					Solving problems with code.
				</Text>

				<Flex mt={10}>
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{
							hidden: {
								scale: 0.8,
								opacity: 0,
							},
							visible: {
								scale: 1,
								opacity: 1,
								transition: {
									delay: 0.7,
								},
							},
						}}
					>
						<Box>
							<Image src={typescript} alt="Typescript" height={50} width={50} />
						</Box>
					</motion.div>
					<Spacer />
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{
							hidden: {
								scale: 0,
								opacity: 0,
							},
							visible: {
								scale: 1,
								opacity: 1,
								transition: {
									delay: 0.9,
								},
							},
						}}
					>
						<Box>
							<Image src={javascript} alt="Javascript" height={50} width={50} />
						</Box>
					</motion.div>

					<Spacer />
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{
							hidden: {
								scale: 0,
								opacity: 0,
							},
							visible: {
								scale: 1,
								opacity: 1,
								transition: {
									delay: 1.1,
								},
							},
						}}
					>
						<Box>
							<Image src={react} alt="React" height={50} width={80} />
						</Box>
					</motion.div>

					<Spacer />
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{
							hidden: {
								scale: 0,
								opacity: 0,
							},
							visible: {
								scale: 1,
								opacity: 1,
								transition: {
									delay: 1.3,
								},
							},
						}}
					>
						<Box>
							<Image src={svelte} alt="Svelte" height={50} width={50} />
						</Box>
					</motion.div>
				</Flex>
			</Container>
			<Box mt={10}>
				<Container maxW="container.md" mt={5}>
					<Text fontSize="2xl" color="#F92672">
						&lt;web.design /&gt;
					</Text>
					<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						<Box
							style={webDesignStyles}
							onClick={() => {
								window.open("https://dolphinscovecottage.com", "_blank");
							}}
						>
							<Text fontSize="xl" fontWeight="bold">
								Dolphin &apos;s Cove Cottage
							</Text>
							<Text fontSize="xl" fontWeight="normal">
								A gallery site to showcase a gem on the Wild Atlantic Way. The
								site reduced the renters &apos; marketing costs significantly
							</Text>
						</Box>
					</motion.div>
					<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						<Box
							style={webDesignStyles}
							onClick={() => {
								window.open(
									"https://walledgardencottageloughderg.com",
									"_blank"
								);
							}}
						>
							<Text fontSize="xl" fontWeight="bold">
								Walled Garden Cottage, Lough Derg
							</Text>
							<Text fontSize="xl" fontWeight="normal">
								Another site to advertise a holiday cottage on Lough Derg. The
								site gave the cottage a real online presence.
							</Text>
						</Box>
					</motion.div>
				</Container>
				<Container maxW="container.md" mt={5}>
					<Text fontSize="2xl" color="#FD971F">
						&lt;dev.ops /&gt;
					</Text>
					<motion.div whileHover={{ scale: 1.1 }}>
						<Box style={devOpsStyles}>
							<Text fontSize="xl" fontWeight="bold">
								Consultant @ ToDesktop
							</Text>
							<Text fontSize="xl" fontWeight="normal">
								I designed and developed an algorithm to remove data that was
								not linked to an active subscription and to monitor
								subscriptions to improve communication with users.
							</Text>
						</Box>
					</motion.div>
				</Container>
				<Container maxW="container.md" mt={5}>
					<Text fontSize="2xl" color="#A6E22E">
						&lt;sales /&gt;
					</Text>
					<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						<Box style={salesStyles}>
							<Text fontSize="xl" fontWeight="bold">
								...
							</Text>
							<Text fontSize="xl" fontWeight="normal">
								...
							</Text>
						</Box>
					</motion.div>
				</Container>
				<Container maxW="container.md" mt={5}>
					<Text fontSize="2xl" color="#66D9EF">
						&lt;leadership /&gt;
					</Text>
					<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						<Box style={leadershipStyles}>
							<Text fontSize="xl" fontWeight="bold">
								...
							</Text>
							<Text fontSize="xl" fontWeight="normal">
								...
							</Text>
						</Box>
					</motion.div>
					<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						<Box style={leadershipStyles}>
							<Text fontSize="xl" fontWeight="bold">
								PRO @ Dingle Sailing Club
							</Text>
							<Text fontSize="xl" fontWeight="normal">
								2021-2022 I served the role of Public Relations Officer on the
								Committee. Handling all social media and marketing activities.
							</Text>
						</Box>
					</motion.div>
				</Container>
			</Box>
			<Center m={10}>
				<Text fontSize="md" color="#bdc3c7">
					&copy; Adam Byrne 2022
				</Text>
			</Center>
		</Box>
	);
};

export default Home;
