import type { NextPage } from "next";
import Head from "next/head";

//chakra components
import { Box, Container } from "@chakra-ui/react";

// custom components
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import WebDesign from "../components/WebDesign";
import DevOps from "../components/DevOps";
import Leadership from "../components/Leadership";

const Home: NextPage = () => {
	return (
		<Box bg="#2c3e50" color="#fff">
			<Head>
				<title>portfolio@adambxrne</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="title" content="Adam Byrne - Developer Portfolio" />
				<meta name="description" content="Adam Byrne - Developer Portfolio" />
				<meta
					name="keywords"
					content="portfolio,react,typescript,javascript,svelte,web development,web design,devops,sales,leadership,ireland"
				/>
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />
				<meta name="author" content="Adam Byrne" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<Hero />

			<Box mt={10}>
				<Container maxW="container.md" mt={5}>
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
