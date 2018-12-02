import styled from 'styled-components';
import {
  space,
  width,
  height,
  flex,
  color,
  fontSize,
  order,
  alignSelf,
  display,
  borders,
  borderColor,
} from 'styled-system';

const Box = styled.div`
  boxSizing: border-box;
  ${width};
  ${height};
  ${space};
  ${fontSize};
  ${color};
  ${flex};
  ${order};
  ${alignSelf};
  ${display};
  ${borders};
  ${borderColor};
`;

Box.displayName = 'Box';

Box.propTypes = {
  ...width.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes,
};

export default Box;