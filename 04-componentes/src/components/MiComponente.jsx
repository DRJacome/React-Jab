function MiComponente({ rey }) {
  console.log(rey);
  return (
    <div>
      Hola, {rey.nombre} come {rey.reses} vacas al día
    </div>
  );
}

MiComponente.defaultProps = {
  reses: "pocas",
  rey: "Rey Godo",
};
export default MiComponente;
