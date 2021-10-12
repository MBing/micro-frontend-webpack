import { render } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        render(ref.current);
    });

    return <div ref={ref}></div>
};
