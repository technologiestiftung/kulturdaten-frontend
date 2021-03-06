import { Story } from '@storybook/react';
import styled from '@emotion/styled';
import { DropZone } from '.';
import { useState } from 'react';

export default {
  title: 'Drop Zone',
};

const StoryWrapper = styled.div`
  padding: 3rem;
`;

export const DropZoneDefaultStory: Story = () => {
  const [, setFiles] = useState<FileList | File[]>();

  return (
    <StoryWrapper>
      <DropZone
        onDrop={(files) => setFiles(files)}
        label="Klicken oder Dateien per Drag-and-Drop ablegen."
        acceptedFileTypes={[{ mimeType: 'image/svg+xml', name: 'SVG' }]}
      />
    </StoryWrapper>
  );
};
