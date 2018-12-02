import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

const LanguageSelector = ({ t, i18n }) => {

  // get available languages
  const languageOptions = Object.keys(i18n.store.data);

  // unless language detector is used when initializing i18n language key will not exist of first load
  const selectedLanguage = i18n.language || languageOptions[0];

  const changeLanguage = event => i18n.changeLanguage(event.target.value);

  return (
    <select onChange={changeLanguage} defaultValue={selectedLanguage}>
      {languageOptions.map(id => (
        <option key={id} value={id}>
          {t(`components:LanguageSelector.${id}`, {
            defaultValue: id,
          })}
        </option>
      ))}
    </select>
  );
};

LanguageSelector.displayName = 'LanguageSelector';

LanguageSelector.propTypes = {
  t: PropTypes.func,
  i18n: PropTypes.object,
};

export default withNamespaces(['components'])(LanguageSelector);
