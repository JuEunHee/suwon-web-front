import type { NoticeModel } from '../models';
import { apiClient } from '@/clients/api-client';

export type GetNoticeApi = {
  Request: void;
  Response: {
    pagination: any;
    data: NoticeModel[];
  };
};

export async function getNoticeApi() {
  const { data: notices } =
    await apiClient.get<GetNoticeApi['Response']>('/notices');

  return notices.data;
}
