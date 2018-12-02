import React from 'react';
import { NamespacesConsumer } from 'react-i18next';

const NotFound = () => {
  return (
    <NamespacesConsumer ns={['views']}>
      {t => (
        <div className="NotFound">
          {t('views:NotFound.404', { defaultValue: '404 Not Found' })}
        </div>
      )}
    </NamespacesConsumer>
  );
};

export default NotFound;
