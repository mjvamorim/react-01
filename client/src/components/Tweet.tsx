type Props = {
  text: string;
};
export function Tweet(props: Props) {
  const { text } = props;
  return <div>{text} </div>;
}
