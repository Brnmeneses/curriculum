import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Profile from "../profile/Profile";

export default function CollapseAccordion() {
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
      <Accordion defaultIndex={[0]} borderStyle={"hidden"}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Apresentação
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            volutpat, nisl eu varius lacinia, lacus urna dictum erat, sed
            posuere orci metus et neque. Maecenas at nisl eleifend diam
            condimentum ullamcorper. Sed molestie sem turpis, quis suscipit
            metus luctus non. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nulla nulla quam, molestie ac felis a, suscipit mollis quam.
            Quisque vel rutrum elit. Quisque convallis hendrerit leo et
            convallis. Donec pharetra libero et nisi interdum blandit. Sed eros
            sem, tristique rhoncus ligula nec, efficitur ultrices metus.
            <br />
            Duis enim diam, mollis nec blandit quis, mollis in eros. Donec
            sapien odio, semper non est at, fermentum finibus nisi. Nulla sed ex
            auctor mauris molestie egestas. Quisque ut nisl egestas, eleifend
            mauris a, rutrum ex. Integer quis pharetra nunc. Maecenas
            condimentum eros in ipsum aliquet, in euismod lectus facilisis.
            Integer accumsan vel nisi nec pulvinar. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla eget tempor enim, quis tempus
            risus.
            <br />
            Donec vestibulum aliquam nisi, posuere tempor sem cursus sed. Sed
            eget pretium erat, a tincidunt sem. Pellentesque rhoncus nibh diam,
            ut tristique diam efficitur sit amet. Suspendisse sed lacinia ipsum.
            Aliquam vestibulum, lorem vel mollis sollicitudin, dui ligula
            condimentum enim, nec interdum nisl lacus quis tortor. In tortor
            tortor, imperdiet vel ante ut, vehicula porttitor justo. Praesent
            scelerisque urna finibus tincidunt pulvinar. Cras rhoncus ex sit
            amet mauris tincidunt, eu varius magna porttitor. Vestibulum eget
            blandit nulla. Nullam ac neque eget est aliquam faucibus nec eu
            eros. Nulla nunc ipsum, elementum vitae dolor a, fermentum pharetra
            nulla. Etiam ultricies mattis mi sit amet malesuada.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Acadêmico
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Experiência
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Projetos
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
