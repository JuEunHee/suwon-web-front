'use client';

import { Accordion } from '@suwon-web-front/ui';
import { useQuery } from '@tanstack/react-query';
import NoticeItem from './NoticeItem';
import type { NoticeModel } from '../models';
import { noticeQueries } from '@/features/notice/apis'; // noticeQueries 가져오기

export default function Notices() {
  const { data: notices } = useQuery(noticeQueries.list()); // noticeQueries 사용

  if (!notices) {
    return <div>Loading...</div>;
  }

  return (
    <Accordion
      type="single"
      collapsible
    >
      {(notices as NoticeModel[]).map((notice: NoticeModel) => (
        <NoticeItem
          noticeItem={notice}
          key={notice.id}
        />
      ))}
    </Accordion>
  );
}
