import React, { lazy, Suspense, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import { useDispatch } from 'react-redux';
import { fetchCustomers } from 'redux/actions/Customer';

export const AppViews = () => {
  const dispatch = useDispatch();

  /* eslint-disable */
  useEffect(() => {
    dispatch(fetchCustomers());
  }, []);
  /* eslint-disable */

  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${APP_PREFIX_PATH}/home`}
          component={lazy(() => import(`./home`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/main/customers/list`}
          component={lazy(() => import(`./customer-list/index`))}
        />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
