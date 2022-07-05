export const onStateSuccess = 'Успешно!';
export const onStateError = 'Ошибка!';

export const getFormData = (json: any) => {
  try {
    const data = new FormData();
    for (let key in json) {
      data.append(key, json[key]);
    }
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const makeTimeout = (delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(void 0);
    }, delay);
  });
};
