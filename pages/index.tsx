import type { NextPage } from "next";
import Head from "next/head";

import { Box, Container } from "@chakra-ui/react";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import WebDesign from "../components/WebDev";
import DevOps from "../components/DevOps";
import Leadership from "../components/Leadership";

const Home: NextPage = () => {
	return (
		<Box bg="#2f3640">
			<Head>
				<title>Adam Byrne | Developer Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="canonical" href="https://bxrne.com" />
				<meta name="title" content="Adam Byrne | Developer Portfolio" />
				<meta
					name="description"
					content="👉 Solving problems with code. I am an Irish Developer specialising in Node, React and Python."
				/>
				<meta
					name="keywords"
					content="portfolio,react,typescript,javascript,svelte,django,python,node,git,web development,web design,devops,sales,leadership,ireland"
				/>
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />
				<meta name="author" content="Adam Byrne" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<Hero />

			<Box mt={15}>
				<Container maxW="container.md">
					<WebDesign />
					<DevOps />
					<Leadership />
				</Container>
			</Box>
			<Footer />
		</Box>
	);
};

export default Home;
