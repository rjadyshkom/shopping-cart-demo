import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, keywords, meta = [], link = [] }: any) => {
  return (
    <Helmet
      htmlAttributes={{ prefix: 'og: //ogp.me/ns#' }}
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: keywords,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:site_name',
          content: 'Железный тигр. Песочница',
        },
        {
          property: 'og:locale',
          content: 'ru',
        },
        {
          property: 'twitter:title',
          content: title,
        },
        {
          property: 'twitter:description',
          content: description,
        },
      ]}
    />
  );
};
