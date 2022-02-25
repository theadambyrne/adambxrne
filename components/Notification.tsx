import { Box, Link } from "@chakra-ui/react";

interface notificationProps {
	text: string;
}

const Notification = ({ text }: notificationProps) => {
	return (
		<Link
			href={"https://bxrne.hashnode.dev"}
			target="_blank"
			style={{ textDecoration: "none", cursor: "pointer" }}
			rel="noreferrer"
			passhref
		>
			<Box
				bg="#3d40c6"
				fontWeight="bold"
				textAlign="center"
				fontSize="xl"
				color="white"
				p={5}
			>
				<div>{text}</div>
			</Box>
		</Link>
	);
};

export default Notification;
