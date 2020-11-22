import styled from '@emotion/styled'
import { Link } from '../i18n'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import HeaderContext from '../context/headerContext'

const Navigation = () => {
  const router = useRouter()
  const { menuItems, color } = useContext(HeaderContext)

  return (
    <NavigationStyled color={color}>
      <ul>
        {
          menuItems.map(navItem => (
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
      color: ${props => props.color ? '#4c9ee3' : '#000'};
      &:hover {
        text-decoration: underline;
      }
      &.active {
        color: #EF6800;
      }
    }
  }`

export default Navigation