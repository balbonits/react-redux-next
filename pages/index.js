// plugins
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
// layouts & components
import withBaseLayout from '../layouts/base';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

let Page = (props) => {
    console.log('Page props:', props);
    return (<div>
        <h1>Batman TV Shows</h1>
        <ul>
          {props.shows ? props.shows.map(show => (
            <li key={show.id}>
              <Link href="/p/[id]" as={`/p/${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          )) : ''}
        </ul>
    </div>);
};

Page.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log('Show data fetched. Data:', data);
  console.log(`Show data fetched. Count: ${data.length}`);

    if (data) {
          return {
            shows: data.map(entry => entry.show)
          };
    }
};

export default withBaseLayout(Page);