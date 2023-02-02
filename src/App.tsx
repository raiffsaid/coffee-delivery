import { ThemeProvider } from 'styled-components';
import { Header } from './pages/Home/components/Header';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
    </ThemeProvider>
    
  )
}
