import React from 'react'
import ReactDOM from 'react-dom/client'
import Article from './Article.tsx'
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <Article />
    </QueryClientProvider>
  </React.StrictMode>,
)
