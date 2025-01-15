export const getInitials = (username: string): string => {
  if (!username) return '';

  const nameParts = username.split(' ');
  if (nameParts.length < 2) return nameParts[0]?.charAt(0).toUpperCase() || '';

  const [firstname, lastname] = nameParts;
  return `${firstname.charAt(0).toUpperCase()}${lastname.charAt(0).toUpperCase()}`;
};
