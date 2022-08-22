import "./index.css";
import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  ListItem,
  FullScreen,
  AnimatedProgress,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  Notes,
  Link,
} from "spectacle";
import { createRoot } from "react-dom/client";
import GlitchEmbed from "./GlitchEmbed";

const formidableLogo =
  "https://avatars2.githubusercontent.com/u/5078602?s=280&v=4";

const septimaLogo = "/Septima_logo_white.png";
// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box>
      <Image src={septimaLogo} width={100} />
    </Box>
    <Box>
      <div style={{ pointerEvents: "all" }}>
        <Link href="https://www.haakseth.com" fontSize={14} color="#ebe5da">
          haakseth.com
          {/* <a
          style={{ fontSize: 12, pointerEvents: "all" }}
          href="https://www.haakseth.com"
        >
          haakseth.com
        </a> */}
        </Link>
      </div>
    </Box>
    <Box padding="0 1em">
      <AnimatedProgress />
    </Box>
  </FlexBox>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>Custom Webmap Animations</Heading>
        <Text>John Wika Haakseth</Text>
        <Text>@haakseth</Text>
        <Text>haakseth.github.io/foss4g-2022</Text>
      </FlexBox>
      <Notes>
        Spectacle supports notes per slide.
        <ol>
          <li>Notes can now be HTML markup!</li>
          <li>Lists can make it easier to make points.</li>
        </ol>
      </Notes>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <GlitchEmbed id="animated-route-1" />
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <GlitchEmbed id="animated-route-2" />
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <GlitchEmbed id="animated-route-3-long" />
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <GlitchEmbed id="animated-route-4" />
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <GlitchEmbed id="animated-route-5" />
      </FlexBox>
    </Slide>
    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/src/beau.jpg?raw=true)"
      backgroundOpacity={0.6}
    >
      <Heading>Custom Backgrounds</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>backgroundColor</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundImage</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundOpacity</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundSize</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundPosition</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundRepeat</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <CodePane language="jsx">{`
        import { createClient, Provider } from 'urql';

        const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });

        const App = () => (
          <Provider value={client}>
            <Todos />
          </Provider>
        );
        `}</CodePane>
      <Box height={20} />
      <CodePane language="java" showLineNumbers={false}>{`
        public class NoLineNumbers {
          public static void main(String[] args) {
            System.out.println("Hello");
          }
        }
        `}</CodePane>
    </Slide>
  </Deck>
);

const root = createRoot(document.getElementById("root")!);
root.render(<Presentation />);
