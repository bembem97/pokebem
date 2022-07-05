import Container from "@mui/material/Container"
import styled from "@emotion/styled"

const Page = ({ children }) => (
  <Container className="Page-Container">{children}</Container>
)

const PageContainer = styled(Page)`
  ${({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  })}
`

export default PageContainer
