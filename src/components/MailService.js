import axios from 'axios';

export class MailService {
  static async sendUserData(callback) {
    return axios({
      url: `https://api.irontiger.ru/wp-json/contact-form-7/v1/contact-forms/74/feedback`,
      data: callback,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
    });
  }
}
