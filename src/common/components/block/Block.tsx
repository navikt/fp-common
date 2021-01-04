import React from 'react';
import bemHelper from '../../utils/bemUtils';

import './block.less';

type BlockMargin = 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'none';

interface BlockProps {
    margin?: BlockMargin;
    padBottom?: BlockMargin;
    textAlignCenter?: boolean;
    className?: string;
}

const bem = bemHelper('block');

const Block: React.FunctionComponent<BlockProps> = ({ margin, padBottom, className, textAlignCenter, children }) => {
    const classNames = bem.classNames(
        bem.block,
        bem.modifierConditional(margin, margin !== undefined),
        bem.modifierConditional(`bottom-${padBottom}`, padBottom !== undefined),
        {
            [bem.modifier('textAlignCenter')]: textAlignCenter,
            [`${className}`]: className !== undefined,
        }
    );
    return <div className={classNames}>{children}</div>;
};

export default Block;
