import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import {
	Avatar,
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Flex,
	HStack,
	Heading,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';

export default function Dashboard() {
	const tasks = useLoaderData();

	return (
		<SimpleGrid spacing={10} minChildWidth={'300px'}>
			{tasks &&
				tasks.map((task) => (
					<Card
						key={task.id}
						borderTop={'8px'}
						borderColor={'purple.500'}
						bg={'white'}
					>
						<CardHeader>
							<Flex gap={5}>
								<Avatar src={task.img} />
								<Box>
									<Heading as={'h3'} size={'sm'}>
										{task.title}
									</Heading>
									<Text>{task.author}</Text>
								</Box>
							</Flex>
						</CardHeader>

						<CardBody color={'gray.500'}>
							<Text>{task.description}</Text>
						</CardBody>

						<Divider borderColor={'gray.200'} />

						<CardFooter>
							<HStack>
								<Button variant={'ghost'} leftIcon={<ViewIcon />}>
									Watch
								</Button>
								<Button variant={'ghost'} leftIcon={<EditIcon />}>
									Comment
								</Button>
							</HStack>
						</CardFooter>
					</Card>
				))}
		</SimpleGrid>
	);
}

export const tasksLoader = async () => {
	const response = await fetch(
		'https://chakra-ui-tut-backend.vercel.app/tasks'
	);

	return response.json();
};
