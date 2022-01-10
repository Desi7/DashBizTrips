const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function deleteTrip(id) {
  await fetch(`${baseUrl}trips/${id}`, { method: 'DELETE' });
}

export async function getTrips() {
  const response = await fetch(`${baseUrl}trips`);
  return await response.json();
}
