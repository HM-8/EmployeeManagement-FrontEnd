import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import styled from 'styled-components';
import DarkButton from './DarkButton';

const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.813rem 6.25rem;
  background: ${({ theme }) => theme.toggleBook}; 
  transition: background 0.40s linear;

  > div {
    &:last-child {
      border: solid 1px var(--neutral-color-1);
      border-radius: 50%;
      padding: 0.875rem;
      width: 2.813rem;
      height: 2.813rem;
      color: var(--primary-color-1);
      @media (max-width: 768px){
        display: none
      }
    }
  }

  @media (max-width: 992px){
    padding: 2rem;
  }

  @media (max-width: 768px){
    padding: 1rem;
  }
`;


const Header = ({ theme, toggleTheme }) => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <NavBar>
        <div>
          <h2>Employee Manager</h2>
        </div>
      <div>
        <DarkButton theme={theme} toggleTheme={toggleTheme} />
      </div>
      {/* <div className="avatar">
        <ImUser />
      </div> */}
    </NavBar>
  );
};

export default Header;
