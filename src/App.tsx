import { resolveRoute } from './routes';

function App({ url }: { url: string }) {
  const { Component } = resolveRoute(url);
  return <Component />;
}

export default App;
