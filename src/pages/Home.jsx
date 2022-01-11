import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';

function Home() {
  return (
    <div>
      {/* <h2 className='text-6xl'>Welcome {process.env.REACT_APP_GITHUB_TOKEN}</h2> */}
      <UserSearch />
      <UserResults />
    </div>
  );
}

export default Home;
