import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main'
import {Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="My Portfolio" scroll>
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">My Projects</Link>
            <Link to="/contact">Contact Me</Link>
          </Navigation>
        </Header>
        <Drawer title="My Portfolio">
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">My Projects</Link>
            <Link to="/contact">Contact Me</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main/>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
