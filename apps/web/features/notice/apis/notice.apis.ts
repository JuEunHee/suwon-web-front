import { apiClient } from '@/clients/api-client';

import type { NoticeModel } from '../models';

export type GetNoticeApi = {
  Request: void;
  Response: NoticeModel[];
};

export async function getNoticeApi() {
  const { data } = await apiClient.get<GetNoticeApi['Response']>(`/notices`);

  return data;
}
