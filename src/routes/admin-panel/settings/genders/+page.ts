import type { PageLoad } from './$types';
import { PUBLIC_BASE_URL } from '$env/static/public';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch(`${PUBLIC_BASE_URL}/admin/brand`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true',
		},
		credentials: 'include',
	});
	const result = await response.json();

	return result;
};
