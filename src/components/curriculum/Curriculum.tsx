import Profile from "../profile/Profile";

export default function Curriculum() {
  const avatar = { teste: "Ola" };
  const avatarTags = { tag1: "olaMundo", tag2: "teste", tag3: "Super" };
  return (
    <Profile
      avatar="https://avatars.githubusercontent.com/u/36167635?s=400&u=29d53d014f5e1e9454526cfb76c7bb93407cc0c1&v=4"
      name="Bruno Meneses"
      link="@brnmeneses"
      text="Desenvolvedor frontend at Platos Educação. Inglês fluente"
      tags={avatarTags}
    ></Profile>
  );
}
