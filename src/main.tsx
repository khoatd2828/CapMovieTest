import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider, ReactToastifyProvider } from 'contexts'
import { Provider } from 'react-redux'
import { store } from 'store'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <ReactToastifyProvider>
      <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>
      </BrowserRouter>,
    </ReactToastifyProvider>
  </ThemeProvider>
)
