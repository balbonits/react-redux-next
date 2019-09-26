import Header from '../components/Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const BaseLayout = props => {
  return (<div style={layoutStyle}>
      <Header />
      {props.children}
    </div>);
};

export default BaseLayout;