import { Box, Text, Center } from "@chakra-ui/react";
export default function Custom500() {
	return (
		<Box mt={20} bg="#f3f9fa">
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
