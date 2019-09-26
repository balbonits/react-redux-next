// plugins
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
// layouts & components
import BaseLayout from '../layouts/base';

const PostLink = props => (
    <Link href="/p/[id]" as={`/p/${props.id}`} >
      <a>{props.title}</a>
    </Link>
);

let Index = props => {
    return (<BaseLayout>
        <h1>Batman TV Shows</h1>
        <ul>
          {props.shows ? props.shows.map(show => (
            <li key={show.id}>
              <PostLink id={show.id} title={show.name}/>
            </li>
          )) : ''}
        </ul>
    </BaseLayout>);
};

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;