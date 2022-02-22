import { motion } from "framer-motion";
import { Text, Link, Box } from "@chakra-ui/react";

const styles = {
	borderRadius: "10px",
	border: "2px solid #F92672",
	margin: 10,
	padding: 10,
};

const WebDev = () => {
	return (
		<Box mt={10}>
			<Text fontSize="4xl" color="#F92672" fontWeight="bold">
				&lt;web.dev /&gt;
			</Text>
			<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
				<Link
					href={"https://dolphinscovecottage.com"}
					target="_blank"
					style={{ textDecoration: "none" }}
					rel="noreferrer"
					passHref
				>
					<Box style={styles}>
						<Text fontSize="2xl" fontWeight="bold" color="white">
							🐬 Dolphin&apos;s Cove Cottage
						</Text>
						<Text fontSize="xl" fontWeight="normal" color="white">
							A gallery site to showcase a gem on the Wild Atlantic Way. The
							site reduced the renters&apos; marketing costs significantly
						</Text>
					</Box>
				</Link>
			</motion.div>
			<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
				<Link
					href={"https://verba.vercel.app"}
					target="_blank"
					style={{ textDecoration: "none" }}
					rel="noreferrer"
					passHref
				>
					<Box style={styles}>
						<Text fontSize="2xl" fontWeight="bold" color="white">
							🏛 Verba
						</Text>
						<Text fontSize="xl" fontWeight="normal" color="white">
							A Wordle remake but in Latin!
						</Text>
					</Box>
				</Link>
			</motion.div>
			<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
				<Link
					href={"https://walledgardencottageloughderg.com"}
					target="_blank"
					style={{ textDecoration: "none" }}
					rel="noreferrer"
					passHref
				>
					<Box style={styles}>
						<Text fontSize="2xl" fontWeight="bold" color="white">
							🏡 Walled Garden Cottage, Lough Derg
						</Text>
						<Text fontSize="xl" fontWeight="normal" color="white">
							A site to advertise a holiday cottage on Lough Derg. The site gave
							the cottage a real online presence.
						</Text>
					</Box>
				</Link>
			</motion.div>
			<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
				<Link
					href={"http://siopa.io"}
					target="_blank"
					style={{ textDecoration: "none" }}
					rel="noreferrer"
					passHref
				>
					<Box style={styles}>
						<Text fontSize="2xl" fontWeight="bold" color="white">
							🛒 Siopa.io
						</Text>
						<Text fontSize="xl" fontWeight="normal" color="white">
							A multi-user shopping list app.
						</Text>
					</Box>
				</Link>
			</motion.div>
		</Box>
	);
};

export default WebDev;
