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

export const transliterateUrl = function (text: any) {
  if (!text) return text;
  text = text
    .replace(/\u0401/g, 'YO')
    .replace(/\u0419/g, 'J')
    .replace(/\u0426/g, 'TS')
    .replace(/\u0423/g, 'U')
    .replace(/\u041A/g, 'K')
    .replace(/\u0415/g, 'E')
    .replace(/\u041D/g, 'N')
    .replace(/\u0413/g, 'G')
    .replace(/\u0428/g, 'SH')
    .replace(/\u0429/g, 'SCH')
    .replace(/\u0417/g, 'Z')
    .replace(/\u0425/g, 'H')
    .replace(/\u042A/g, '__')
    .replace(/\u0451/g, 'yo')
    .replace(/\u0439/g, 'j')
    .replace(/\u0446/g, 'ts')
    .replace(/\u0443/g, 'u')
    .replace(/\u043A/g, 'k')
    .replace(/\u0435/g, 'e')
    .replace(/\u043D/g, 'n')
    .replace(/\u0433/g, 'g')
    .replace(/\u0448/g, 'sh')
    .replace(/\u0449/g, 'sch')
    .replace(/\u044A/g, '__')
    .replace(/\u0424/g, 'F')
    .replace(/\u042B/g, 'I')
    .replace(/\u0412/g, 'V')
    .replace(/\u0410/g, 'А')
    .replace(/\u041F/g, 'P')
    .replace(/\u0420/g, 'R')
    .replace(/\u041E/g, 'O')
    .replace(/\u041B/g, 'L')
    .replace(/\u0414/g, 'D')
    .replace(/\u0416/g, 'ZH')
    .replace(/\u042D/g, 'JE')
    .replace(/\u0444/g, 'f')
    .replace(/\u044B/g, 'y')
    .replace(/\u0432/g, 'v')
    .replace(/\u0430/g, 'a')
    .replace(/\u043F/g, 'p')
    .replace(/\u0440/g, 'r')
    .replace(/\u043E/g, 'o')
    .replace(/\u043B/g, 'l')
    .replace(/\u0434/g, 'd')
    .replace(/\u0436/g, 'zh')
    .replace(/\u044D/g, 'je')
    .replace(/\u042F/g, 'Ya')
    .replace(/\u0427/g, 'CH')
    .replace(/\u0421/g, 'S')
    .replace(/\u041C/g, 'M')
    .replace(/\u0418/g, 'I')
    .replace(/\u0422/g, 'T')
    .replace(/\u042C/g, '_')
    .replace(/\u0411/g, 'B')
    .replace(/\u042E/g, 'YU')
    .replace(/\u044F/g, 'ya')
    .replace(/\u0447/g, 'ch')
    .replace(/\u0441/g, 's')
    .replace(/\u043C/g, 'm')
    .replace(/\u0438/g, 'i')
    .replace(/\u0442/g, 't')
    .replace(/\u044C/g, '_')
    .replace(/\u0431/g, 'b')
    .replace(/\u044E/g, 'yu')
    .replace(/\u0437/g, 'z')
    .replace(/\u0445/g, 'h')
    .replace(/\u0020/g, '-');
  return text.toLowerCase();
};

export const urlToCyrillic = function (text: any) {
  if (!text) return text;
  text = text
    .replace(/YO/g, 'Ё')
    .replace(/I/g, 'И')
    .replace(/TS/g, 'Ц')
    .replace(/U/g, 'У')
    .replace(/K/g, 'К')
    .replace(/E/g, 'Е')
    .replace(/N/g, 'Н')
    .replace(/G/g, 'Г')
    .replace(/SH/g, 'Ш')
    .replace(/SCH/g, 'Щ')
    .replace(/Z/g, 'З')
    .replace(/H/g, 'Х')
    .replace(/__/g, 'ъ')
    .replace(/yo/g, 'ё')
    .replace(/j/g, 'й')
    .replace(/ts/g, 'ц')
    .replace(/u/g, 'у')
    .replace(/k/g, 'к')
    .replace(/e/g, 'е')
    .replace(/n/g, 'н')
    .replace(/g/g, 'г')
    .replace(/sh/g, 'ш')
    .replace(/sch/g, 'щ')
    .replace(/__/g, 'ъ')
    .replace(/F/g, 'Ф')
    .replace(/I/g, 'И')
    .replace(/V/g, 'В')
    .replace(/А/g, 'А')
    .replace(/P/g, 'П')
    .replace(/R/g, 'Р')
    .replace(/O/g, 'О')
    .replace(/L/g, 'Л')
    .replace(/D/g, 'Д')
    .replace(/ZH/g, 'Ж')
    .replace(/JE/g, 'Э')
    .replace(/f/g, 'ф')
    .replace(/y/g, 'ы')
    .replace(/v/g, 'в')
    .replace(/a/g, 'а')
    .replace(/p/g, 'п')
    .replace(/r/g, 'р')
    .replace(/o/g, 'о')
    .replace(/l/g, 'л')
    .replace(/d/g, 'д')
    .replace(/zh/g, 'ж')
    .replace(/je/g, 'э')
    .replace(/Ya/g, 'Я')
    .replace(/CH/g, 'Ч')
    .replace(/S/g, 'С')
    .replace(/M/g, 'М')
    .replace(/I/g, 'И')
    .replace(/T/g, 'Т')
    .replace(/_/g, 'ь')
    .replace(/B/g, 'Б')
    .replace(/YU/g, 'Ю')
    .replace(/ya/g, 'я')
    .replace(/ch/g, 'ч')
    .replace(/s/g, 'с')
    .replace(/m/g, 'м')
    .replace(/i/g, 'и')
    .replace(/t/g, 'т')
    .replace(/_/g, 'ь')
    .replace(/b/g, 'б')
    .replace(/yu/g, 'ю')
    .replace(/z/g, 'з')
    .replace(/h/g, 'х')
    .replace(/-/g, ' ');
  return text.toLowerCase();
};

export const scrollTo = (element: any, offset: any, behavior: any) => {
  window.scrollTo({
    top: element.current.offsetTop - offset,
    behavior: behavior,
  });
};
export const setPlurals = (number: number, one: string, two: string, five: string) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
};
