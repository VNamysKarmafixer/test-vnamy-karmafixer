import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

const GetSOIDbyWebhookIDandProviderType = async (event) => {
  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  });
};

export const main = middyfy(GetSOIDbyWebhookIDandProviderType);
