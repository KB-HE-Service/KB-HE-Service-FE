import { Background, WhiteContainer, TopLogo, NavigationBar } from "@/entities";

const HomeContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Background color="#FCAF16" />
      <TopLogo />
      <WhiteContainer>{children}</WhiteContainer>
      <NavigationBar />
    </>
  );
};

export default HomeContainer;
