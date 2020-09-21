import '../styles/globals.css'
import { Provider } from 'react-redux';
import { useStore } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store'

function App({ Component, pageProps }) {
 
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App)
