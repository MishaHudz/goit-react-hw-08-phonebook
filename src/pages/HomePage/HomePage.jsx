import { useNavigate } from 'react-router-dom';
import homePageImage from '../../images/homePageImage.png';
import {
  HomePageContactsBtn,
  HomePageImageContainer,
  HomePageInfo,
  HomePageInfoContainer,
  HomePageSection,
} from './HomePage.styled';

function HomePage() {
  const navigate = useNavigate();

  return (
    <HomePageSection>
      <HomePageImageContainer>
        <img src={homePageImage} width="230" alt="Phonebook with old phone" />
      </HomePageImageContainer>
      <HomePageInfoContainer>
        <h1>
          Save <br /> Contacts
        </h1>
        <HomePageInfo>
          Welcome to our contact management website! <br /> Log in or register
          to gain full access to all features. Record your contact numbers and
          conveniently manage them. We provide a simple search tool for quickly
          finding the information you need. <br /> You can add, and delete
          contacts from your list. Your privacy and security are our priority.
          All the data you enter is protected and confidential. Only you have
          access to your contacts. <br /> Join us today and enjoy convenient
          management of your contacts. Registration takes just a few minutes.
          Start organizing your contacts easily and quickly!
        </HomePageInfo>
        <HomePageContactsBtn onClick={() => navigate('/contacts')}>
          Contacts
        </HomePageContactsBtn>
      </HomePageInfoContainer>
    </HomePageSection>
  );
}

export default HomePage;
