import type { TableHeader } from './types';

export const genderTableHeader: TableHeader[] = [
	{
		name: 'Название',
		key: 'name',
		type: 'string',
	},
	{
		name: 'Ключ',
		key: 'key',
		type: 'string',
	},
	{
		name: 'Создано',
		key: 'createdAt',
		type: 'date-time',
	},
	{
		name: 'Обновлено',
		key: 'updatedAt',
		type: 'date-time',
	},
	{
		name: 'Действия',
		key: 'actions',
		type: 'string',
	},
];
