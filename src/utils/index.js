export const getTime = () => {
  const now = new Date();

  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const date = `${day}/${month}/${year}`;
  const hour = new Date().toTimeString().substring(0, 5);

  return { date, hour };
};
