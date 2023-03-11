import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ActionPage from "../action/ActionPage";
import Header from "../header/Header";

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

  return (
    <>
      <Header title="" />
      <ActionPage></ActionPage>
    </>
  );
}
