'use client';

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@suwon-web-front/ui';
import type { NoticeModel } from '../models';

const NoticeItem = ({ noticeItem }: { noticeItem: NoticeModel }) => {
  return (
    <AccordionItem value="item-1">
      <AccordionTrigger>{noticeItem.title}</AccordionTrigger>
      <AccordionContent>{noticeItem.content}</AccordionContent>
    </AccordionItem>
  );
};

export default NoticeItem;
