export const usePinnedRepos = async () => {
  const response = await fetch(`${import.meta.env.API_URL}/user/rubkn`);
  const pinned = await response.json();

  return pinned;
};
