import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	Textarea,
} from '@chakra-ui/react';
import { Form, redirect } from 'react-router-dom';

export default function Create() {
	return (
		<Box maxW={'480px'}>
			<Form method="post" action='/create'>
				<FormControl isRequired mb={'40px'}>
					<FormLabel>Task name</FormLabel>
					<Input type="text" name="title" />
					<FormHelperText>Enter a descriptive task name</FormHelperText>
				</FormControl>

				<FormControl>
					<FormLabel>Task description</FormLabel>
					<Textarea
						placeholder="Enter a detailed description of the task"
						resize={'none'}
						name="description"
					/>
				</FormControl>

				<FormControl display={'flex'} alignItems={'baseline'} mt={'10px'}>
					<Checkbox name="isPrioity" size={'lg'} colorScheme="purple" />
					<FormLabel ml={'10px'}>Make this a priority task</FormLabel>
				</FormControl>

				<Button type="submit" mt={30}>
					Submit
				</Button>
			</Form>
		</Box>
	);
}

export const createAction = async ({ request }) => {
	const data = await request.formData();

	const task = {
		title: data.get('title'),
		description: data.get('description'),
		isPriority: data.get('isPriority') === '',
	};

	console.log(task);

	return redirect('/');
};
