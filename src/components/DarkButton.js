import Switch from 'react-switch';

const DarkButton = ({ theme, toggleTheme }) => {
  const setMode = theme === 'light';

  return (
    <Switch checked={setMode} onChange={toggleTheme} onColor="#0169B9" />
  );
};


export default DarkButton;
