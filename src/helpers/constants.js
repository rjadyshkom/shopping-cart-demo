import productOneImage from '../images/products-one.jpeg';
import productTwoImage from '../images/products-two.jpeg';
import productThreeImage from '../images/products-three.jpeg';
import productFourImage from '../images/products-four.jpeg';
import productFiveImage from '../images/products-five.jpeg';
import productSixImage from '../images/products-six.jpeg';

export const requestFormInitialValues = { cartName: '', cartEmail: '', cartPhone: '', cartProducts: [] };
export const onStateSuccess = 'Успешно!';
export const onStateError = 'Ошибка!';

export const data = {
    products: {
        one: {
            id: 1,
            image: productOneImage,
            name: 'Воркаут-комплекс 1',
            description: 'Брусья, турник, шведская стенка и наклонная скамья для пресса. Описание, которое не помещается в контейнер',
            price: 197156
        },
        two: {
            id: 2,
            image: productTwoImage,
            name: 'Воркаут-комплекс 2',
            description: 'Канат, кольца, шведская стенка, 3 турника, брусья и наклонная скамья',
            price: 298594
        },
        three: {
            id: 3,
            image: productThreeImage,
            name: 'Тренажёр 1',
            description: 'Брусья гнутые',
            price: 33813
        },
        four: {
            id: 4,
            image: productFourImage,
            name: 'Тренажёр 2',
            description: 'Гамвик',
            price: 390063
        },
        five: {
            id: 5,
            image: productFiveImage,
            name: 'Воркаут-комплекс 3',
            description: 'Воркаут-комплекс: 23 турника и 2 рукохода. Описание, которое не помещается в контейнер',
            price: 558656
        },
        six: {
            id: 6,
            image: productSixImage,
            name: 'Тренажёр 3',
            description: 'Вертикальные поручни для колясочников',
            price: 47438
        }
    }
}

export const getFormData = (json) => {
    try {
        const data = new FormData();
        for (let key in json) {
            data.append(key, json[key]);
        }
        return data
    }
    catch (error) {
        console.error(error);
        return null;
    }
}