function getData(item: string): any {
  try {
    return JSON.parse(window.localStorage.getItem(`dead-end-${item}`));
  } catch (error) {
    console.error(error);
  }
}

function saveData(item: string, data: any): any {
  try {
    window.localStorage.setItem(`dead-end-${item}`, JSON.stringify(data));

    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getData, saveData };
