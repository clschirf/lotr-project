import { SyntheticEvent, useState, ReactNode } from 'react';
import styled from '@emotion/styled';
import SvgIcon from 'library/SvgIcon';
import PLUS_CIRCLE_ICON from 'assets/plus-circle.svg';
import MINUS_CIRCLE_ICON from 'assets/minus-circle.svg';

export type CollapsibleBoxProps = {
  title?: string;
  children?: ReactNode;
};

const CollapsibleContainer = styled.div`
  background-color: transparent;
  border-bottom: 1px solid #9c9c9c;
  cursor: pointer;
  color: #9c9c9c;
  padding: 1em;
  max-height: 1.5em;
  overflow: hidden;
  transition: all 1s ease-out;
  width: 90vw;

  &.expanded {
    max-height: 100vh;
    transition: all 1s ease-in;
  }
`;

const ControlBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CollapsibleBox = (props: CollapsibleBoxProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = (event: SyntheticEvent) => {
    event.preventDefault();
    setExpanded(expanded => !expanded);
  };

  return (
    <CollapsibleContainer className={expanded ? 'expanded' : ''}>
      <ControlBar>
        <div>{props.title}</div>
        <div onClick={toggleExpand}>
          {expanded ? (
            <SvgIcon svgRef={MINUS_CIRCLE_ICON} height="1em" width="1em" />
          ) : (
            <SvgIcon svgRef={PLUS_CIRCLE_ICON} height="1em" width="1em" />
          )}
        </div>
      </ControlBar>
      {props.children}
    </CollapsibleContainer>
  );
};

CollapsibleBox.displayName = 'CollapsibleBox';
export default CollapsibleBox;
