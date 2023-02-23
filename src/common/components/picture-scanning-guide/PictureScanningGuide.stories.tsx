import { ComponentMeta, Story } from '@storybook/react';
import PictureScanningGuide, { PictureScanningGuideProps } from './PictureScanningGuide';

export default {
    title: 'components/PictureScanningGuide',
    component: PictureScanningGuide,
} as ComponentMeta<typeof PictureScanningGuide>;

export const Default: Story<PictureScanningGuideProps> = (args) => <PictureScanningGuide {...args} />;
