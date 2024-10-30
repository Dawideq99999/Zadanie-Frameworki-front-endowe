import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';

function RootLayout({ items, children }) {
  return (
    <div>
      <NavBarMenu items={items} />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default RootLayout;
