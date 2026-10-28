import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CTASection from './CTASection';
import { usePageMeta } from '@/hooks/usePageMeta';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  usePageMeta();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>{children}</main>
      <CTASection />
      <Footer />
    </div>
  );
};

export default PageLayout;
