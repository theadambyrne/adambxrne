import { motion } from "framer-motion";
import { Text, Box, Link } from "@chakra-ui/react";

const styles = {
	borderRadius: "10px",
	border: "2px solid #FD971F",
	margin: 10,
	padding: 10,
};

const DevOps = () => {
	return (
		<section>
			<Text fontSize="2xl" color="#FD971F" mt={5}>
				&lt;dev.ops /&gt;
			</Text>
			<motion.div
				whileHover={{ rotate: [0, 5, -5, 0] }}
				whileTap={{ scale: 0.9 }}
			>
				<Link
					href={"https://todesktop.com"}
					target="_blank"
					style={{ textDecoration: "none" }}
				>
					<Box style={styles}>
						<Text fontSize="xl" fontWeight="bold">
							🚀 Consultant @ ToDesktop
						</Text>
						<Text fontSize="xl" fontWeight="normal">
							I created a tool to save money on AWS Infrastructure costs. It
							analyses files stored in S3 bucket and cross-references them with
							Stripe subscriptions in order to find redundant files and save
							space.
						</Text>
					</Box>
				</Link>
			</motion.div>
		</section>
	);
};

export default DevOps;
