export default function GlitchEmbed(props: { id: string }) {
  const { id } = props;

  return (
    <iframe
      title={id}
      src={`https://glitch.com/embed/#!/embed/${id}?previewSize=100`}
    ></iframe>
  );
}
