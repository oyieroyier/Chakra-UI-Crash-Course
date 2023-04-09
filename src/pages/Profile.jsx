import {
	ChatIcon,
	CheckCircleIcon,
	EmailIcon,
	StarIcon,
	WarningIcon,
} from '@chakra-ui/icons';
import {
	List,
	ListIcon,
	ListItem,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '@chakra-ui/react';

export default function Profile() {
	return (
		<Tabs mt={'40px'} p={'20px'} colorScheme="purple">
			<TabList>
				<Tab
					_selected={{
						color: 'white',
						bg: 'purple.400',
						borderTopLeftRadius: '10px',
					}}
				>
					Account Info
				</Tab>
				<Tab
					_selected={{
						color: 'white',
						bg: 'purple.400',
						borderTopRightRadius: '10px',
					}}
				>
					Task History
				</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
					<List spacing={4}>
						<ListItem>
							<ListIcon as={EmailIcon} />
							Email: mario@netninja.com
						</ListItem>

						<ListItem>
							<ListIcon as={ChatIcon} />
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium, error!
						</ListItem>

						<ListItem>
							<ListIcon as={StarIcon} />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quo.
						</ListItem>
					</List>
				</TabPanel>

				<TabPanel>
					<List spacing={4}>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color={'teal.400'} />
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Doloribus, ex!
						</ListItem>

						<ListItem>
							<ListIcon as={CheckCircleIcon} color={'teal.400'} />
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
							exercitationem!
						</ListItem>

						<ListItem>
							<ListIcon as={WarningIcon} color={'red.400'} />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
							recusandae?
						</ListItem>

						<ListItem>
							<ListIcon as={CheckCircleIcon} color={'teal.400'} />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
							rem.
						</ListItem>

						<ListItem>
							<ListIcon as={WarningIcon} color={'red.400'} />
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
							inventore.
						</ListItem>
					</List>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
}
