import { Layout } from 'antd';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';


const App = () => {
  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Header />
        <Main />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
