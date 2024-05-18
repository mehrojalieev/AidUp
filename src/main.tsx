import './scss/index.scss'
import { QueryClientProvider } from '@tanstack/react-query'
import Loading from './components/loading/Loading.tsx'
import { client } from './service/QueryClient.ts'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Suspense, lazy } from 'react'
import './i18next/language.ts'
const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </Suspense>
  </BrowserRouter>,
)
