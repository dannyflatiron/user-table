import TableHeader from './TableHeader.js';
import TableBody from './TableBody.js';

const Table = (props) => {

  return (
    <>
      <h1 id="title">User Table</h1>
      <table id="users">
        <tbody>
          <TableHeader></TableHeader>
          {props.userData.map((user, idx) => {
            return (
            <tr key={idx} onClick={() => {
              props.setIsModalVisible(true)
              props.getUser(user)
            }}>
              <TableBody user={user} idx={idx}></TableBody>
            </tr>
          )})}
        </tbody>
      </table>
    </>
  );
}

export default Table;
