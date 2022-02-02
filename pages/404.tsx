import { Box, Text, Center } from "@chakra-ui/react";
import Link from "next/link";
export default function Custom404() {
	return (
		<Box mt={20} bg="#f3f9fa">
			<Center>
				<Text fontSize="4xl">📍 Looks like you&apos;re lost.</Text>
			</Center>
			<Center mt={10}>
				<Link href="https://www.bxrne.com" passHref>
					<Text
						fontSize="xl"
						style={{
							textDecoration: "none",
							cursor: "pointer",
							borderBottom: "1px dashed #000",
						}}
					>
						👉 Follow me home!
					</Text>
				</Link>
			</Center>
		</Box>
	);
}
