import Cards from "../cards/Cards";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Profile from "../profile/Profile";

export default function Curriculum() {
  const avatar = {
    src: "https://avatars.githubusercontent.com/u/36167635?s=400&u=29d53d014f5e1e9454526cfb76c7bb93407cc0c1&v=4",
  };
  const profile = {
    avatar: avatar.src,
    bios: "Hi there! I'm Bruno",
    text: "Frontend developer at Cogna Education",
    link: "@brnmeneses",
  };

  const actions = [
    {
      id: 1,
      title: "Action 1",
      description: "This is the description of Action 1",
    },
    {
      id: 2,
      title: "Action 2",
      description: "This is the description of Action 2",
    },
    {
      id: 3,
      title: "Action 3",
      description: "This is the description of Action 3",
    },
  ];
  return (
    <>
      <Header title="Get in touch" />
      <Profile profile={profile} />
      <Cards />
      {/*       <Footer />*/}
    </>
  );
}
