import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navigation = ({ navigation }) => {
  const router = useRouter()

  return (
    <NavigationStyled>
      <ul>
        {
          navigation.map(navItem => (
            <li key={navItem.id}>
              <Link href={navItem.slug}>
                <a className={router.pathname == navItem.slug ? 'active' : ''}>{navItem.title}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </NavigationStyled>
  )
}
const NavigationStyled = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    li {
      margin-left: 12px;
    }
    a {
      text-decoration: none;
      color: #4C9EE3;
      &:hover {
        text-decoration: underline;
      }
      &.active {
        color: #EF6800;
      }
    }
  }`

export default Navigation