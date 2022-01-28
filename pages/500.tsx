import { Box, Text, Center } from "@chakra-ui/react";
export default function Custom500() {
	return (
		<Box bg="#2c3e50" mt={20}>
			<Center>
				<Text fontSize="4xl" color="#fff">
					❌ Oops! Something went wrong.
				</Text>
			</Center>
			<Center mt={10}>
				<Text
					fontSize="xl"
					color="#fff"
					style={{
						textDecoration: "none",
						cursor: "pointer",
					}}
				>
					🏋️ I&apos;m working on it!
				</Text>
			</Center>
		</Box>
	);
}
