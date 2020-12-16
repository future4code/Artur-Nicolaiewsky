import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.0-9/20800075_1124342047699499_6395856514030794579_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEHjqveKEpIqpxPcCNscrSojaDEcmRWkRmNoMRyZFaRGb06JdWGIEbW8LuuasYsPPdjh6yiNhQRnEbDqi62MNP1&_nc_ohc=DpPRJSJcusUAX80VALX&_nc_ht=scontent.fpoa4-1.fna&oh=f19a8fb79a16b7258af29d9217a5dbfe&oe=6000CE37'}
        />

        <Post
          nomeUsuario={'Artur'}
          fotoUsuario={'https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.0-9/20800075_1124342047699499_6395856514030794579_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEHjqveKEpIqpxPcCNscrSojaDEcmRWkRmNoMRyZFaRGb06JdWGIEbW8LuuasYsPPdjh6yiNhQRnEbDqi62MNP1&_nc_ohc=DpPRJSJcusUAX80VALX&_nc_ht=scontent.fpoa4-1.fna&oh=f19a8fb79a16b7258af29d9217a5dbfe&oe=6000CE37'}
          fotoPost={'https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.0-9/120189467_2073491176115723_5475603113563660425_n.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEbQ9M11xhKeaEgJGyPzZ-H96hTm4BkfD73qFObgGR8PrFp1Xg5wqSXOzSwxchvBaQoJa5U4yyFEmW8VQsX3fwc&_nc_ohc=lZewTFJDH7wAX-G-Xb4&_nc_ht=scontent.fpoa4-1.fna&oh=a551985d1522f977d4be41db2f8de177&oe=6000E616'}
        />

        <Post
          nomeUsuario={'André'}
          fotoUsuario={'https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.0-9/22365325_1383542348411304_8128132842285662129_n.jpg?_nc_cat=110&cb=846ca55b-ee17756f&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFGpfbSah8e69nFMje4ml1l6O6w5MElz2Xo7rDkwSXPZVNB4JpUIeKGRxoav-jDh9CR7UKW-aKbqFqK9p2aMnTb&_nc_ohc=IgH_73F5AToAX98EcwE&_nc_ht=scontent.fpoa4-1.fna&oh=73b29d658f61f6359f866f65c46b213a&oe=600043DE'}
          fotoPost={'https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.0-9/131100911_3818760178145383_991770506996339876_o.jpg?_nc_cat=109&ccb=2&_nc_sid=a26aad&_nc_eui2=AeGWsNt4GqWeDnul8nzsbradjgNs8HHA-WWOA2zwccD5ZdF5APtJkMnpzB4tixMPUhOR5HogiqWJUxRM2OEDHKqS&_nc_ohc=2f4IFKqKHxgAX81Rn6P&_nc_ht=scontent.fpoa4-1.fna&oh=c5cc32a31b3be0a8622a1cacfbb1dfbe&oe=5FFE444E'}
        />
      </div>

      
      
    );
  }
}

export default App;
