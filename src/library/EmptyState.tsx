import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Description = styled.div`
  width: 45vw;
  text-align: center;
  margin-top: 1em;
`;

const EmptyStateImg = styled.img`
  height: 50vh;
  border-radius: 25px;
`;

const EmptyState = () => {
  return (
    <Container>
      <EmptyStateImg src={require('assets/saruman-palantir.jpeg')} />
      <Description>
        Not even our seeing-stone could find any characters matching your
        criteria.
      </Description>
    </Container>
  );
};

EmptyState.displayName = 'EmptyState';
export default EmptyState;
