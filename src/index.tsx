import "./index.css";
import {
  FlexBox,
  Heading,
  FullScreen,
  AnimatedProgress,
  Slide,
  Deck,
  Text,
  Box,
  Image,
  CodePane,
  Notes,
  Link,
  Progress,
} from "spectacle";
import { createRoot } from "react-dom/client";
import GlitchEmbed from "./GlitchEmbed";
import septimaLogo from "./img/Septima_logo_white.png";
import bgImg from "./img/DSC08397.jpeg";
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
      <Progress />
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
        <iframe
          src="https://codesandbox.io/embed/empty-meadow-6rqros?fontsize=14&hidenavigation=1&theme=dark&view=preview"
          style={{
            width: "100%",
            // height: 500,
            border: 0,
            borderRadius: 4,
            overflow: "hidden",
          }}
          title="empty-meadow-6rqros"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </FlexBox>
    </Slide>
    <Slide>
      <Text>Idea: Add route point by point using requestAnimationFrame()</Text>

      <CodePane language="javascript">{`
let progress = 0;
let animationFeature = new Feature()
const animateLine = (routeFeature) => {
  if (progress < routeFeature.geometry.coordinates.length) {
    // we have not added all the points yet, call requestAnimationFrame()
    animationFeature.features[0].geometry.coordinates.push(
      routeFeature.geometry.coordinates[progress]
    );
    map.getSource("line-animation").setData(animationFeature);
    progress = progress + 1;
    animation = requestAnimationFrame(animateLine);
  } else {
    // we have added all the points, do not call requestAnimationFrame()
    map.getSource("line-animation").setData(routeFeature);
    progress = 0;
  }
};
        `}</CodePane>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <GlitchEmbed id="animated-route-2" />
      </FlexBox>
    </Slide>
    <Slide>
      <Text>Problem: Unable to control duration</Text>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <GlitchEmbed id="animated-route-3-foss4g" />
      </FlexBox>
    </Slide>
    <Slide>
      <Text>
        Idea: use turf.js to calculate length of line, and add points to control
        duration
      </Text>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <GlitchEmbed id="animated-route-4-foss4g" />
      </FlexBox>
    </Slide>
    <Slide>
      <Text>Final touch: add easing</Text>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <GlitchEmbed id="animated-route-5-foss4g" />
      </FlexBox>
    </Slide>
    <Slide
      backgroundColor="tertiary"
      backgroundImage={`url(${bgImg})`}
      backgroundOpacity={0.7}
    >
      <Heading color="#dec549">Thank you!</Heading>
      <FlexBox height="100%">
        <Text fontSize={24}>@haakseth</Text>
      </FlexBox>
    </Slide>
  </Deck>
);

const root = createRoot(document.getElementById("root")!);
root.render(<Presentation />);
