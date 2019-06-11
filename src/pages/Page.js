import React from 'react';
import { useStore } from 'store';

import Image from 'components/Image';
import TextBlock from 'components/TextBlock';

const Page = ({ page }) => {
  const { state, actions } = useStore();
  const { title, image, content } = page;
  return (
    <div>
      <span>page:</span>
      <h2>{title}</h2>
      <Image src={image} />
      <TextBlock blocks={content} />
    </div>
  );
};

export default Page;
