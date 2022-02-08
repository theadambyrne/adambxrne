import { motion } from "framer-motion";
import { Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import transcript from "../public/freshman-transcript-learnweb3.png";

const styles = {
	borderRadius: "10px",
	border: "2px solid #d35400",
	margin: 10,
	padding: 10,
};

const certStyles = {
	borderRadius: "10px",
	margin: 10,
	padding: 10,
};

const Web3 = () => {
	return (
		<Box mt={10}>
			<Text fontSize="3xl" color="#d35400" fontWeight="bold">
				Web3.sol
			</Text>
			<motion.div whileHover={{ rotate: 2 }} whileTap={{ scale: 0.9 }}>
				<Box style={styles}>
					<Text fontSize="xl" fontWeight="bold" color="white">
						LearnWeb3 DAO Freshman Track
					</Text>
					<Box style={certStyles}>
						<Image
							src={transcript}
							alt={"Freshman track transcript from LearnWeb3"}
						/>
					</Box>
				</Box>
			</motion.div>
		</Box>
	);
};

export default Web3;
