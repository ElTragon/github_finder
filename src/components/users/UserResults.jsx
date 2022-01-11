import { useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../context/github/GithubContext';
function UserResults() {
  console.log('testing');
  const { users, loading } = useContext(GithubContext);
  //   const baseURL = 'https://api.github.com'
  //   const token = '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'

  //   const [users, setUsers] = useState([])
  //   const [isLoading, setIsLoading] = useState(true)

  //   console.log('sssssssss')
  //   useEffect(() => {
  //     fetchUsers();
  //   }, []);

  //   const fetchUsers = async () => {
  //     const responce = await fetch(`${baseURL}/users`, {
  //       headers: {
  //         Authorization: `token ${token}`,
  //       },
  //     });

  //     const data = await responce.json();
  //     console.log(data)
  //     setUsers(data);
  //     setIsLoading(false);
  //   };
  // return <Spinner />
  console.log(loading);
  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
        {/* <h1>sssssss</h1> */}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
