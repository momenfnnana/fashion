import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { Box, useTheme } from "../components";

// comming from this website https://react-svgr.com/playground/?native=true
const Google = () => (
  <Svg width={48} height={48} viewBox="0 0 48 48" fill="none">
    <Path
      d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"
      fill="#fff"
    />
    <Path
      d="M24 17.621c1.953 0 3.27.844 4.021 1.549l2.935-2.866C29.154 14.628 26.808 13.6 24 13.6c-4.067 0-7.58 2.334-9.29 5.731l3.362 2.612c.844-2.508 3.178-4.322 5.928-4.322z"
      fill="#EA4335"
    />
    <Path
      d="M33.984 24.231c0-.855-.07-1.479-.22-2.126H24v3.86h5.732c-.116.959-.74 2.403-2.127 3.374l3.282 2.542c1.965-1.814 3.097-4.484 3.097-7.65z"
      fill="#4285F4"
    />
    <Path
      d="M18.084 26.057A6.401 6.401 0 0117.737 24c0-.716.127-1.41.335-2.057l-3.363-2.612A10.41 10.41 0 0013.6 24c0 1.675.405 3.259 1.11 4.668l3.374-2.611z"
      fill="#FBBC05"
    />
    <Path
      d="M24 34.4c2.808 0 5.165-.924 6.887-2.52l-3.282-2.541c-.878.612-2.057 1.04-3.605 1.04-2.75 0-5.084-1.815-5.916-4.322l-3.363 2.611C16.43 32.066 19.932 34.4 24 34.4z"
      fill="#34A853"
    />
  </Svg>
);

const Facebook = () => (
  <Svg viewBox="0 0 112.196 112.196">
    <Circle cx={56.098} cy={56.098} r={56.098} fill="#3b5998" />
    <Path
      d="M70.201 58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34c0-5.964 2.833-15.303 15.301-15.303l11.234.047v12.51h-8.151c-1.337 0-3.217.668-3.217 3.513v7.585h11.334l-1.325 12.876z"
      fill="#fff"
    />
  </Svg>
);

const Apple = () => (
  <Svg width={48} height={48} viewBox="0 0 48 48" fill="none">
    <Path
      d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.267 9.6c.251 1.707-.444 3.379-1.36 4.562-.98 1.268-2.67 2.25-4.307 2.198-.3-1.633.466-3.317 1.397-4.449 1.022-1.249 2.772-2.207 4.27-2.31zm4.918 24.022c.844-1.294 1.16-1.947 1.815-3.407-4.766-1.812-5.53-8.588-.813-11.188-1.438-1.804-3.46-2.85-5.368-2.85-1.375 0-2.317.359-3.174.685-.713.272-1.368.521-2.163.521-.86 0-1.622-.273-2.42-.559-.875-.314-1.795-.644-2.936-.644-2.141 0-4.42 1.309-5.866 3.546-2.031 3.15-1.685 9.073 1.61 14.119 1.177 1.806 2.75 3.834 4.808 3.852.854.009 1.422-.246 2.037-.522.704-.315 1.468-.658 2.793-.665 1.332-.008 2.085.339 2.78.66.598.275 1.154.532 2 .523 2.06-.017 3.72-2.265 4.897-4.071z"
      fill="#0B0B0A"
    />
  </Svg>
);

const SocialIcon = ({ children }: SocialIconProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.l * 2;
  return (
    <Box
      marginHorizontal="s"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
