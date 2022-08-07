import * as React from 'react';
import {SiDeepnote} from 'react-icons/si'
import { Container, Navbar } from 'react-bootstrap';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {

  return (
    <Navbar fixed="top" bg="light" variant="dark">
            <Container>
                <Navbar.Brand>
                <SiDeepnote style={{color: 'blue'}}/>
                  <span style={{color: 'grey', fontSize: '1.4rem', fontWeight: 300}}>
                      &nbsp;Notely
                  </span>
                </Navbar.Brand>
                <Navbar.Text className="justify-content-end">
                  <span style={{color: 'grey', fontWeight: 300}}>
                    <a style={{color: 'cadetblue', textDecoration: 'none'}} href="https://vinyldavyl.netlify.app" target="_blank">
                     Quick notes on the go
                    </a>
                  </span>
                </Navbar.Text>
            </Container>
      </Navbar>
  );
};

export default Header;
