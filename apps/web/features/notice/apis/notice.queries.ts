import { queryOptions } from '@tanstack/react-query';
import { getNoticeApi } from './notice.apis';

export const noticeQueries = {
  _id: () => ['notices'],
  list: () => {
    return queryOptions({
      queryKey: [...noticeQueries._id()],
      queryFn: () => getNoticeApi(),
    });
  },
};
