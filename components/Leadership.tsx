import { motion } from "framer-motion";
import { Text, Box, Link } from "@chakra-ui/react";

const styles = {
	borderRadius: "10px",
	border: "2px solid #66D9EF",
	margin: 10,
	padding: 10,
};

const Leadership = () => {
	return (
		<Box>
			<Text fontSize="2xl" color="#66D9EF" mt={5}>
				&lt;leadership /&gt;
			</Text>
			<motion.div whileHover={{ rotate: 10 }} whileTap={{ scale: 0.9 }}>
				<Link
					href={"https://player.vimeo.com/video/120291728?autoplay=1"}
					target="_blank"
					style={{ textDecoration: "none" }}
				>
					<Box style={styles}>
						<Text fontSize="xl" fontWeight="bold">
							📺 TV Series on Cúla4
						</Text>
						<Text fontSize="xl" fontWeight="normal">
							I wrote and presented a 6 episode series on coding through Irish
							that was aired weekly on Cúla4 during the beginning of 2015.
						</Text>
					</Box>
				</Link>
			</motion.div>
			<motion.div whileHover={{ rotate: -10 }} whileTap={{ scale: 0.9 }}>
				<Link
					href={"https://dinglesailingclub.com/"}
					target="_blank"
					style={{ textDecoration: "none" }}
				>
					<Box style={styles}>
						<Text fontSize="xl" fontWeight="bold">
							⛵️ Instructor @ Dingle Sailing Club
						</Text>
						<Text fontSize="xl" fontWeight="normal">
							I teach kids and adults how to sail from zero to hero on dinghies
							in English and Irish.
						</Text>
					</Box>
				</Link>
			</motion.div>
			<motion.div whileHover={{ rotate: 10 }} whileTap={{ scale: 0.9 }}>
				<Link
					href={"https://dingledojo.com"}
					target="_blank"
					style={{ textDecoration: "none" }}
				>
					<Box style={styles}>
						<Text fontSize="xl" fontWeight="bold">
							📟 Mentor @ Dingle Coderdojo
						</Text>
						<Text fontSize="xl" fontWeight="normal">
							I mentor kids of all ages through English and Irish at Dingle
							Coderdojo. Teaching is the best way to learn.
						</Text>
					</Box>
				</Link>
			</motion.div>
			<motion.div whileHover={{ rotate: -10 }} whileTap={{ scale: 0.9 }}>
				<Link
					href={"https://dinglesailingclub.com/"}
					target="_blank"
					style={{ textDecoration: "none" }}
				>
					<Box style={styles}>
						<Text fontSize="xl" fontWeight="bold">
							💭 PRO @ Dingle Sailing Club
						</Text>
						<Text fontSize="xl" fontWeight="normal">
							2021-2022 I served the role of Public Relations Officer on the
							Committee. Handling all social media and marketing activities.
						</Text>
					</Box>
				</Link>
			</motion.div>
		</Box>
	);
};

export default Leadership;
