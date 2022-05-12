import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { stripTrailingSlash } from '@/lib/helpers';

function SidebarMenu({ singleOption }) {
  const { key, label, LeftIcon } = singleOption;
  const url = stripTrailingSlash(useLocation()?.pathname);

  return (
    <li key={key}>
      <NavLink
        className={url === key ? 'sidebar-menu--active' : ''}
        to={`${key}`}
      >
        <LeftIcon />
        <h5>
          <FormattedMessage id={label} />
        </h5>
      </NavLink>
    </li>
  );
}

SidebarMenu.propTypes = {
  singleOption: PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
    LeftIcon: PropTypes.elementType,
    exact: PropTypes.bool,
  }),
};
export default React.memo(SidebarMenu);
