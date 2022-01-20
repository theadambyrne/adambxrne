import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

//chakra components
import {
	Box,
	Container,
	Flex,
	Spacer,
	Text,
	Center,
	Link,
} from "@chakra-ui/react";

//images
import typescript from "../public/typescript.png";
import react from "../public/react.png";
import javascript from "../public/js.svg";
import svelte from "../public/svelte.png";

//section styling
export const webDesignStyles = {
	borderRadius: "10px",
	border: "2px solid #F92672",
	margin: 10,
	padding: 10,
};

export const devOpsStyles = {
	borderRadius: "10px",
	border: "2px solid #FD971F",
	margin: 10,
	padding: 10,
};

export const salesStyles = {
	borderRadius: "10px",
	border: "2px solid #A6E22E",
	margin: 10,
	padding: 10,
};

export const leadershipStyles = {
	borderRadius: "10px",
	border: "2px solid #66D9EF",
	margin: 10,
	padding: 10,
};
export const linkStyles = {
	textDecoration: "none",
};

const Home: NextPage = () => {
	return (
		<Box bg="#2c3e50" color="#fff">
			<Head>
				<title>Adam Byrne, Developer.</title>
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

			{/* Hero */}
			<Container maxW="container.md" mt={10}>
				<motion.div
					initial={{ x: 50 }}
					animate={{ x: [50, 0] }}
					transition={{
						type: "spring",
						duration: 0.5,
					}}
				>
					<Text fontSize="6xl" fontWeight="bold" translate="no">
						Adam B<span style={{ color: "#F92672" }}>y</span>rne
					</Text>
				</motion.div>

				<Text fontSize="2xl" fontWeight="normal">
					Solving problems with code.
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
							<Image src={react} alt="React" height={50} width={80} />
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

				{/* Socials */}
				<Flex mt={5}>
					<Spacer />
					<Link
						href={"https://github.com/theadambyrne"}
						target="_blank"
						style={linkStyles}
					>
						<Text color="#F92672" fontSize="lg">
							&lt;<span style={{ color: "#ffffff !important" }}>GitHub</span>
							/&gt;
						</Text>
					</Link>

					<Spacer />
					<Link
						href={"https://twitter.com/adambxrne"}
						target="_blank"
						style={linkStyles}
					>
						<Text color="#F92672" fontSize="lg">
							&lt;<span style={{ color: "#ffffff !important" }}>Twitter</span>
							/&gt;
						</Text>
					</Link>

					<Spacer />
				</Flex>
			</Container>
			<Box mt={10}>
				<Container maxW="container.md" mt={5}>
					{/* Web Design */}
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							type: "spring",
							duration: 0.7,
						}}
					>
						<Text fontSize="2xl" color="#F92672">
							&lt;web.design /&gt;
						</Text>
						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							<Link
								href={"https://dolphinscovecottage.com"}
								target="_blank"
								style={linkStyles}
							>
								<Box style={webDesignStyles}>
									<Text fontSize="xl" fontWeight="bold">
										Dolphin&apos;s Cove Cottage
									</Text>
									<Text fontSize="xl" fontWeight="normal">
										A gallery site to showcase a gem on the Wild Atlantic Way.
										The site reduced the renters&apos; marketing costs
										significantly
									</Text>
								</Box>
							</Link>
						</motion.div>
						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							<Link
								href={"https://walledgardencottageloughderg.com"}
								target="_blank"
								style={linkStyles}
							>
								<Box style={webDesignStyles}>
									<Text fontSize="xl" fontWeight="bold">
										Walled Garden Cottage, Lough Derg
									</Text>
									<Text fontSize="xl" fontWeight="normal">
										Another site to advertise a holiday cottage on Lough Derg.
										The site gave the cottage a real online presence.
									</Text>
								</Box>
							</Link>
						</motion.div>
					</motion.div>

					{/* Dev Ops */}
					<motion.div
						initial={{ rotate: 45, scale: 0 }}
						animate={{ rotate: [0, 10, -10, 0], scale: 1 }}
						transition={{
							type: "spring",
							duration: 0.3,
							delay: 1,
						}}
					>
						<Text fontSize="2xl" color="#FD971F" mt={5}>
							&lt;dev.ops /&gt;
						</Text>
						<motion.div
							whileHover={{ rotate: [0, 10, -10, 0] }}
							whileTap={{ scale: 0.9 }}
						>
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
					</motion.div>

					{/* Sales */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							type: "spring",
							duration: 1,
							delay: 1.3,
						}}
					>
						<Text fontSize="2xl" color="#A6E22E" mt={5}>
							&lt;sales /&gt;
						</Text>
						<motion.div
							whileHover={{ opacity: [1, 0, 1] }}
							whileTap={{ scale: 0.9 }}
						>
							<Box style={salesStyles}>
								<Text fontSize="xl" fontWeight="bold">
									...
								</Text>
								<Text fontSize="xl" fontWeight="normal">
									...
								</Text>
							</Box>
						</motion.div>
					</motion.div>

					{/* Leadership */}
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							type: "spring",
							duration: 1,
							delay: 1.6,
						}}
					>
						<Text fontSize="2xl" color="#66D9EF" mt={5}>
							&lt;leadership /&gt;
						</Text>
						<motion.div whileHover={{ rotate: 10 }} whileTap={{ scale: 0.9 }}>
							<Link
								href={"https://player.vimeo.com/video/120291728?autoplay=1"}
								target="_blank"
								style={linkStyles}
							>
								<Box style={leadershipStyles}>
									<Text fontSize="xl" fontWeight="bold">
										TV Series on Cúla4
									</Text>
									<Text fontSize="xl" fontWeight="normal">
										I wrote and presented a six episode series on coding through
										Irish that was aired weekly on TG4 during the beginning of
										2015.
									</Text>
								</Box>
							</Link>
						</motion.div>
						<motion.div whileHover={{ rotate: -10 }} whileTap={{ scale: 0.9 }}>
							<Box style={leadershipStyles}>
								<Text fontSize="xl" fontWeight="bold">
									Instructor @ Dingle Sailing Club
								</Text>
								<Text fontSize="xl" fontWeight="normal">
									I teach kids and adults how to sail from zero to hero on
									dinghies in English and Irish.
								</Text>
							</Box>
						</motion.div>
						<motion.div whileHover={{ rotate: 10 }} whileTap={{ scale: 0.9 }}>
							<Box style={leadershipStyles}>
								<Text fontSize="xl" fontWeight="bold">
									Mentor @ Dingle Coderdojo
								</Text>
								<Text fontSize="xl" fontWeight="normal">
									I mentor kids of all ages through English and Irish at Dingle
									Coderdojo. Teaching is the best way to learn.
								</Text>
							</Box>
						</motion.div>
						<motion.div whileHover={{ rotate: -10 }} whileTap={{ scale: 0.9 }}>
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
