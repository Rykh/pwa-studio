import quoteCustomConfigAggregator from './ContentTypes/QuoteCustom/configAggregator';

const contentTypesConfig = {
    quote_custom: {
        configAggregator: quoteCustomConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/QuoteCustom'))
    }
}
export function getContentTypeConfig(contentType) {
    if (contentTypesConfig[contentType]) {
        return contentTypesConfig[contentType];
    }
}
