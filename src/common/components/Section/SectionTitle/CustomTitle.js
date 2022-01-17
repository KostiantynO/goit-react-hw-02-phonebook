import { PropTypes } from 'common';

export const CustomTitle = ({ title, h = '2', ...props }) => {
  switch (`h${h}`) {
    case 'h1':
      return (
        <h1 {...props}>
          <span>{title}</span>
        </h1>
      );

    case 'h3':
      return (
        <h3 {...props}>
          <span>{title}</span>
        </h3>
      );

    default:
      return (
        <h2 {...props}>
          <span>{title}</span>
        </h2>
      );
  }
};

CustomTitle.protoTypes = {
  title: PropTypes.string.isRequired,
  h: PropTypes.string.isRequired,
};
