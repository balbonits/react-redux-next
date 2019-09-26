import Header from '../components/Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #DDD;
`;

const BaseLayout = props => {
  return (<Wrapper>
      <Header />
      {props.children}
    </Wrapper>);
};

export default BaseLayout;