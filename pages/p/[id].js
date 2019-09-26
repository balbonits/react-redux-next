import { useRouter } from 'next/router';
import withBaseLayout from '../../layouts/base';

const Page = props => {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </div>
  );
}

export default withBaseLayout(Page);