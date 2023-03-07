import { Box } from "@chakra-ui/react";
import CollapseAccordion from "../accordion/CollapseAccordion";
import ActionPage from "../action/ActionPage";
import Footer from "../footer/Footer";
import Profile from "../profile/Profile";
import DataTabs from "../tabs/DataTabs";

export default function Curriculum() {
  const avatar = {
    src: "https://avatars.githubusercontent.com/u/36167635?s=400&u=29d53d014f5e1e9454526cfb76c7bb93407cc0c1&v=4",
  };
  const profile = {
    avatar: avatar.src,
    name: "Bruno Meneses",
    link: "@brnmeneses",
    text: "Frontend developer at Platos.",
    //tags: { tag1: "olaMundo", tag2: "teste", tag3: "Super" },
  };

  const tabData = [
    {
      label: "Formação Acadêmica",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor augue arcu, a ullamcorper ligula ultrices vel. Quisque ut eleifend nisl. Proin vulputate consectetur diam, quis tempus nisi fermentum sed. In viverra fermentum elit ac lobortis. Duis mauris elit, vestibulum vitae facilisis in, blandit a diam. Etiam et purus sed odio dictum aliquet at nec nisi. Vestibulum porttitor pharetra tellus et feugiat. Morbi fermentum turpis massa, vel luctus ipsum dapibus eget. Curabitur euismod neque vel erat bibendum, elementum maximus nisl eleifend. Duis leo dolor, semper nec volutpat vel, dignissim nec felis. Nunc sodales risus vel eros varius porta.",
    },
    {
      label: "Experiências Profissionais",
      content:
        "Vestibulum pellentesque porttitor ipsum quis iaculis. Vestibulum sollicitudin nisi gravida eros tristique viverra. Nunc nec neque nulla. Donec ut enim tempus, tempor dui sed, blandit tellus. Nunc metus dolor, sodales quis massa et, sagittis porttitor mauris. Duis felis justo, efficitur nec feugiat dignissim, porttitor eu neque. Donec pulvinar vitae nibh quis tempus. Etiam nec nisi malesuada, consequat neque id, varius ante. Suspendisse lacinia, felis vitae laoreet venenatis, risus elit euismod diam, non cursus velit arcu aliquam neque. Proin at turpis hendrerit, tempor leo eu, sodales urna. Duis dapibus varius egestas. Suspendisse lobortis euismod velit quis dapibus. Etiam malesuada vehicula felis nec semper. Duis ac placerat turpis. Donec velit odio, pellentesque vitae imperdiet sed, rhoncus efficitur metus. Integer rutrum facilisis tincidunt.",
    },
    {
      label: "Soft Skills",
      content:
        "Fusce sit amet mattis nisl. Nam augue nulla, vehicula aliquam mi ut, interdum laoreet ipsum. Mauris ut nulla felis. Cras molestie imperdiet eros sed hendrerit. Aenean eu arcu eros. Proin quam sem, ullamcorper nec ex consectetur, convallis congue eros. Nullam non dapibus tortor. Donec mollis, ante sodales consequat condimentum, felis velit placerat nulla, eu dignissim velit dui ut urna. Ut sit amet orci et nisi sagittis commodo ut eget ante. Praesent vulputate erat nulla, sit amet mattis turpis pulvinar vitae.",
    },
    {
      label: "Hard Skills",
      content:
        "Duis hendrerit nisl mi, ut euismod nisl lacinia quis. Sed at dictum enim, ut pretium leo. In dictum eros quis vulputate dictum. Morbi ultricies dui purus, at hendrerit massa bibendum nec. Donec id libero pellentesque, lobortis lacus a, cursus nisi. Pellentesque pretium id urna nec maximus. Integer condimentum non neque ut sagittis. Sed id felis ullamcorper ligula porttitor pharetra. Sed ex magna, tempus at elementum eu, hendrerit non arcu. Maecenas tempor pretium nisi vel pellentesque. Fusce elementum, leo a vehicula condimentum, enim mauris malesuada ante, vulputate commodo sem nulla non nunc.",
    },
  ];

  return (
    <>
      <Box
        w="80%"
        p={4}
        color="white"
        borderRadius={10}
        opacity={50}
        display="flex"
        alignItems="center"
        gap="4rem"
      >
        <Profile profile={profile}></Profile>
        <CollapseAccordion />
      </Box>
    </>
  );
}
