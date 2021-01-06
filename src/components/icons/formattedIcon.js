import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconBehance,
  IconCodeChef,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedIn,
  IconLoader,
  IconLocation,
  IconLogo,
  IconPlayStore,
  IconStar,
  IconTwitter,
  IconUnity,
  IconZap,
} from '@components/icons';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Behance':
      return <IconBehance />;
    case 'CodeChef':
      return <IconCodeChef />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'LinkedIn':
      return <IconLinkedIn />;
    case 'Loader':
      return <IconLoader />;
    case 'Location':
      return <IconLocation />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    case 'Unity':
      return <IconUnity />;
    case 'Zap':
      return <IconZap />;
    default:
      return <IconExternal />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
