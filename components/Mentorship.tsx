import { motion } from "framer-motion";
import { Text, Box, Link } from "@chakra-ui/react";

const styles = {
	borderRadius: "10px",
	border: "2px solid #66D9EF",
	margin: 10,
	padding: 10,
};

const Mentorship = () => {
	return (
		<Box mt={10}>
			<Text fontSize="4xl" color="#66D9EF" fontWeight="bold">
				mentorship
			</Text>
			<motion.div whileHover={{ x: [0, 50] }} whileTap={{ scale: 0.9 }}>
				<Link
					href={"https://player.vimeo.com/video/120291728?autoplay=1"}
					target="_blank"
					style={{ textDecoration: "none" }}
					rel="noreferrer"
					passhref
				>
					<Box style={styles}>
						<Text fontSize="2xl" fontWeight="bold" color="white">
							📺 TV Series on Cúla4
						</Text>
						<Text fontSize="xl" fontWeight="normal" color="white">
							I wrote and presented a 6 episode series on coding through Irish
							that was aired weekly on Cúla4 during the beginning of 2015.
						</Text>
					</Box>
				</Link>
			</motion.div>
			<motion.div whileHover={{ x: [0, -50] }} whileTap={{ scale: 0.9 }}>
				<Link
					href={"https://dinglesailingclub.com/"}
					target="_blank"
					style={{ textDecoration: "none" }}
					rel="noreferrer"
					passhref
				>
					<Box style={styles}>
						<Text fontSize="2xl" fontWeight="bold" color="white">
							⛵️ Instructor @ Dingle Sailing Club
						</Text>
						<Text fontSize="xl" fontWeight="normal" color="white">
							I teach kids and adults how to sail from zero to hero on dinghies
							in English and Irish.
						</Text>
					</Box>
				</Link>
			</motion.div>
			<motion.div whileHover={{ x: [0, 50] }} whileTap={{ scale: 0.9 }}>
				<Link
					href={"https://dingledojo.com"}
					target="_blank"
					style={{ textDecoration: "none" }}
					rel="noreferrer"
					passhref
				>
					<Box style={styles}>
						<Text fontSize="2xl" fontWeight="bold" color="white">
							📟 Mentor @ Dingle Coderdojo
						</Text>
						<Text fontSize="xl" fontWeight="normal" color="white">
							I mentor kids of all ages through English and Irish at Dingle
							Coderdojo. Teaching is the best way to learn.
						</Text>
					</Box>
				</Link>
			</motion.div>
			<motion.div whileHover={{ x: [0, -50] }} whileTap={{ scale: 0.9 }}>
				<Link
					href={"https://dinglesailingclub.com/"}
					target="_blank"
					style={{ textDecoration: "none" }}
					rel="noreferrer"
					passhref
				>
					<Box style={styles}>
						<Text fontSize="2xl" fontWeight="bold" color="white">
							💭 PRO @ Dingle Sailing Club
						</Text>
						<Text fontSize="xl" fontWeight="normal" color="white">
							2021-Present I am the PRO of the Dingle Sailing Club. I operate
							all socials: Instagram, Twitter, Facebook, and Email. My role is
							to advertise sailing, racing and events. I recently oversaw the
							IUSA Intervarsities where all universities in Ireland raced in
							Dingle.
						</Text>
					</Box>
				</Link>
			</motion.div>
			<motion.div whileHover={{ x: [0, 50] }} whileTap={{ scale: 0.9 }}>
				<Link
					href={"https://dinglesailingclub.com/"}
					target="_blank"
					style={{ textDecoration: "none" }}
					rel="noreferrer"
					passhref
				>
					<Box style={styles}>
						<Text fontSize="2xl" fontWeight="bold" color="white">
							💭 Commodore @ Dingle Sailing Club
						</Text>
						<Text fontSize="xl" fontWeight="normal" color="white">
							2022-Present As Commodore of Dingle Sailing Club, I chair the
							committee and oversee the running of the club and future plans.
						</Text>
					</Box>
				</Link>
			</motion.div>
		</Box>
	);
};

export default Mentorship;
