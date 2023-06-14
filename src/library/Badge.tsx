import styled from '@emotion/styled';
import SvgIcon from 'library/SvgIcon';
import { bodyColor } from 'library/palette';

export type BadgeProps = {
  text?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  // variant: string;
};

const BadgeContainer = styled.div`
  margin: 1em;
  padding: 0.5em 1em;
  border: 1px solid ${bodyColor};
  display: flex;
  flex-direction: row;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 0.5em;
  width: 6em;

  > *:not(:last-child) {
    margin-right: 0.5em;
  }
`;

const Badge = (props: BadgeProps) => {
  const { text, icon } = props;
  return (
    <BadgeContainer>
      {!!text && text}
      {!!icon && <SvgIcon svgRef={icon} size="1.5em" />}
    </BadgeContainer>
  );
};

Badge.displayName = 'Badge';
export default Badge;
