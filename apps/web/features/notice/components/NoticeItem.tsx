'use client';

import type { NoticeModel } from '../models';

const NoticeItem = ({ noticeItem }: { noticeItem: NoticeModel }) => {
  return (
    <li className="flex flex-col gap-2">
      <h2 className="text-lg font-bold">{noticeItem.title}</h2>
      <p className="text-sm text-gray-500">{noticeItem.content}</p>
    </li>
  );
};

export default NoticeItem;
