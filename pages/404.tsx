import { Box, Text, Center } from "@chakra-ui/react";
import Link from "next/link";
export default function Custom404() {
	return (
		<Box mt={20}>
			<Center>
				<Text fontSize="4xl" color="#fff">
					📍 Looks like you&apos;re lost.
				</Text>
			</Center>
			<Center mt={10}>
				<Link href="https://www.bxrne.com" passHref>
					<Text
						fontSize="xl"
						color="#fff"
						style={{
							textDecoration: "none",
							cursor: "pointer",
							borderBottom: "1px dashed #fff",
						}}
					>
						👉 Follow me home!
					</Text>
				</Link>
			</Center>
		</Box>
	);
}
