
const TableBody = (props) => {

  return (
    <>
      <td>{props.idx + 1}</td>
      <td>{props.user.name.title + '. ' + props.user.name.first + '' + props.user.name.last}</td>
      <td>{new Date(props.user.dob.date).toString()}</td>
      <td>{props.user.location.state}</td>
      <td>{props.user.location.country}</td>
    </>
  );
}

export default TableBody;
