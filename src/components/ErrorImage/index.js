import {ErrorContainer, Para, Head, Button, ErrorImg} from './styledComponent'
import AppTheme from '../../context/ThemeContext'

const ErrorImage = props => (
  <AppTheme.Consumer>
    {value => {
      const {activeTheme} = value

      const refreshPage = () => {
        props.refresh()
      }

      return (
        <ErrorContainer>
          {activeTheme === 'light' ? (
            <ErrorImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
          ) : (
            <ErrorImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png" />
          )}
          <Head>Oops! Something Went Wrong</Head>
          <Para>
            We are having some trouble completing your request. Please try
            again.
          </Para>
          <Button onClick={refreshPage}>Retry</Button>
        </ErrorContainer>
      )
    }}
  </AppTheme.Consumer>
)

export default ErrorImage
