export const getTime = () => {
  const now = new Date();

  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const date = `${day}/${month}/${year}`;
  const hour = new Date().toTimeString().substring(0, 5);

  return { date, hour };
};

export const sortListAlphabetically = (list) => {
  const sortedList = list.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return sortedList;
};

export const filterListById = (list, id) => {
  const filteredList = list.filter((el) => {
    return (
      String(id) === String(el.parentId) || String(id) === String(el.driverId)
    );
  });
  return filteredList;
};
