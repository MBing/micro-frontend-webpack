import { render } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history =  useHistory();

    useEffect(() => {
        const {onParentNavigate} = render(ref.current, {
            // when landing on the page from another route, we need to pass an initial path
            initialPath: history.location.pathname,
            // We need to propagate the navigation history since we use isolated navigation
            onNavigate: ({pathname: nextPathname}) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            }
        });

        if (onParentNavigate) {
            history.listen(onParentNavigate);
        }
    }, []);

    return <div ref={ref}></div>
};
