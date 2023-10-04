import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { Container, Logo, Title, Form, Input, Button } from './styles';
import githubLogo from '../../assets/images/github-logo.svg';

const MainPage = () => {
  const [username, setUsername] = useState('');

  return (
    <Container>
      <Logo src={githubLogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="User"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              window.location.assign(`/${username}/repositories`);
            }
          }}
        />
        <Button to={`/${username}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
};

export default MainPage;
