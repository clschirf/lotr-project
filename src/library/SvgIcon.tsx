export type SvgIconProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  svgRef: any; // TODO: typing for svg
  size?: string;
};

const SvgIcon = (props: SvgIconProps) => {
  const defaultProps = { width: '2.5em', height: '2.5em' };
  const newProps = { ...defaultProps, ...props };
  return <props.svgRef width={newProps.size} height={newProps.size} />;
};

SvgIcon.displayName = 'SvgIcon';
export default SvgIcon;
