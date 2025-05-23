'use client';

import { noticeQueries } from '@/features/notice/apis'; // noticeQueries 가져오기
import { useQuery } from '@tanstack/react-query';
import type { NoticeModel } from '../models';
import NoticeItem from './NoticeItem';

export default function Notices() {
  const { data: notices } = useQuery(noticeQueries.list()); // noticeQueries 사용

  if (!notices) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {notices.map((notice: NoticeModel) => (
        <NoticeItem noticeItem={notice} key={notice.id} />
      ))}
    </ul>
  );
}
