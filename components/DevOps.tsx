import { motion } from "framer-motion";
import { Text, Box, Link } from "@chakra-ui/react";

const styles = {
	borderRadius: "10px",
	border: "2px solid #49f626",
	margin: 10,
	padding: 10,
};

const DevOps = () => {
	return (
		<Box mt={5}>
			<Text fontSize="3xl" color="#49f626" fontWeight="bold">
				$ dev ops
			</Text>
			<motion.div
				whileHover={{ rotate: [0, 5, -5, 0] }}
				whileTap={{ scale: 0.9 }}
			>
				<Link
					href={"https://todesktop.com"}
					target="_blank"
					style={{ textDecoration: "none" }}
					rel="noreferrer"
					passHref
				>
					<Box style={styles}>
						<Text fontSize="xl" fontWeight="bold" color="white">
							🚀 Consultant @ ToDesktop
						</Text>
						<Text fontSize="xl" fontWeight="normal" color="white">
							I created a tool to save money on AWS Infrastructure costs. It
							analyses files stored in S3 bucket and cross-references them with
							Stripe subscriptions in order to find redundant files and save
							space.
						</Text>
					</Box>
				</Link>
			</motion.div>
		</Box>
	);
};

export default DevOps;
