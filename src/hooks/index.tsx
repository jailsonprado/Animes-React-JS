import { slugify } from '../utils/slugify';

type Params = Record<string, string>;

interface Options {
  event: string | undefined;
}

const datalayer = (params: Params, options?: Options) => {
  const defaultOptions = { event: 'page', ...options };
  const paramsFormatados = Object.entries(params).reduce<Params>((result, [key, value]) => {
    result[key] = slugify(value);
    return result;
  }, {});

  const data = { ...paramsFormatados };

  if (defaultOptions.event) {
    data.event = defaultOptions.event;
  }

  (window as any)?.dataLayer?.push(data);
};

export { datalayer };