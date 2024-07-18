import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MenuMobile from '../../components/MenuMobile/MenuMobile';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen relative max-w-[100vw]">
      <Header onMenuToggle={handleMenuToggle} isOpen={menuOpen} />
      <MenuMobile isOpen={menuOpen} onClose={handleCloseMenu} />
      <main className="flex-grow bg-light">
        {children}
      </main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
