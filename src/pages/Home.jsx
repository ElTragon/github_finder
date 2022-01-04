function Home() {
  return (
    <div>
      <h2 className='text-6xl'>Welcome</h2>
      {process.env.REACT_APP_GITHUB_TOKEN}
    </div>
  );
}

export default Home;
