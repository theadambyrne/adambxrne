import { motion } from "framer-motion";
import { Text, Box } from "@chakra-ui/react";

const styles = {
	borderRadius: "10px",
	border: "2px solid #FD971F",
	margin: 10,
	padding: 10,
};

const DevOps = () => {
	return (
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
			</motion.div>

			<motion.div
				whileHover={{ rotate: [0, 10, -10, 0] }}
				whileTap={{ scale: 0.9 }}
			>
				<Box style={styles}>
					<Text fontSize="xl" fontWeight="bold">
						☁️ AWS Certified Cloud Practitioner
					</Text>
					<Text fontSize="xl" fontWeight="normal">
						Only a few days away from sitting the exam! 📈
					</Text>
				</Box>
			</motion.div>
		</motion.div>
	);
};

export default DevOps;
